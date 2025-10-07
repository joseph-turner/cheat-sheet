import Link from "next/link";
import { Button, Card } from "@/components";

export default function NodePage() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Node.js Patterns</h1>
          <p className="text-secondary text-lg">
            Essential Node.js patterns for backend development and server-side
            applications.
          </p>
        </header>

        <div className="space-y-8">
          <Card title="Express.js Middleware">
            <p className="text-secondary mb-4">
              Middleware functions are fundamental to Express.js applications.
            </p>
            <pre className="text-sm">
              {`// Basic middleware pattern
const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Route-specific middleware
app.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected route' });
});`}
            </pre>
          </Card>

          <Card title="Async/Await Error Handling">
            <p className="text-secondary mb-4">
              Proper error handling with async/await in Node.js applications.
            </p>
            <pre className="text-sm">
              {`// Error handling wrapper
const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage
app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new Error('User not found');
  }
  res.json(user);
}));`}
            </pre>
          </Card>

          <Card title="Environment Configuration">
            <p className="text-secondary mb-4">
              Managing environment variables and configuration in Node.js.
            </p>
            <pre className="text-sm">
              {`// config/index.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production'
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  }
};`}
            </pre>
          </Card>
        </div>
      </main>
    </div>
  );
}
