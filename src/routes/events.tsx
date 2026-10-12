import { createFileRoute } from "@tanstack/react-router";
import { EventsContent } from "@/components/unison-content";
import { unisonPageHead } from "@/lib/unison-page-head";

export const Route = createFileRoute("/events")({
  head: () => unisonPageHead("Events & Our Journey", "Discover Unison’s journey from Malta to Gen-E Latvia 2026 and our international achievements."),
  component: EventsContent,
});
