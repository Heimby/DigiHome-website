import React, { useEffect } from "react";
import DButton from "./DButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

/**
 * Props for the Card component
 */
export interface CardProps {
  isExpandable?: boolean;
  /**
   * If provided, controls whether the card is expanded (open)
   */
  isExpanded?: boolean;
  /**
   * If true, card can be expanded to a large modal
   * Useful for displaying more detailed content or forms
   */
  isFullScreenAble?: boolean;
  /**
   * If true, the card starts expanded
   */
  isOpenByDefault?: boolean;
  /**
   * Title to display in the card header
   */
  title?: React.ReactNode;
  /**
   * Card body content (children)
   */
  children: React.ReactNode;
  /**
   * Optional: Additional className for the card container
   */
  className?: string;
  padding?: number;
  /**
   * Optional: Content to display in the header right (e.g. actions)
   */
  headerRight?: React.ReactNode;
  hoverShadow?: boolean;
  onClick?: () => void;
}

/**
 * Generic Card component for consistent layout
 * @example
 * <Card title="My Title">Body here</Card>
 */
export function Card({
  isExpandable,
  isFullScreenAble = false,
  isOpenByDefault = false,
  isExpanded,
  title,
  children,
  className = "",
  padding = 6,
  headerRight,
  hoverShadow = true,
  onClick,
}: CardProps) {
  // Internal state for uncontrolled mode
  const [isExpandedInternal, setIsExpandedInternal] = React.useState(
    isExpandable ? isOpenByDefault : true
  );

  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const toggleExpanded = () => setIsExpandedInternal(!isExpandedInternal);

  useEffect(() => {
    if (isExpanded !== undefined && isExpanded !== isExpandedInternal) {
      setIsExpandedInternal(isExpanded);
    }
  }, [isExpanded]);

  return (
    <section
      className={`bg-white rounded-xl shadow-sm border border-gray-200 p-${padding} ${className} flex flex-col ${
        isFullScreen ? "fixed inset-4 z-50 overflow-y-auto" : ""
      } overflow-x-auto ${
        hoverShadow ? "hover:shadow-xl transition-shadow" : ""
      }`}
      onClick={onClick}
    >
      {(title || headerRight || isFullScreenAble) && (
        <div className="flex items-center justify-between">
          {title && (
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          )}
          <span className="flex items-center flex-wrap gap-2">
            {headerRight}
            {isExpandable && (
              <DButton variant="neutral" sizes="sm" onClick={toggleExpanded}>
                {isExpandedInternal ? (
                  <FontAwesomeIcon icon={faMinus} />
                ) : (
                  <FontAwesomeIcon icon={faPlus} />
                )}
              </DButton>
            )}
            {isFullScreenAble && (
              <DButton
                variant="neutral"
                sizes="sm"
                onClick={() => setIsFullScreen(!isFullScreen)}
              >
                <FontAwesomeIcon icon={faExpand} />
              </DButton>
            )}
          </span>
        </div>
      )}
      {(isExpandedInternal || isFullScreen) && (
        <div className="grow">{children}</div>
      )}
    </section>
  );
}

export default Card;
