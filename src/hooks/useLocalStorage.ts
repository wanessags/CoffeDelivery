import { useEffect, useState } from "react";

export type StorageKind = "local" | "session";

function getStorage(kind: StorageKind): Storage | undefined {
  try {
    return kind === "local" ? window.localStorage : window.sessionStorage;
  } catch {
    return undefined;
  }
}

/**
 * Persiste estado com leitura/escrita protegidas. Se o armazenamento falhar,
 * o estado continua funcionando apenas em memória.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
  kind: StorageKind = "local",
  parse?: (raw: string) => T | null,
) {
  const resolveInitial = (): T =>
    typeof initialValue === "function"
      ? (initialValue as () => T)()
      : initialValue;

  const [value, setValue] = useState<T>(() => {
    const fallback = resolveInitial();
    const storage = getStorage(kind);
    if (!storage) return fallback;

    try {
      const raw = storage.getItem(key);
      if (raw === null) return fallback;
      const parsed = parse ? parse(raw) : (JSON.parse(raw) as T);
      return parsed ?? fallback;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    const storage = getStorage(kind);
    if (!storage) return;

    try {
      storage.setItem(key, JSON.stringify(value));
    } catch {
      // Armazenamento indisponível: mantém o valor em memória.
    }
  }, [key, kind, value]);

  return [value, setValue] as const;
}
