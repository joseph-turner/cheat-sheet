import Link from "next/link";
import { Button, Card } from "@repo/ui";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Code Examples & Patterns</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card
            title="React Patterns"
            footer={
              <Link href="/examples/react">
                <Button variant="primary">View Examples</Button>
              </Link>
            }
          >
            <p className="text-gray-600">
              Explore common React patterns including hooks, context, and
              component composition.
            </p>
          </Card>

          <Card
            title="Next.js Patterns"
            footer={
              <Link href="/examples/next">
                <Button variant="primary">View Examples</Button>
              </Link>
            }
          >
            <p className="text-gray-600">
              Learn Next.js patterns for routing, data fetching, and server
              components.
            </p>
          </Card>

          <Card
            title="JavaScript Patterns"
            footer={
              <Link href="/examples/js-patterns">
                <Button variant="primary">View Examples</Button>
              </Link>
            }
          >
            <p className="text-gray-600">
              Discover essential JavaScript design patterns and best practices.
            </p>
          </Card>
        </div>

        <Card title="Workspace Packages">
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>@repo/ui:</strong> Shared React components
            </li>
            <li>
              <strong>@repo/utils:</strong> Utility functions
            </li>
            <li>
              <strong>@repo/eslint-config:</strong> Shared ESLint configurations
            </li>
            <li>
              <strong>@repo/typescript-config:</strong> Shared TypeScript
              configurations
            </li>
          </ul>
        </Card>
      </main>
    </div>
  );
}
