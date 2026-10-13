import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import logo from "@/assets/unison-wordmark.png.asset.json";

export function UnisonNavigation() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = useLocation({ select: location => location.pathname });

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setVisible(true);
  }, [pathname]);

  useEffect(() => {
    let previous = window.scrollY;
    let travel = 0;
    function onScroll() {
      const current = window.scrollY;
      const difference = current - previous;
      travel = Math.sign(difference) === Math.sign(travel) ? travel + difference : difference;
      if (current < 90 || travel < -8) setVisible(true);
      else if (travel > 12) setVisible(false);
      previous = current;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <nav aria-label="Main navigation" className={`nav site-nav ${visible || mobileOpen || productsOpen ? "" : "nav-hidden"}`}>
    <Link className="logo" to="/" aria-label="Unison home"><img alt="Unison logo" src={logo.url} /></Link>
    <div id="page-navigation" className={`navlinks site-links ${mobileOpen ? "menu-open" : ""}`}>
      <Link to="/" activeOptions={{ exact: true }}>Home</Link>
      <DropdownMenu open={productsOpen} onOpenChange={setProductsOpen}>
        <DropdownMenuTrigger asChild><Button variant="unisonOutline" className={`products-trigger ${pathname.startsWith("/products") ? "selected" : ""}`}>Products <ChevronDown aria-hidden="true" /></Button></DropdownMenuTrigger>
        <DropdownMenuContent align="start" sideOffset={12} className="products-menu">
          <DropdownMenuItem asChild><Link to="/products/picture-this">Picture This!</Link></DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>Coming soon</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link to="/impact">Impact</Link><Link to="/events">Events</Link><Link to="/team">Team</Link><Link to="/contact">Contact us</Link>
    </div>
    <Button asChild variant="unison" className="nav-order"><Link className="order-top" to="/products/picture-this" hash="shop"><ShoppingCart aria-hidden="true" /><span>ORDER NOW – €12</span></Link></Button>
    <Button variant="unisonOutline" size="icon" className="mobile-menu-toggle" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="page-navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</Button>
  </nav>;
}

export function UnisonContact() {
  return <><section className="section shared-contact" id="contact" aria-labelledby="contact-heading"><div className="contact"><h2 id="contact-heading">Contact us <span>Get Connected!</span></h2><a href="mailto:unisonconnected@gmail.com">✉️ unisonconnected@gmail.com</a><a href="https://wa.me/35677448717" rel="noopener noreferrer" target="_blank">📞 +356 77448717</a><a href="https://www.instagram.com/unison.mt?igsh=MWZ4NzZndTgyZTdjZQ==" rel="noopener noreferrer" target="_blank">📸 @unison.mt</a><a href="https://vm.tiktok.com/ZNRwwfbVW/" rel="noopener noreferrer" target="_blank">♪ @unison.mt</a></div></section><footer>BECAUSE WE’RE IN IT TOGETHER</footer></>;
}