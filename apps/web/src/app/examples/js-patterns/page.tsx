import Link from "next/link";
import { Button, Card } from "@repo/ui";

/**
 * JavaScript Design Patterns & Best Practices
 */

export const metadata = {
  title: "JavaScript Patterns | Cheat Sheet",
  description: "Common JavaScript design patterns and best practices",
};

export default function JSPatternsPage() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline">← Back to Home</Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">JavaScript Patterns</h1>

        <div className="space-y-6">
          {/* Module Pattern */}
          <Card title="Module Pattern">
            <p className="text-sm mb-2">
              Encapsulates private and public members using closures:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`const CounterModule = (function() {
  // Private variable
  let count = 0;
  
  // Private function
  function log() {
    console.log(\`Count: \${count}\`);
  }
  
  // Public API
  return {
    increment() {
      count++;
      log();
    },
    decrement() {
      count--;
      log();
    },
    getCount() {
      return count;
    }
  };
})();

CounterModule.increment(); // Count: 1
CounterModule.getCount(); // 1`}
            </pre>
          </Card>

          {/* Singleton Pattern */}
          <Card title="Singleton Pattern">
            <p className="text-sm mb-2">
              Ensures only one instance of a class exists:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`class Database {
  private static instance: Database;
  private connection: any;
  
  private constructor() {
    this.connection = this.connect();
  }
  
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
  
  private connect() {
    return { /* connection details */ };
  }
  
  public query(sql: string) {
    return this.connection.query(sql);
  }
}

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true`}
            </pre>
          </Card>

          {/* Observer Pattern */}
          <Card title="Observer Pattern">
            <p className="text-sm mb-2">
              One-to-many dependency between objects:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`class EventEmitter {
  private events: Map<string, Function[]> = new Map();
  
  on(event: string, callback: Function) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)?.push(callback);
  }
  
  off(event: string, callback: Function) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) callbacks.splice(index, 1);
    }
  }
  
  emit(event: string, data?: any) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }
}

// Usage
const emitter = new EventEmitter();
emitter.on('userLogin', (user) => {
  console.log(\`\${user.name} logged in\`);
});
emitter.emit('userLogin', { name: 'John' });`}
            </pre>
          </Card>

          {/* Factory Pattern */}
          <Card title="Factory Pattern">
            <p className="text-sm mb-2">
              Creates objects without specifying exact class:
            </p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`interface Vehicle {
  drive(): string;
}

class Car implements Vehicle {
  drive() {
    return 'Driving a car';
  }
}

class Bike implements Vehicle {
  drive() {
    return 'Riding a bike';
  }
}

class VehicleFactory {
  static create(type: 'car' | 'bike'): Vehicle {
    switch (type) {
      case 'car':
        return new Car();
      case 'bike':
        return new Bike();
      default:
        throw new Error('Unknown vehicle type');
    }
  }
}

// Usage
const car = VehicleFactory.create('car');
console.log(car.drive()); // "Driving a car"`}
            </pre>
          </Card>

          {/* Promise Patterns */}
          <Card title="Promise Patterns">
            <p className="text-sm mb-2">Modern async patterns:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`// Promise chaining
fetch('/api/user')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/await
async function fetchUser() {
  try {
    const response = await fetch('/api/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Promise.all - parallel execution
const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json())
]);

// Promise.race - first to resolve
const fastest = await Promise.race([
  fetch('/api/server1'),
  fetch('/api/server2'),
  fetch('/api/server3')
]);`}
            </pre>
          </Card>

          {/* Functional Patterns */}
          <Card title="Functional Programming Patterns">
            <p className="text-sm mb-2">Pure functions and immutability:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`// Pure function - no side effects
const add = (a: number, b: number) => a + b;

// Higher-order function
const withLogging = (fn: Function) => {
  return (...args: any[]) => {
    console.log('Args:', args);
    const result = fn(...args);
    console.log('Result:', result);
    return result;
  };
};

const loggedAdd = withLogging(add);
loggedAdd(2, 3); // Logs args and result

// Composition
const compose = (...fns: Function[]) => 
  (x: any) => fns.reduceRight((v, f) => f(v), x);

const double = (x: number) => x * 2;
const increment = (x: number) => x + 1;
const doubleThenIncrement = compose(increment, double);

doubleThenIncrement(3); // 7

// Array methods (map, filter, reduce)
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0); // 12`}
            </pre>
          </Card>

          {/* Debounce & Throttle */}
          <Card title="Debounce & Throttle Patterns">
            <p className="text-sm mb-2">Rate limiting function execution:</p>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
              {`// Debounce - delays execution until after wait time
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Usage - search input
const searchAPI = debounce((query: string) => {
  fetch(\`/api/search?q=\${query}\`);
}, 300);

// Throttle - limits execution rate
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage - scroll handler
const handleScroll = throttle(() => {
  console.log('Scrolling...');
}, 100);`}
            </pre>
          </Card>
        </div>
      </main>
    </div>
  );
}
