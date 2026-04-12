"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          background: "#0f0f0f",
          color: "#f1f1f1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          gap: "16px",
          fontFamily: "Roboto, Arial, sans-serif",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "48px" }}>⚠️</div>
        <h1 style={{ fontSize: "20px", fontWeight: 600 }}>Something went wrong</h1>
        <p style={{ fontSize: "14px", color: "#aaa", maxWidth: "400px" }}>
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          style={{
            padding: "10px 24px",
            borderRadius: "20px",
            background: "#272727",
            border: "1px solid #3f3f3f",
            color: "#f1f1f1",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
