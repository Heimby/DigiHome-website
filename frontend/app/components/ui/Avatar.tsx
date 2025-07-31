import { useEffect, useMemo, useState } from "react";
import { getApiProfilePictureUrl } from "~/api-gen";

interface AvatarProps {
  /** Profile picture URL */
  src?: string | null;
  /** Fallback name for generating initials */
  name?: string | null;
  /** Email as backup for generating initials */
  email?: string | null;
  /** Avatar size variant */
  size?: "sm" | "md" | "lg" | "xl";
  /** Additional CSS classes */
  className?: string;
  /** Role-based styling */
  role?: "agent" | "owner" | "admin" | "user";
  /** Click handler */
  onClick?: () => void;
}

/**
 * Avatar component that displays profile pictures with intelligent fallbacks
 * Falls back to initials generated from name or email if no profile picture
 */
export default function Avatar({
  src,
  name,
  email,
  size = "md",
  className = "",
  role = "user",
  onClick,
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  // Generate initials from name or email
  const getInitials = () => {
    if (name) {
      const parts = name.split(" ");
      if (parts.length >= 2) {
        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
      }
      return parts[0][0]?.toUpperCase() || "";
    }

    if (email) {
      return email[0]?.toUpperCase() || "?";
    }

    return "?";
  };

  // Size mappings
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
    xl: "w-16 h-16 text-xl",
  };

  // Role-based gradient backgrounds
  const roleGradients = {
    agent: "bg-gradient-to-br from-blue-500 to-blue-600",
    owner: "bg-gradient-to-br from-green-500 to-green-600",
    admin: "bg-gradient-to-br from-purple-500 to-purple-600",
    user: "bg-gradient-to-br from-gray-500 to-gray-600",
  };

  const shouldShowImage = src && !imageError;
  const initials = getInitials();

  const baseClasses = `
    rounded-full flex items-center justify-center font-medium text-white
    overflow-hidden flex-shrink-0 transition-all duration-200
    ${onClick ? "cursor-pointer hover:scale-105" : ""}
    ${sizeClasses[size]}
    ${shouldShowImage ? "" : roleGradients[role]}
    ${className}
  `.trim();

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(
    null
  );
  useMemo(async () => {
    if (src) {
      const res = await getApiProfilePictureUrl({
        query: {
          profilePictureUrl: src,
        },
      });
      setProfilePictureUrl(res.data ?? null);
    } else {
      setProfilePictureUrl(null);
    }
  }, [src]);

  return (
    <div className={baseClasses} onClick={onClick}>
      {shouldShowImage ? (
        <img
          src={profilePictureUrl || ""}
          alt={name || email || "Avatar"}
          className="w-full h-full object-cover"
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      ) : (
        <span className="select-none">{initials}</span>
      )}
    </div>
  );
}

/**
 * Utility function to get avatar props from user/agent/owner objects
 */
export function getAvatarProps(
  user: {
    profilePictureUrl?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    email?: string | null;
  },
  role?: "agent" | "owner" | "admin" | "user"
) {
  const name =
    user.fullName ||
    (user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : null) ||
    user.firstName ||
    user.lastName;

  return {
    src: user.profilePictureUrl,
    name,
    email: user.email,
    role: role || "user",
  };
}
