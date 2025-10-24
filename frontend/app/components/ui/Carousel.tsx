import type { ReactNode } from "react";
import { Link } from "react-router";

export type CarouselItem = {
  image: string | ReactNode;
  altText?: string;
  link?: string;
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
      className={`flex flex-row flex-wrap justify-center items-center gap-8 relative`}
    >
      {items.map((item, index) =>
        item.link ? (
          <Link to={item.link} className={`max-w-${maxWidth}`} key={index}>
            <ImageItem item={item} maxWidth={maxWidth} />
          </Link>
        ) : (
          <div className={`max-w-${maxWidth}`} key={index}>
            <ImageItem item={item} maxWidth={maxWidth} />
          </div>
        )
      )}
    </div>
  );
}

function ImageItem({
  item,
  maxWidth,
}: {
  item: CarouselItem;
  maxWidth: string;
}) {
  return (
    <>
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
    </>
  );
}
