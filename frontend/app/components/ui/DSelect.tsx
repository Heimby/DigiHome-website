import React from "react";
import type { DComponentBaseProps } from "./DComponentStandardProps";

interface DSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    DComponentBaseProps {
  label?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  icon?: React.ReactNode;
  labelIcon?: React.ReactNode;
  /**
   * Will fill full width of the parent container.
   */
  isWide?: boolean;
  textSize?: DComponentBaseProps["sizes"];
  options: Array<{ value: string | number; label: string }>;
}

export default function DSelect({
  label,
  placeholder,
  required = false,
  variant = "neutral",
  sizes = "md",
  icon,
  labelIcon,
  isWide = false,
  textSize,
  options,
  ...props
}: DSelectProps) {
  const classNames = [
    "select",
    `select-${variant}`,
    sizes ? `select-${sizes}` : "",
    isWide ? "w-full" : "",
    textSize ? `text-${textSize}` : "",
  ];

  return (
    <fieldset className={`fieldset ${isWide ? "w-full" : ""}`}>
      <legend className="fieldset-legend">
        {labelIcon ? labelIcon : null}
        {label}
        {required ? " *" : ""}
      </legend>
      <label className={classNames.join(" ")}>
        {icon ? icon : ""}
        <select className={classNames.join(" ")} {...props}>
          {placeholder && (
            <option disabled selected value="">
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </fieldset>
  );
}
