import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cheat Sheet - Code Examples",
  description: "A collection of code examples and patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
