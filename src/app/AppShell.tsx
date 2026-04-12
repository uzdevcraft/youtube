"use client";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Hello</h1>

      <main>{children}</main>
    </div>
  );
}
