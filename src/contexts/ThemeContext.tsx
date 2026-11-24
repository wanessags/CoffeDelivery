import {
  useCallback,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import type { ThemeMode } from "../styles/themes";
import { ThemeContext, type ThemeContextValue } from "./contextValues";

export const THEME_STORAGE_KEY = "coffee-delivery:theme";

function parseStoredMode(raw: string): ThemeMode | null {
  const value: unknown = JSON.parse(raw);
  return value === "light" || value === "dark" ? value : null;
}

function getSystemMode(): ThemeMode {
  if (typeof window.matchMedia !== "function") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useLocalStorage<ThemeMode>(
    THEME_STORAGE_KEY,
    getSystemMode,
    "local",
    parseStoredMode,
  );

  const toggleMode = useCallback(() => {
    setMode((current) => (current === "light" ? "dark" : "light"));
  }, [setMode]);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, toggleMode }),
    [mode, toggleMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
