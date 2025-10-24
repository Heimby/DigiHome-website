import React from "react";
import type { DComponentBaseProps } from "./DComponentStandardProps";

interface DButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<DComponentBaseProps, "variant"> {
  label?: string;
  icon?: React.ReactNode;
  /**
   * Renders a spinning icon or loading state when true.
   */
  isLoading?: boolean;
  isActive?: boolean;
  variant?: DComponentBaseProps["variant"] | "ghost" | "cure";
  isBold?: boolean;
}

export default function DButton({
  label,
  variant = "neutral",
  sizes = "md",
  icon,
  isLoading,
  isActive,
  isBold = true,
  ...props
}: DButtonProps) {
  return (
    <button
      className={`btn ${variant ? "btn-" + variant : ""} ${
        sizes ? "btn-" + sizes : ""
      } ${isActive ? "btn-active" : ""} ${
        variant === "cure"
          ? "text-base-content bg-primary font-normal border-0"
          : ""
      } ${isBold ? "font-bold" : "font-normal"} `}
      style={variant == "cure" ? { borderRadius: "3.5px" } : {}}
      {...props}
    >
      {isLoading && <span className="loading loading-spinner" />}
      {icon ? icon : null}
      {label ? label : null}
      {props.children ? props.children : null}
    </button>
  );
}
