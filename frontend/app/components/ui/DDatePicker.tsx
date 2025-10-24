import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTimes } from "@fortawesome/free-solid-svg-icons";
import DCalendar from "./DCalendar";
import type {
  DaisyUIVariant,
  DComponentBaseProps,
} from "./DComponentStandardProps";

interface DDatePickerProps extends Omit<DComponentBaseProps, "variant"> {
  variant?: DaisyUIVariant;
  label?: string;
  placeholder?: string;
  /**
   * Date value in datetime-local format (YYYY-MM-DDTHH:mm)
   */
  value?: string;
  /**
   * Callback when date/time changes
   */
  onChange?: (value: string) => void;
  /**
   * Include time picker (defaults to true)
   */
  includeTime?: boolean;
  /**
   * Minimum date (ISO date string)
   */
  min?: string;
  /**
   * Maximum date (ISO date string)
   */
  max?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  isWide?: boolean;
}

/**
 * Date picker component with calendar popup
 * Supports both date-only and datetime-local formats
 */
export default function DDatePicker({
  label,
  placeholder,
  value = "",
  onChange,
  includeTime = true,
  min,
  max,
  required = false,
  disabled = false,
  error,
  variant = "neutral",
  sizes = "md",
  isWide = false,
}: DDatePickerProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync internal value with prop value
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    }

    if (isCalendarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isCalendarOpen]);

  /**
   * Convert datetime-local string to date string (YYYY-MM-DD)
   */
  function getDatePart(datetimeString: string): string {
    if (!datetimeString) return "";
    return datetimeString.split("T")[0];
  }

  /**
   * Convert datetime-local string to time string (HH:mm)
   */
  function getTimePart(datetimeString: string): string {
    if (!datetimeString) return "12:00";
    const timePart = datetimeString.split("T")[1];
    return timePart || "12:00";
  }

  /**
   * Handle calendar date selection
   */
  function handleDateSelect(dateString: string) {
    if (includeTime) {
      const timePart = getTimePart(internalValue);
      const newValue = `${dateString}T${timePart}`;
      setInternalValue(newValue);
      onChange?.(newValue);
    } else {
      setInternalValue(dateString);
      onChange?.(dateString);
      setIsCalendarOpen(false);
    }
  }

  /**
   * Handle time input change
   */
  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const timeValue = e.target.value;
    const datePart =
      getDatePart(internalValue) || new Date().toISOString().split("T")[0];
    const newValue = `${datePart}T${timeValue}`;
    setInternalValue(newValue);
    onChange?.(newValue);
  }

  /**
   * Clear the date value
   */
  function handleClear() {
    setInternalValue("");
    onChange?.("");
  }

  /**
   * Toggle calendar visibility
   */
  function toggleCalendar() {
    if (!disabled) {
      setIsCalendarOpen(!isCalendarOpen);
    }
  }

  const classNames = [
    "input",
    `input-${variant}`,
    sizes ? `input-${sizes}` : "",
    isWide ? "w-full" : "",
    error ? "input-error" : "",
  ];

  const datePart = getDatePart(internalValue);
  const timePart = getTimePart(internalValue);

  /**
   * Format date for display
   */
  function formatDateForDisplay(dateString: string): string {
    if (!dateString) return "";
    try {
      // Parse YYYY-MM-DD format explicitly to avoid timezone issues
      const [year, month, day] = dateString.split("-").map(Number);
      const date = new Date(year, month - 1, day);
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "";
    }
  }

  return (
    <fieldset className={`fieldset ${isWide ? "w-full" : ""}`}>
      {label && (
        <legend className="fieldset-legend text-md">
          {label}
          {required ? " *" : ""}
        </legend>
      )}

      <div className="relative" ref={dropdownRef}>
        <div className="flex gap-2">
          {/* Date input - clicking opens calendar */}
          <div className="relative flex-1">
            <input
              type="text"
              className={classNames.join(" ")}
              value={formatDateForDisplay(datePart)}
              placeholder={placeholder || "Select date"}
              disabled={disabled}
              required={required}
              readOnly
              onClick={toggleCalendar}
              style={{ cursor: disabled ? "not-allowed" : "pointer" }}
            />
            <button
              type="button"
              onClick={toggleCalendar}
              className="btn btn-ghost btn-sm absolute right-1 top-1/2 -translate-y-1/2"
              disabled={disabled}
              tabIndex={-1}
            >
              <FontAwesomeIcon icon={faCalendar} />
            </button>
          </div>

          {/* Time input (if includeTime is true) */}
          {includeTime && (
            <div className="w-32">
              <input
                type="time"
                className={classNames.join(" ")}
                value={timePart}
                onChange={handleTimeChange}
                disabled={disabled}
                required={required && !!datePart}
              />
            </div>
          )}

          {/* Clear button */}
          {internalValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="btn btn-ghost btn-sm"
              title="Clear date"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>

        {/* Calendar dropdown */}
        {isCalendarOpen && (
          <div className="absolute z-50 mt-2 left-0">
            <DCalendar
              value={datePart}
              onChange={handleDateSelect}
              min={min ? getDatePart(min) : undefined}
              max={max ? getDatePart(max) : undefined}
            />
            {includeTime && (
              <div className="bg-base-100 rounded-lg shadow-lg p-4 mt-2">
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen(false)}
                  className="btn btn-primary btn-sm w-full"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <div className="label">
          <span className="label-text-alt text-error">{error}</span>
        </div>
      )}
    </fieldset>
  );
}
