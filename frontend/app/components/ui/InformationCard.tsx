import type React from "react";

export default function InformationCard(
  props: React.PropsWithChildren<{
    color?: "base-100" | "neutral" | "primary" | "secondary" | "accent";
    className?: string;
  }>
) {
  return (
    <div
      className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-${
        props.color || "neutral"
      } rounded-lg shadow-lg p-8 ${
        props.className ? props.className : ""
      } flex flex-col`}
    >
      {props.children}
    </div>
  );
}
