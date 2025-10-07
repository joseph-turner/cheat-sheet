import Link from "next/link";
import { Button, Card } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Code Examples & Patterns</h1>
          <p className="text-secondary text-lg">
            A curated collection of JavaScript, React, and Next.js patterns and
            best practices.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card
            title="React Patterns"
            footer={
              <Link href="/react">
                <Button variant="primary">View Examples</Button>
              </Link>
            }
          >
            <p className="text-secondary">
              Explore common React patterns including hooks, context, and
              component composition.
            </p>
          </Card>

          <Card
            title="Next.js Patterns"
            footer={
              <Link href="/next">
                <Button variant="primary">View Examples</Button>
              </Link>
            }
          >
            <p className="text-secondary">
              Learn Next.js patterns for routing, data fetching, and server
              components.
            </p>
          </Card>

          <Card
            title="Node.js Patterns"
            footer={
              <Link href="/node">
                <Button variant="primary">View Examples</Button>
              </Link>
            }
          >
            <p className="text-secondary">
              Discover essential Node.js patterns for backend development.
            </p>
          </Card>
        </div>

        <Card title="Features">
          <ul className="space-y-3">
            <li>
              <strong className="font-semibold">React Components:</strong>{" "}
              <span className="text-secondary">Shared UI components</span>
            </li>
            <li>
              <strong className="font-semibold">Utility Functions:</strong>{" "}
              <span className="text-secondary">Common utility functions</span>
            </li>
            <li>
              <strong className="font-semibold">TypeScript:</strong>{" "}
              <span className="text-secondary">
                Full TypeScript support with type safety
              </span>
            </li>
            <li>
              <strong className="font-semibold">Tailwind CSS:</strong>{" "}
              <span className="text-secondary">
                Modern styling with Tailwind CSS v4
              </span>
            </li>
          </ul>
        </Card>
      </main>
    </div>
  );
}
