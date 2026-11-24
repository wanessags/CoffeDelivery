import { Moon, Sun } from "@phosphor-icons/react";

import { useTheme } from "../../hooks/useTheme";
import { ToggleButton } from "./styles";

export function ThemeToggle() {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === "dark";

  return (
    <ToggleButton
      type="button"
      onClick={toggleMode}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      aria-pressed={isDark}
      title={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      {isDark ? (
        <Sun size={22} weight="fill" aria-hidden="true" />
      ) : (
        <Moon size={22} weight="fill" aria-hidden="true" />
      )}
    </ToggleButton>
  );
}
