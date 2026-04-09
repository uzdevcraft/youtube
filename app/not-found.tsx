import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: "16px",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "64px" }}>📺</div>
      <h1 style={{ fontSize: "24px", fontWeight: 600, color: "var(--text-primary)" }}>
        This page isn&apos;t available
      </h1>
      <p style={{ fontSize: "14px", color: "var(--text-secondary)", maxWidth: "400px" }}>
        Sorry about that. Try searching for something else, or go back to the homepage.
      </p>
      <Link
        href="/"
        style={{
          padding: "10px 24px",
          borderRadius: "20px",
          backgroundColor: "var(--bg-tertiary)",
          border: "1px solid var(--border-color)",
          color: "var(--text-primary)",
          fontSize: "14px",
          fontWeight: 500,
          textDecoration: "none",
          marginTop: "8px",
          display: "inline-block",
        }}
      >
        Go to homepage
      </Link>
    </div>
  );
}
