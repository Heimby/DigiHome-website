import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface DModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  preventClose?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  children: ReactNode;
  className?: string;
  onBackdropClick?: (event: React.MouseEvent<HTMLDialogElement>) => void;
}

/**
 * DModal - Shared modal component using HTML dialog element
 * Provides consistent modal behavior across the application
 */
export default function DModal({
  isOpen,
  onClose,
  title,
  showCloseButton = true,
  closeOnBackdropClick = true,
  preventClose = false,
  size = "md",
  children,
  className = "",
  onBackdropClick,
}: DModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  function handleClose() {
    if (preventClose) return;
    onClose();
  }

  function handleBackdropClick(event: React.MouseEvent<HTMLDialogElement>) {
    // Call custom backdrop click handler if provided
    if (onBackdropClick) {
      onBackdropClick(event);
      return;
    }

    // Default backdrop click behavior
    if (
      event.target === event.currentTarget &&
      closeOnBackdropClick &&
      !preventClose
    ) {
      handleClose();
    }
  }

  function handleDialogClose() {
    if (!preventClose) {
      onClose();
    }
  }

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
    full: "max-w-full",
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      onClick={handleBackdropClick}
      onClose={handleDialogClose}
    >
      <div
        className={`bg-base-100 rounded-lg shadow-xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-y-auto p-6 text-base-content ${className}`}
      >
        {(title || showCloseButton) && (
          <div className="flex justify-between items-center mb-6">
            {title && <h1 className="text-xl font-semibold">{title}</h1>}
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="btn btn-ghost btn-sm btn-circle"
                disabled={preventClose}
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </dialog>
  );
}