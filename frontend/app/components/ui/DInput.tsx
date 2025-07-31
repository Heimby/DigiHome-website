import React from "react";
import type {
  DaisyUIVariant,
  DComponentBaseProps,
} from "./DComponentStandardProps";

interface DInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Omit<DComponentBaseProps, "variant"> {
  variant?: DaisyUIVariant | "cure";
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  required?: boolean;
  icon?: React.ReactNode;
  labelIcon?: React.ReactNode;
  /**
   * Will fill full width of the parent container.
   */
  isWide?: boolean;
  textSize?: DComponentBaseProps["sizes"];
}

export default function DInput({
  label,
  placeholder,
  type = "text",
  required = false,
  variant = "neutral",
  sizes = "md",
  icon,
  labelIcon,
  isWide = false,
  textSize,
  ...props
}: DInputProps) {
  const classNames = [
    "input",
    variant == "cure"
      ? "input-neutral bg-accent border-none text-bold placeholder:font-bold"
      : `input-${variant}`,
    sizes ? `input-${sizes}` : "",
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
      {icon ? (
        <label className={classNames.join(" ")}>
          {icon}
          <input
            type={type}
            placeholder={placeholder}
            className={classNames.join(" ")}
            {...props}
            style={{
              minHeight: variant === "cure" ? "84px" : undefined,
              fontSize: variant === "cure" ? "36px" : undefined,
            }}
          />
        </label>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={classNames.join(" ")}
          {...props}
          style={{
            minHeight: variant === "cure" ? "84px" : undefined,
            fontSize: variant === "cure" ? "36px" : undefined,
          }}
        />
      )}
    </fieldset>
  );
}
