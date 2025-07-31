import React from "react";

/**
 * Props for the Card component
 */
export interface CardProps {
  /**
   * Title to display in the card header
   */
  title: React.ReactNode;
  /**
   * Card body content (children)
   */
  children: React.ReactNode;
  /**
   * Optional: Additional className for the card container
   */
  className?: string;
  /**
   * Optional: Content to display in the header right (e.g. actions)
   */
  headerRight?: React.ReactNode;
}

/**
 * Generic Card component for consistent layout
 * @example
 * <Card title="My Title">Body here</Card>
 */
export function Card({
  title,
  children,
  className = "",
  headerRight,
}: CardProps) {
  return (
    <section
      className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {headerRight}
      </div>
      {children}
    </section>
  );
}

export default Card;
