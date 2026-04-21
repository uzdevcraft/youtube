import store from "store2";

export const STORAGE_KEYS = {
  SIDEBAR_STATE: "yt_sidebar_state",
  SEARCH_HISTORY: "yt_search_history",
  PREFERRED_REGION: "yt_region",
} as const;

export function getSidebarState(): "expanded" | "mini" {
  return store.get(STORAGE_KEYS.SIDEBAR_STATE, "expanded");
}

export function setSidebarState(state: "expanded" | "mini"): void {
  store.set(STORAGE_KEYS.SIDEBAR_STATE, state);
}

export function getSearchHistory(): string[] {
  return store.get(STORAGE_KEYS.SEARCH_HISTORY, []);
}

export function addSearchHistory(query: string): void {
  const history = getSearchHistory();
  const updated = [query, ...history.filter((q) => q !== query)].slice(0, 10);
  store.set(STORAGE_KEYS.SEARCH_HISTORY, updated);
}

export function clearSearchHistory(): void {
  store.remove(STORAGE_KEYS.SEARCH_HISTORY);
}

export function getPreferredRegion(): string {
  return store.get(STORAGE_KEYS.PREFERRED_REGION, "US");
}
