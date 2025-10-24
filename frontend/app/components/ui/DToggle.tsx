import React from "react";
import type { DComponentBaseProps } from "./DComponentStandardProps";

interface DToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size">,
    DComponentBaseProps {
  label?: string;
  helperText?: string;
}

export default function DToggle({
  label,
  helperText,
  variant = "info",
  sizes = "sm",
  className = "",
  ...props
}: DToggleProps) {
  return (
    <label
      className={`flex items-center gap-3 px-3 py-2 bg-base-100 ${className}`}
    >
      <input
        type="checkbox"
        className={`toggle ${variant ? "toggle-" + variant : ""} ${
          sizes ? "toggle-" + sizes : ""
        }`}
        {...props}
      />
      {(label || helperText) && (
        <div className="flex flex-col text-left">
          {label && (
            <span className="text-sm font-medium text-base-content">
              {label}
            </span>
          )}
          {helperText && (
            <span className="text-xs text-base-content/60">{helperText}</span>
          )}
        </div>
      )}
    </label>
  );
}
