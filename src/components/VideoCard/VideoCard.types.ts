export interface VideoCardProps {
  /** URL of the video thumbnail image */
  thumbnailUrl: string;
  /** Video title (max ~100 chars recommended) */
  title: string;
  /** Channel display name */
  channelName: string;
  /** Channel avatar URL */
  channelAvatarUrl: string;
  /** Raw view count number (formatted internally) */
  viewCount: number;
  /** ISO date string or Date object for upload date */
  uploadDate: string | Date;
  /** Duration string in "MM:SS" or "H:MM:SS" format, e.g. "12:45" */
  duration?: string;
  /** Whether the channel is verified */
  isVerified?: boolean;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional additional className */
  className?: string;
}

export interface VideoCardSkeletonProps {
  /** Number of skeleton cards to render */
  count?: number;
  className?: string;
}
