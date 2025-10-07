import Link from "next/link";
import { Button, Card } from "@/components";

export default function NextPage() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Next.js Patterns</h1>
          <p className="text-secondary text-lg">
            Modern Next.js patterns for building production-ready applications.
          </p>
        </header>

        <div className="space-y-8">
          <Card title="App Router">
            <p className="text-secondary mb-4">
              Next.js 13+ App Router provides a new way to structure your
              application with enhanced routing capabilities.
            </p>
            <ul className="space-y-2 text-secondary">
              <li>• Server and Client Components</li>
              <li>• Nested layouts and loading states</li>
              <li>• Parallel and intercepting routes</li>
              <li>• Streaming and Suspense</li>
            </ul>
          </Card>

          <Card title="Server Components">
            <p className="text-secondary mb-4">
              React Server Components allow you to render components on the
              server, reducing client-side JavaScript.
            </p>
            <pre className="text-sm">
              {`// app/posts/page.tsx
async function Posts() {
  const posts = await fetch('https://api.example.com/posts')
  return (
    <div>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  )
}`}
            </pre>
          </Card>

          <Card title="Metadata API">
            <p className="text-secondary mb-4">
              Enhanced SEO and social sharing with the new Metadata API.
            </p>
            <pre className="text-sm">
              {`// app/layout.tsx
export const metadata: Metadata = {
  title: 'My App',
  description: 'My awesome Next.js application',
  openGraph: {
    title: 'My App',
    description: 'My awesome Next.js application',
  },
}`}
            </pre>
          </Card>
        </div>
      </main>
    </div>
  );
}
