export interface DComponentBaseProps {
  variant?: DaisyUIVariant;
  sizes?: "xs" | "sm" | "md" | "lg" | "xl";
}

export type DaisyUIVariant =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";
