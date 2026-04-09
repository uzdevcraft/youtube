"use client";

import clsx from "clsx";
import type { NavSection } from "./sidebar.data";
import { SidebarItem } from "./SidebarItem";
import classes from "./SidebarSection.module.scss";

interface SidebarSectionProps {
  section: NavSection;
  collapsed: boolean;
  onItemClick?: () => void;
}

export function SidebarSection({
  section,
  collapsed,
  onItemClick,
}: SidebarSectionProps) {
  return (
    <>
      <div className={classes.section}>
        {section.title && (
          <p
            className={clsx(classes.section__title, {
              [classes["section__title--hidden"]]: collapsed,
            })}
            aria-hidden={collapsed}
          >
            {section.title}
          </p>
        )}

        <div className={classes.section__items}>
          {section.items.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              collapsed={collapsed}
              onClick={onItemClick}
            />
          ))}
        </div>
      </div>

      {section.dividerAfter && (
        <div className={classes.section__divider} role="separator" />
      )}
    </>
  );
}
