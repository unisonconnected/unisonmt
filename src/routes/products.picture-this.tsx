import { createFileRoute } from "@tanstack/react-router";
import { PictureThisContent } from "@/components/unison-content";
import { unisonPageHead } from "@/lib/unison-page-head";

export const Route = createFileRoute("/products/picture-this")({
  head: () => unisonPageHead("Picture This! — Product & Orders", "Explore the 60-card Picture This! challenge game and order your deck directly from Unison through WhatsApp."),
  component: PictureThisContent,
});
