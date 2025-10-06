import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  footer?: React.ReactNode;
}

export function Card({ title, children, footer, className = "" }: CardProps) {
  return (
    <div className={`border rounded-lg shadow-sm ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
      {footer && <div className="px-6 py-4 border-t bg-gray-50">{footer}</div>}
    </div>
  );
}
