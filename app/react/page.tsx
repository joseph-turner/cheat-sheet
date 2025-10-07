"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Button, Card } from "@/components";
import Link from "next/link";

/**
 * Example 1: useState Hook
 * Used for managing component state
 */
function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <Card title="useState Example">
      <p className="mb-4">Count: {count}</p>
      <div className="space-x-2">
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button variant="secondary" onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
        <Button variant="outline" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </Card>
  );
}

/**
 * Example 2: useEffect Hook
 * Used for side effects like data fetching, subscriptions
 */
function UseEffectExample() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Effect runs after render
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array = run once on mount

  return (
    <Card title="useEffect Example">
      <p>Current Time: {time}</p>
      <p className="text-secondary mt-2">
        This clock updates every second using useEffect.
      </p>
    </Card>
  );
}

/**
 * Example 3: useCallback Hook
 * Used to memoize functions to prevent unnecessary re-renders
 */
function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // Without useCallback, this function would be recreated on every render
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Empty deps = function never changes

  const handleReset = useCallback(() => {
    setCount(0);
    setInput("");
  }, []); // Empty deps = function never changes

  return (
    <Card title="useCallback Example">
      <div className="space-y-4">
        <div>
          <p>Count: {count}</p>
          <Button onClick={handleIncrement}>Increment</Button>
        </div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type something..."
            className="border border-default rounded px-3 py-2 mr-2"
          />
          <Button variant="secondary" onClick={handleReset}>
            Reset All
          </Button>
        </div>
        <p className="text-secondary text-sm">
          handleIncrement and handleReset are memoized with useCallback
        </p>
      </div>
    </Card>
  );
}

/**
 * Example 4: useMemo Hook
 * Used to memoize expensive calculations
 */
function UseMemoExample() {
  const [count, setCount] = useState(1);
  const [input, setInput] = useState("");

  // Expensive calculation that we want to memoize
  const fibonacci = useMemo(() => {
    console.log("Calculating fibonacci for", count);

    function fib(n: number): number {
      if (n <= 1) return n;
      return fib(n - 1) + fib(n - 2);
    }

    return fib(count);
  }, [count]); // Only recalculate when count changes

  return (
    <Card title="useMemo Example">
      <div className="space-y-4">
        <div>
          <p>
            Fibonacci({count}) = {fibonacci}
          </p>
          <div className="space-x-2">
            <Button onClick={() => setCount((c) => Math.max(1, c - 1))}>
              Decrease
            </Button>
            <Button onClick={() => setCount((c) => Math.min(40, c + 1))}>
              Increase
            </Button>
          </div>
        </div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="This input won't trigger fibonacci recalculation"
            className="border border-default rounded px-3 py-2 w-full"
          />
        </div>
        <p className="text-secondary text-sm">
          Check the console - fibonacci only recalculates when count changes
        </p>
      </div>
    </Card>
  );
}

/**
 * Main React Examples Page
 */
export default function ReactPage() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <header className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">React Patterns & Hooks</h1>
          <p className="text-secondary text-lg">
            Essential React patterns and hook examples with practical use cases.
          </p>
        </header>

        <div className="space-y-8">
          <UseStateExample />
          <UseEffectExample />
          <UseCallbackExample />
          <UseMemoExample />
        </div>
      </main>
    </div>
  );
}
