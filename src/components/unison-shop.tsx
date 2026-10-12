import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { localities } from "@/lib/unison-data";
import photo1 from "@/assets/source-10.webp.asset.json";
import photo2 from "@/assets/source-11.webp.asset.json";
import photo3 from "@/assets/source-12.webp.asset.json";
import photo4 from "@/assets/source-13.webp.asset.json";
import photo5 from "@/assets/source-14.webp.asset.json";
import photo6 from "@/assets/source-15.webp.asset.json";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];
const bounded = (value: number, minimum = 0) => Math.max(minimum, Math.min(100, Math.floor(value) || minimum));

export function UnisonShop() {
  const [photo, setPhoto] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [basket, setBasket] = useState(0);
  const [fulfilment, setFulfilment] = useState("");
  const [status, setStatus] = useState("");
  const total = basket * 12 + (basket > 0 && fulfilment === "delivery" ? 5 : 0);

  function checkout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (basket === 0) { setStatus("Please add at least one deck to your basket."); return; }
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    if (!name || !contact) { setStatus("Please enter your name and contact details."); return; }
    const address = fulfilment === "delivery" ? `\nLocality: ${data.get("locality")}\nAddress: ${data.get("address")}${data.get("address2") ? ", " + data.get("address2") : ""}\nPostcode: ${data.get("postcode")}` : "\nCollection: De La Salle College, Malta";
    const message = `Hello Unison! I would like to order Picture This!\nQuantity: ${basket} deck${basket === 1 ? "" : "s"}\nName: ${name}\nContact: ${contact}\n${fulfilment === "delivery" ? "Delivery fee: €5.00" : "Free collection"}${address}\nTotal: €${total.toFixed(2)}`;
    window.open(`https://wa.me/35677448717?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setStatus("Your order is ready in WhatsApp. Send the message to our team to complete your order.");
  }

  return <section className="shop-area" id="shop">
    <h2 className="section-title">The Picture This! Shop</h2>
    <div className="shop-shell">
      <div className="shop-image">
        <div className="product-gallery">
          <img id="product-main-image" src={photos[photo]?.url} alt={`Picture This! product photo ${photo + 1}`} />
          <div className="gallery-thumbs">{photos.map((image, index) => <Button variant="gallery" key={image.asset_id} className={index === photo ? "active" : ""} aria-label={`View product image ${index + 1}`} aria-pressed={index === photo} onClick={() => setPhoto(index)}><img src={image.url} alt={`Product preview ${index + 1}`} /></Button>)}</div>
        </div>
        <p className="gallery-hint">Explore the game · Tap a photo to preview</p>
      </div>
      <div className="shop-info">
        <div className="eyebrow text-primary">THE UNISON SHOP</div><h3>Picture This!</h3><div className="shop-price">€12.00</div>
        <p>Bring people together with our Picture This! card game. Choose how many decks you would like and send your order straight to our team.</p>
        <div className="shop-controls"><label htmlFor="deck-qty">Quantity</label><input id="deck-qty" type="number" inputMode="numeric" min="1" max="100" value={quantity} onChange={e => setQuantity(bounded(Number(e.target.value), 1))} /><Button variant="unison" className="shop-btn" onClick={() => { setBasket(bounded(basket + quantity)); setStatus(""); }}>Add to basket →</Button></div>
        <form className="shop-summary" onSubmit={checkout}>
          <h3>Your basket</h3><p id="basket-count">{basket === 0 ? "No decks added yet." : `${basket} × Picture This! — €${(basket * 12).toFixed(2)}`}</p>
          {basket > 0 && <div className="basket-qty"><Button type="button" variant="outline" aria-label="Remove one deck" onClick={() => setBasket(bounded(basket - 1))}>−</Button><input id="basket-edit" aria-label="Quantity in basket" type="number" min="0" max="100" value={basket} onChange={e => setBasket(bounded(Number(e.target.value)))} /><Button type="button" variant="outline" aria-label="Add one deck" onClick={() => setBasket(bounded(basket + 1))}>+</Button><Button id="basket-remove" type="button" variant="outline" onClick={() => setBasket(0)}>Remove</Button></div>}
          <div className="shop-total" aria-live="polite">Total: €{total.toFixed(2)}</div>
          <label htmlFor="customer-name">Your name</label><input id="customer-name" name="name" autoComplete="name" placeholder="Full name" required />
          <label htmlFor="customer-contact">Email or phone number</label><input id="customer-contact" name="contact" autoComplete="email" placeholder="How we can contact you" required />
          <label htmlFor="fulfilment">Collection or delivery <span className="text-destructive">*</span></label><select id="fulfilment" value={fulfilment} onChange={e => setFulfilment(e.target.value)} required><option value="">Choose an option</option><option value="collection">Collection — De La Salle College (Free)</option><option value="delivery">Delivery — +€5.00</option></select>
          {fulfilment === "collection" && <div className="fulfilment-info">Collection location: <strong>De La Salle College, Malta</strong><br />No collection fee.</div>}
          {fulfilment === "delivery" && <div>
            <label className="shop-field" htmlFor="delivery-locality">Locality in Malta or Gozo *</label><select name="locality" id="delivery-locality" autoComplete="address-level2" required><option value="">Select your locality</option>{localities.map(locality => <option key={locality}>{locality}</option>)}</select>
            <label className="shop-field" htmlFor="delivery-address">Address line 1 *</label><input id="delivery-address" name="address" autoComplete="address-line1" placeholder="House/flat number and street" required />
            <label className="shop-field" htmlFor="delivery-address-2">Address line 2 (optional)</label><input id="delivery-address-2" name="address2" autoComplete="address-line2" placeholder="Apartment, building, floor, etc." />
            <label className="shop-field" htmlFor="delivery-postcode">Postcode *</label><input id="delivery-postcode" name="postcode" autoComplete="postal-code" placeholder="e.g. ZTN 1234" required />
            <p className="fulfilment-info">Delivery fee: €5.00 per order</p>
          </div>}
          <Button variant="unison" type="submit" className="shop-btn" id="checkout-btn">Place order via WhatsApp ↗</Button>
          <p className="shop-status" role="status">{status}</p><p className="shop-note">Orders are sent to Unison through WhatsApp. Payment and delivery or collection are arranged directly with our team; no online payment is taken here.</p>
        </form>
      </div>
    </div>
  </section>;
}