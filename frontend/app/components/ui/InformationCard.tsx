import type React from "react";

export default function InformationCard(
  props: React.PropsWithChildren<{
    color?: "base-100" | "neutral" | "primary" | "secondary" | "accent";
  }>
) {
  const getBackgroundClass = () => {
    switch (props.color) {
      case "neutral":
        return "bg-neutral";
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      case "accent":
        return "bg-accent";
      default:
        return "bg-base-100";
    }
  };

  return (
    <div
      className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${getBackgroundClass()} rounded-lg shadow-lg p-8`}
    >
      {props.children}
    </div>
  );
}
