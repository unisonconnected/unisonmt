import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/unison-content";
import { unisonPageHead } from "@/lib/unison-page-head";

export const Route = createFileRoute("/")({
  head: () => unisonPageHead("Unison — Bringing People Together", "Meet Unison Malta: bringing people together through real-world connection and the Picture This! challenge game."),
  component: HomeContent,
});
