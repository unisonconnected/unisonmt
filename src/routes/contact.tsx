import { createFileRoute } from "@tanstack/react-router";
import { unisonPageHead } from "@/lib/unison-page-head";

export const Route = createFileRoute("/contact")({
  head: () => unisonPageHead("Contact Us", "Contact Unison Malta about Picture This!, orders, collection or delivery through email, WhatsApp and social media."),
  component: ContactPage,
});

function ContactPage() {
  return <div className="page-heading"><div className="eyebrow text-primary">UNISON MALTA</div><h1>Let’s connect!</h1><p>Interested in Picture This!? Get in touch with our team.</p></div>;
}
