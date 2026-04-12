import React from "react";
import styles from "./ErrorState.module.scss";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load this content. Please check your connection or API key and try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className={styles.errorState} role="alert">
      <div className={styles.icon} aria-hidden="true">⚠️</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <button className={styles.retryBtn} onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
