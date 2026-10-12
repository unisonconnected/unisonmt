import { createFileRoute } from "@tanstack/react-router";
import { ImpactContent } from "@/components/unison-content";
import { unisonPageHead } from "@/lib/unison-page-head";

export const Route = createFileRoute("/impact")({
  head: () => unisonPageHead("Our Impact", "Discover how Unison helps unite young people, combat loneliness and support adolescent mental health."),
  component: ImpactContent,
});
