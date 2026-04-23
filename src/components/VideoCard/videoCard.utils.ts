/**
 * Formats a raw view count into a YouTube-style abbreviated string.
 * e.g. 1_234_567 → "1.2M views"
 */
export function formatViewCount(count: number): string {
  if (count >= 1_000_000_000) {
    return `${(count / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B views`;
  }
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, "")}M views`;
  }
  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1).replace(/\.0$/, "")}K views`;
  }
  return `${count} views`;
}

/**
 * Returns a relative time string from an ISO date string or Date.
 * e.g. "3 days ago", "2 months ago", "1 year ago"
 */
export function formatRelativeDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);

  if (diffYear >= 1) return `${diffYear} year${diffYear > 1 ? "s" : ""} ago`;
  if (diffMonth >= 1) return `${diffMonth} month${diffMonth > 1 ? "s" : ""} ago`;
  if (diffWeek >= 1) return `${diffWeek} week${diffWeek > 1 ? "s" : ""} ago`;
  if (diffDay >= 1) return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`;
  if (diffHr >= 1) return `${diffHr} hour${diffHr > 1 ? "s" : ""} ago`;
  if (diffMin >= 1) return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
  return "Just now";
}
