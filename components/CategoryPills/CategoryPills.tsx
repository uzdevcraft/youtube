"use client";

import React from "react";
import clsx from "clsx";
import styles from "./CategoryPills.module.scss";

const CATEGORIES = [
  "All", "Music", "Gaming", "News", "Live", "Mixes",
  "Podcasts", "Recently Uploaded", "Watched", "New to you",
  "Comedy", "Tech", "Science", "Sports", "Cooking", "Travel",
];

interface CategoryPillsProps {
  selected: string;
  onChange: (category: string) => void;
}

export function CategoryPills({ selected, onChange }: CategoryPillsProps) {
  return (
    <div className={styles.wrap} role="list" aria-label="Video categories">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          role="listitem"
          className={clsx(styles.pill, { [styles.active]: selected === cat })}
          onClick={() => onChange(cat)}
          aria-pressed={selected === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
