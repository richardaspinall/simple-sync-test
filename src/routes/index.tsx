import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GitHub Sync Test" },
      { name: "description", content: "A simple page to test GitHub sync." },
      { property: "og:title", content: "GitHub Sync Test" },
      { property: "og:description", content: "A simple page to test GitHub sync." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        GitHub Sync Test 🐙
      </h1>
      <p className="max-w-md text-muted-foreground">
        This is a simple page to test syncing your Lovable project with GitHub.
      </p>
      <a
        href="https://docs.lovable.dev/integrations/github"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Read GitHub docs
      </a>
    </div>
  );
}
