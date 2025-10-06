"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Button, Card } from "@repo/ui";
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
      <p className="text-sm text-gray-600 mt-2">
        (Updates every second using setInterval)
      </p>
    </Card>
  );
}

/**
 * Example 3: useCallback Hook
 * Memoizes callback functions to prevent unnecessary re-renders
 */
function UseCallbackExample() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function would be recreated on every render
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <Card title="useCallback Example">
      <p className="mb-4">Count: {count}</p>
      <Button onClick={handleIncrement}>Increment (Memoized)</Button>
      <p className="text-sm text-gray-600 mt-2">
        The increment function is memoized with useCallback
      </p>
    </Card>
  );
}

/**
 * Example 4: useMemo Hook
 * Memoizes expensive calculations
 */
function UseMemoExample() {
  const [number, setNumber] = useState(5);
  const [dark, setDark] = useState(false);

  // Expensive calculation - only recalculates when 'number' changes
  const doubleNumber = useMemo(() => {
    console.log("Calculating double...");
    return number * 2;
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <Card title="useMemo Example">
      <div style={themeStyles} className="p-4 rounded mb-4">
        <p className="mb-4">
          Input: {number}, Doubled: {doubleNumber}
        </p>
        <div className="space-x-2">
          <Button onClick={() => setNumber(number + 1)}>Increment</Button>
          <Button variant="secondary" onClick={() => setDark(!dark)}>
            Toggle Theme
          </Button>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        Check console - doubleNumber only recalculates when number changes
      </p>
    </Card>
  );
}

/**
 * Example 5: Custom Hook
 * Reusable stateful logic
 */
function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    return initialValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
}

function CustomHookExample() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <Card title="Custom Hook Example">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border px-4 py-2 rounded mb-4 w-full"
      />
      <p className="text-sm text-gray-600">
        Your name is saved to localStorage. Try refreshing the page!
      </p>
    </Card>
  );
}

export default function ReactPatternsPage() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline">← Back to Home</Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">React Patterns & Hooks</h1>

        <div className="space-y-6">
          <UseStateExample />
          <UseEffectExample />
          <UseCallbackExample />
          <UseMemoExample />
          <CustomHookExample />
        </div>
      </main>
    </div>
  );
}
