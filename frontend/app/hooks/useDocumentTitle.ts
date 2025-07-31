import { useEffect } from "react";
import { useMatches } from "react-router";

/**
 * Capitalize the first letter of a string
 * @param str The string to capitalize
 * @returns String with first letter capitalized
 */
function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Custom hook to set the document title
 * @param title The title to set for the document
 * @param fallback Optional fallback title if the main title is not available
 */
export function useDocumentTitle(title?: string, fallback?: string) {
  const matches = useMatches();

  // Get the current route ID from the last match
  const currentRouteId = matches[matches.length - 1]?.id;

  useEffect(() => {
    const previousTitle = document.title;
    const finalTitle = capitalizeFirstLetter(
      title ||
        fallback ||
        `Digihome ${currentRouteId.replace("routes", "").replace("/", "")}`
    );
    document.title = finalTitle;

    // Cleanup: restore previous title when component unmounts
    return () => {
      document.title = previousTitle;
    };
  }, [title, fallback, currentRouteId]);

  function setDocumentTitle(newTitle: string) {
    const finalTitle = capitalizeFirstLetter(
      newTitle ||
        fallback ||
        `Digihome ${currentRouteId.replace("routes", "").replace("/", "")}`
    );
    document.title = finalTitle;
  }

  return { setDocumentTitle };
}

export default useDocumentTitle;
