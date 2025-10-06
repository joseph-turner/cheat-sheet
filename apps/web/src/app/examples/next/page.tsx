import Link from "next/link";
import { Button, Card } from "@repo/ui";
import { formatName } from "@repo/utils";

/**
 * Example 1: Server Component (default)
 * Rendered on the server, no JavaScript sent to client
 */
async function ServerComponentExample() {
  // Simulate async data fetching
  const data = await new Promise<string>((resolve) =>
    setTimeout(() => resolve("Data from server"), 100)
  );

  return (
    <Card title="Server Component">
      <p className="mb-2">{data}</p>
      <p className="text-sm text-gray-600">
        This component is rendered on the server. View the page source to see
        the HTML.
      </p>
    </Card>
  );
}

/**
 * Example 2: Using Workspace Utilities
 * Demonstrates importing from @repo/utils
 */
function WorkspaceUtilsExample() {
  const formattedName = formatName("john doe");

  return (
    <Card title="Workspace Utils Example">
      <p className="mb-2">
        Original: &quot;john doe&quot;, Formatted: {formattedName}
      </p>
      <p className="text-sm text-gray-600">
        Using formatName() from @repo/utils package
      </p>
    </Card>
  );
}

/**
 * Example 3: Static Metadata
 * Next.js metadata API for SEO
 */
export const metadata = {
  title: "Next.js Patterns | Cheat Sheet",
  description: "Examples of Next.js patterns and best practices",
};

/**
 * Example 4: Layout & Page Structure
 */
export default function NextPatternsPage() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline">← Back to Home</Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">Next.js Patterns</h1>

        <div className="space-y-6">
          {/* Server Component */}
          <ServerComponentExample />

          {/* Workspace Utils */}
          <WorkspaceUtilsExample />

          {/* File-based Routing */}
          <Card title="File-based Routing">
            <p className="mb-2">
              This page is located at{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                /app/examples/next/page.tsx
              </code>
            </p>
            <p className="text-sm text-gray-600">
              Next.js uses the file system for routing. Each folder becomes a
              route segment.
            </p>
          </Card>

          {/* App Router Features */}
          <Card title="App Router Features">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Server Components:</strong> Default rendering mode,
                great for data fetching
              </li>
              <li>
                <strong>Client Components:</strong> Use &quot;use client&quot;
                directive for interactivity
              </li>
              <li>
                <strong>Layouts:</strong> Shared UI that preserves state across
                navigation
              </li>
              <li>
                <strong>Loading States:</strong> Use loading.tsx for automatic
                loading UI
              </li>
              <li>
                <strong>Error Handling:</strong> Use error.tsx for error
                boundaries
              </li>
            </ul>
          </Card>

          {/* Data Fetching Patterns */}
          <Card title="Data Fetching Patterns">
            <div className="space-y-3 text-sm">
              <div>
                <strong>Server Components (default):</strong>
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {`async function Component() {
  const data = await fetch('api/data');
  return <div>{data}</div>;
}`}
                </pre>
              </div>
              <div>
                <strong>Client Components (SWR/React Query):</strong>
                <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
                  {`'use client';
function Component() {
  const { data } = useSWR('/api/data');
  return <div>{data}</div>;
}`}
                </pre>
              </div>
            </div>
          </Card>

          {/* Image Optimization */}
          <Card title="Image Optimization">
            <p className="text-sm mb-2">
              Use the Next.js Image component for automatic optimization:
            </p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {`import Image from 'next/image';

<Image
  src="/photo.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // for above-the-fold images
/>`}
            </pre>
          </Card>
        </div>
      </main>
    </div>
  );
}
