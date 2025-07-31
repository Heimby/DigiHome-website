import React from "react";

/**
 * Props for the KeyValue component
 */
export interface KeyValueProps {
  /**
   * The label or key to display (left side)
   */
  label: React.ReactNode;
  /**
   * The value to display (right side)
   */
  value: React.ReactNode;
  /**
   * Optional: Additional className for the container
   */
  className?: string;
}

/**
 * Generic KeyValue component for displaying a label and value pair
 * @example
 * <KeyValue label="Name" value="John Doe" />
 */
export function KeyValue({ label, value, className = "" }: KeyValueProps) {
  return (
    <div className={`flex flex-col gap-0.5 ${className}`}>
      <span className="text-gray-600">{label}</span>
      <p className="font-medium">{value}</p>
    </div>
  );
}

export default KeyValue;
