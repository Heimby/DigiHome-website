import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface DCalendarProps {
  /**
   * Selected date value (ISO date string: YYYY-MM-DD)
   */
  value?: string;
  /**
   * Callback when a date is selected
   */
  onChange?: (value: string) => void;
  /**
   * Minimum selectable date (ISO date string: YYYY-MM-DD)
   */
  min?: string;
  /**
   * Maximum selectable date (ISO date string: YYYY-MM-DD)
   */
  max?: string;
  /**
   * Custom class name
   */
  className?: string;
}

/**
 * Calendar component for date selection
 * Simple, accessible calendar interface built with React
 */
export default function DCalendar({
  value,
  onChange,
  min,
  max,
  className = "",
}: DCalendarProps) {
  const today = new Date();

  // Parse ISO date string (YYYY-MM-DD) without timezone conversion
  function parseISODate(isoString: string): Date | null {
    if (!isoString) return null;
    const [year, month, day] = isoString.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  const selectedDate = value ? parseISODate(value) : null;

  const [currentMonth, setCurrentMonth] = useState(
    selectedDate ? selectedDate.getMonth() : today.getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    selectedDate ? selectedDate.getFullYear() : today.getFullYear()
  );

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  function handlePrevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  function handleNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  /**
   * Format date to ISO string (YYYY-MM-DD) without timezone conversion
   */
  function formatToISODate(year: number, month: number, day: number): string {
    const yyyy = year.toString();
    const mm = (month + 1).toString().padStart(2, "0");
    const dd = day.toString().padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  function handleDateClick(day: number) {
    const isoString = formatToISODate(currentYear, currentMonth, day);

    // Check if date is within min/max range
    if (min && isoString < min) return;
    if (max && isoString > max) return;

    onChange?.(isoString);
  }

  function isDateDisabled(day: number): boolean {
    const isoString = formatToISODate(currentYear, currentMonth, day);

    if (min && isoString < min) return true;
    if (max && isoString > max) return true;

    return false;
  }

  function isDateSelected(day: number): boolean {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  }

  function isToday(day: number): boolean {
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  }

  // Generate calendar days
  const calendarDays = [];

  // Empty cells for days before the first day of month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="p-2" />);
  }

  // Actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const disabled = isDateDisabled(day);
    const selected = isDateSelected(day);
    const todayClass = isToday(day);

    calendarDays.push(
      <button
        key={day}
        type="button"
        onClick={() => !disabled && handleDateClick(day)}
        disabled={disabled}
        className={`
          p-2 rounded-lg text-center transition-colors
          ${disabled ? "opacity-30 cursor-not-allowed" : "hover:bg-base-300 cursor-pointer"}
          ${selected ? "bg-primary text-primary-content font-bold" : ""}
          ${todayClass && !selected ? "border border-primary" : ""}
        `}
      >
        {day}
      </button>
    );
  }

  return (
    <div className={`bg-base-100 rounded-lg shadow-lg p-4 ${className}`}>
      {/* Header with month/year navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="btn btn-ghost btn-sm"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="font-semibold text-lg">
          {monthNames[currentMonth]} {currentYear}
        </div>

        <button
          type="button"
          onClick={handleNextMonth}
          className="btn btn-ghost btn-sm"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="text-center text-sm font-semibold opacity-60 p-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays}
      </div>
    </div>
  );
}
