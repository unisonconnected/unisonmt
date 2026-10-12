import image0 from "@/assets/source-0.png.asset.json";
import image1 from "@/assets/source-1.jpg.asset.json";
import image10 from "@/assets/source-10.webp.asset.json";
import image11 from "@/assets/source-11.webp.asset.json";
import image12 from "@/assets/source-12.webp.asset.json";
import image13 from "@/assets/source-13.webp.asset.json";
import image14 from "@/assets/source-14.webp.asset.json";
import image15 from "@/assets/source-15.webp.asset.json";
import image2 from "@/assets/source-2.jpg.asset.json";
import image3 from "@/assets/source-3.jpg.asset.json";
import image4 from "@/assets/source-4.jpg.asset.json";
import image5 from "@/assets/source-5.jpg.asset.json";
import image6 from "@/assets/source-6.jpg.asset.json";
import image7 from "@/assets/source-7.jpg.asset.json";
import image8 from "@/assets/source-8.jpg.asset.json";
import image9 from "@/assets/source-9.webp.asset.json";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { UnisonShop } from "@/components/unison-shop";
export const Route = createFileRoute("/")({
 head: () => ({meta: [
 {title: "Unison | Picture This!"},
 {name: "description", content: "Bringing people together through Picture This!, a 60-card challenge game by Unison Malta. Meet our team and order your deck."},
 {property: "og:title", content: "Unison | Picture This!"},
 {property: "og:description", content: "Uniting people in a lonely world. Explore Picture This! and the Unison journey."},
 {property: "og:type", content: "website"},
 {name: "twitter:card", content: "summary_large_image"},
 ]}), component: Index,
});
function Index() { return <main>
<nav className="nav"><a className="logo" href="#home"><img alt="Unison logo" src={image0.url}/></a><div className="navlinks"><a href="#home">Home</a><a href="#product">Our Product</a><a href="#impact">Impact</a><a href="#events">Events</a><a href="#team">Team</a><a href="#contact">Contact</a></div><Button asChild variant="unison"><a className="order-top" href="#shop">🛒 ORDER NOW – €12</a></Button></nav>
<header className="hero" id="home"><div className="hero-inner"><div><div className="eyebrow">Picture This! by Unison</div><h1>Uniting People<br /><span>in a Lonely World.</span></h1><p>We’re on a mission to fight the loneliness epidemic by bringing people together through real-world connection and meaningful experiences.</p><div className="actions"><Button asChild variant="unison"><a className="btn yellow" href="#mission">Our Mission →</a></Button><Button asChild variant="unisonOutline"><a className="btn clear" href="#impact">♡ Our Impact →</a></Button></div></div><div className="product-visual"><img alt="Picture This product" src={image1.url}/></div><div className="buy-card"><div className="price">€12</div><h2>Picture This!</h2><p>A fun card game with 60 challenges that get you out, exploring, connecting and creating memories.</p><Button asChild variant="unison"><a className="btn yellow" href="#shop">🛒 ORDER NOW</a></Button><a className="small" href="#shop">Order directly from Unison ↗</a></div></div></header>
<div className="pill-strip" id="mission"><div className="pill"><div className="icon">👥</div><div><h3>Our Mission</h3><p><b>Bringing People Together</b><br />Creating experiences that encourage real connections.</p></div></div><div className="pill"><div className="icon">🚀</div><div><h3>Our Vision</h3><p><b>A World of Meaningful Connections</b><br />A future where no one feels alone.</p></div></div><div className="pill"><div className="icon">🌍</div><div><h3>Uniting People</h3><p><b>in a Lonely World</b><br />Because everyone deserves a connection.</p></div></div><div className="pill"><div className="icon">♡</div><div><h3>Better Mental Health</h3><p><b>Through Social Interaction</b><br />Stronger connections lead to happier lives.</p></div></div></div>
<section className="section split" id="product"><div className="card"><h2>The Problem:<br /><span className="underline">Teen Loneliness Epidemic</span></h2><ul className="clean"><li>Shyness, anxiety, and low confidence make socialising difficult.</li><li>Lack of close friendships leads to emotional loneliness.</li><li>Feeling alone increases the risk of depression and anxiety.</li><li>Loneliness affects self-esteem and sense of belonging.</li><li>Without support, teens may withdraw even more from social life.</li></ul></div><div className="card"><h2>Our Solution:<br /><span className="underline">Picture This!</span></h2><ul className="clean solution-list"><li>A card game consisting of 60 cards.</li><li>Find objects and/or locations mentioned in the prompt.</li><li>Enact the prompt and take photos as evidence.</li></ul></div></section>
<section className="section unison-events" id="events"><div className="events-heading"><span className="events-kicker">OUR JOURNEY</span><h2>Unison on the international stage</h2><p>From Malta to Gen-E Latvia 2026 — celebrating the moments that brought our team together.</p></div><div className="events-gallery"><figure className="event-photo"><img alt="Unison team exhibiting Picture This! at Gen-E" loading="lazy" src={image2.url}/><figcaption>Representing Malta at Gen-E</figcaption></figure><figure className="event-photo"><img alt="Unison team on the Get in the Ring stage" loading="lazy" src={image3.url}/><figcaption>Get in the Ring — first runners-up</figcaption></figure></div><div className="events-story"><p>UNISON, a JA team from De La Salle Sixth Form, was the first Maltese JA company to participate in the Gen-E Get in the Ring competition. Chosen from over 1,000 applicants, the team finished as first runners-up in the competition.</p><p>UNISON also won the EUIPO Youth IP Awareness Award, an international recognition that gave them the opportunity to participate at Gen-E.</p><p>As part of this achievement, a team member will be awarded a scholarship at Unknown University, Netherlands.</p></div><div className="events-archive-heading"><h3>More moments from our journey</h3><p>A look back at the experiences and events that shaped Unison.</p></div><div className="events-gallery events-archive"><figure className="event-photo"><img alt="Product design from Unison presentation" loading="lazy" src={image4.url}/></figure><figure className="event-photo"><img alt="Unison events and marketplaces" loading="lazy" src={image5.url}/></figure></div></section>
<section className="team-section" id="team"><h2 className="section-title"><span className="underline">MEET THE TEAM</span></h2><div className="team-grid">
<article className="member"><div className="photo-wrap"><img alt="Julian Briffa" src={image6.url}/></div><div className="member-text"><h3>Julian Briffa</h3><p>Finance Director</p></div></article>
<article className="member"><div className="photo-wrap"><img alt="Ben Lautier" src={image7.url}/></div><div className="member-text"><h3>Ben Lautier</h3><p>Managing Director</p></div></article><article className="member jake-card"><div className="photo-wrap"><img alt="Jake Abela" src={image8.url}/></div><div className="member-text"><h3>Jake Abela</h3><p>Quality Control</p></div></article></div></section>
<section className="section" id="impact"><div className="impact"><h2>Impact:<br />Driving Real-World Change</h2><div className="impact-item"><div className="round">🤝</div><span>Combat the loneliness epidemic</span></div><div className="impact-item"><div className="round">👥</div><span>Help to unite the youth</span></div><div className="impact-item"><div className="round">🧠</div><span>Boost mental health for adolescents</span></div></div></section>
<UnisonShop />
<section className="section" id="contact"><div className="contact"><h2>Interested? <span>Get Connected!</span></h2><a href="mailto:unisonconnected@gmail.com">✉️ unisonconnected@gmail.com</a><a href="https://wa.me/35677448717" rel="noopener" target="_blank">📞 +356 77448717</a><a href="https://www.instagram.com/unison.mt?igsh=MWZ4NzZndTgyZTdjZQ==" rel="noopener" target="_blank">📸 @unison.mt</a><a href="https://vm.tiktok.com/ZNRwwfbVW/" rel="noopener" target="_blank">♪ @unison.mt</a></div></section>
<footer>BECAUSE WE’RE IN IT TOGETHER</footer>
</main>; }
