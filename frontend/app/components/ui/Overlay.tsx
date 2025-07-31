import type { ReactNode } from "react";

interface OverlayProps {
  backgroundImage: string;
  backgroundAlt?: string;
  children: ReactNode;
}

export default function Overlay({
  backgroundImage,
  backgroundAlt = "Background",
  children,
}: OverlayProps) {
  return (
    <section style={{ position: "relative" }}>
      <img
        src={backgroundImage}
        alt={backgroundAlt}
        className={`absolute inset-0 w-full h-full object-cover`}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <div className="relative rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{children}</div>
      </div>
    </section>
  );
}
