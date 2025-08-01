import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import DigihomeLogoFullYellowBrand from "./DigihomeLogoFullPurpleBrand";
import { useState } from "react";
import DButton from "./ui/DButton";

/**
 * Mobile-friendly navbar component with collapsible sidebar
 * Uses DaisyUI drawer for mobile navigation and regular navbar for desktop
 */
export default function Navbar({ isTransparent = false, textColor = "black" }) {
  const location = useLocation();
  const { t } = useTranslation();

  /**
   * Check if the current route matches the given path
   */
  const isLinkActive = (path: string) => location.pathname.includes(path);

  /**
   * Navigation links data for consistency between mobile and desktop
   * Each link has conditional visibility based on user role
   */
  const allNavigationLinks = [
    {
      to: "/about",
      label: t("navigation.about"),
      isVisible: () => true, // Always visible
    },
  ].filter((link) => link.isVisible());

  /**
   * Renders navigation links for both mobile sidebar and desktop tabs
   */
  const renderNavigationLinks = (isMobile = false) => {
    if (isMobile) {
      return allNavigationLinks.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className={`${isLinkActive(link.to) ? "active" : ""}`}
          >
            <span
              className={`${
                isTransparent ? "color-base-100 " : "color-base-content"
              }`}
            >
              {link.label}
            </span>
          </Link>
        </li>
      ));
    }

    return allNavigationLinks.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        className={`tab ${isLinkActive(link.to) ? "tab-active" : ""} `}
      >
        <span
          className={`text-lg font-bold ${
            isTransparent
              ? "text-base-100 text-shadow-md/80"
              : "text-base-content"
          }`}
        >
          {link.label}
        </span>
      </Link>
    ));
  };

  // State for mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Unified navbar for all screen sizes
  return (
    <nav
      className={`navbar z-50 ${
        isTransparent ? "absolute" : "relative bg-white shadow-sm"
      }`}
      style={{ width: "100%" }}
    >
      <div className="flex items-center w-full">
        {/* Logo and navigation links */}
        <div className="flex items-center gap-4 flex-1">
          <Link to="/">
            <DigihomeLogoFullYellowBrand
              fontColor={isTransparent ? "black" : "black"}
              height={32}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
        {/* Center area (optional) */}
        <div className="navbar-center flex-1"></div>
        {/* Language selector and user dropdown/login */}
        <div className="flex items-center gap-2">
          {/* Navigation links: tabs for desktop, menu for mobile */}
          <div className="hidden lg:flex tabs tabs-boxed">
            {renderNavigationLinks(false)}
          </div>
          <LanguageSelector />
          {allNavigationLinks.length > 0 && (
            <div className="lg:hidden">
              <DButton
                sizes="sm"
                type="button"
                aria-label="Open navigation menu"
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                <FontAwesomeIcon icon={faBars} />
              </DButton>
            </div>
          )}
        </div>
      </div>
      {/* Mobile menu (dropdown) */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md${
          mobileMenuOpen ? "" : " hidden"
        }`}
      >
        <ul className="menu">{renderNavigationLinks(true)}</ul>
      </div>
    </nav>
  );
}
