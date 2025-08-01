import type { ReactNode } from "react";

export type CarouselItem = {
  image: string | ReactNode;
  altText?: string;
};

/**
 * Not a full-featured carousel, but a simple component to display images in a row.
 * It can be used for displaying logos, images, or any other content.
 */
export default function Carousel({
  items,
  maxWidth = "400",
}: {
  items: CarouselItem[];
  size?: string;
  maxWidth?: string;
}) {
  return (
    <div
      className={`flex flex-row flex-wrap justify-center items-center gap-8 relative overflow-hidden`}
    >
      {items.map((item, index) => (
        <div className={`max-w-${maxWidth}`} key={index}>
          {typeof item.image === "string" ? (
            <img
              src={item.image}
              alt={item.altText}
              className={`object-contain`}
              style={{ maxWidth: `${maxWidth}px` }}
            />
          ) : (
            <>{item.image}</>
          )}
        </div>
      ))}
    </div>
  );
}
