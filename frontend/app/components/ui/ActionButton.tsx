import type React from "react";

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  arrowColor?: "black" | "primary";
  height?: string;
  additionalClasses?: string;
  isSmall?: boolean;
}

export default function ActionButton({
  onClick,
  disabled = false,
  children,
  arrowColor = "primary",
  height = "55px",
  additionalClasses,
  isSmall = false,
  ...props
}: ActionButtonProps) {
  return (
    <button
      {...props}
      style={{
        borderRadius: "50px",
        fontSize: "22px",
        fontWeight: "400",
        minHeight: height,
      }}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-ghost ${
        isSmall ? "w-min" : "px-4 bg-white"
      } flex flex-row items-center justify-between text-black font-semibold gap-6 ${additionalClasses}`}
    >
      {children}
      <div
        className={`${
          arrowColor === "black" ? "bg-black" : "bg-primary"
        } rounded-full w-10 h-10 flex items-center justify-center`}
      >
        <svg
          className={`${
            arrowColor == "black" ? "text-white" : "text-black"
          } w-6 h-6`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </div>
    </button>
  );
}
