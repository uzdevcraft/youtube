"use client";

import React, { useCallback, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { addSearchHistory } from "@/lib/storage";
import { Youtube } from "@/components/Icon/list/custom";

import cx from "clsx";
import classes from "./Header.module.scss";
import { CategoryPills } from "../CategoryPills";
import { ActionIcon, Group, TextInput } from "@mantine/core";
import { Menu } from "@/components/Icon/list/outline";
import { SidebarVariant } from "@/components/Sidebar/Sidebar";
import { Search as IconSearch, X } from "lucide-react";

export function Header({
  opened,
  toggle,
}: {
  opened: SidebarVariant;
  toggle: () => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = query.trim();
      if (!trimmed) return;
      addSearchHistory(trimmed);
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    },
    [query, router],
  );

  const handleClear = useCallback(() => {
    setQuery("");
    inputRef.current?.focus();
  }, []);

  return (
    <div className={classes.header_content}>
      <div className={classes.topBar}>
        <Group gap="sm" align="center">
          <button
            className={classes.menuBtn}
            onClick={toggle}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>

          <div className={classes.logo}>
            <Youtube />
          </div>
        </Group>

        <Group gap={0} align="center" className={classes.wrapper}>
          <TextInput
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            placeholder="Search"
            classNames={{
              root: classes.inputRoot,
              input: classes.input,
            }}
            rightSection={
              <ActionIcon
                onClick={handleSearch}
                className={cx(classes.iconBtn, classes.searchBtn)}
                variant="subtle"
              >
                <IconSearch size={18} className={classes.searchIcon} />
              </ActionIcon>
            }
          />
        </Group>

        <Group gap="sm" align="center"></Group>
      </div>
      <div
        className={cx(
          classes.bottomBar,
          opened === "collapsed" && classes["bottomBar--collapsed"],
        )}
      >
        <CategoryPills
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
    </div>
  );
}
