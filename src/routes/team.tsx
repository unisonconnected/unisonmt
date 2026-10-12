import { createFileRoute } from "@tanstack/react-router";
import { TeamContent } from "@/components/unison-content";
import { unisonPageHead } from "@/lib/unison-page-head";

export const Route = createFileRoute("/team")({
  head: () => unisonPageHead("Meet the Team", "Meet Julian Briffa, Ben Lautier and Jake Abela, the team behind Unison Malta and Picture This!."),
  component: TeamContent,
});
