"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

type Listener = () => void;
const listeners = new Map<string, Set<Listener>>();

function notify(key: string) {
  listeners.get(key)?.forEach((callback) => callback());
}

/**
 * SSR-safe localStorage-backed state via useSyncExternalStore: the server
 * and first client render both see `initialValue` (no hydration mismatch),
 * then the real stored value is picked up on mount.
 *
 * Pass a module-level constant for `initialValue` (e.g. a shared empty
 * array) so it stays referentially stable across renders.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const subscribe = useCallback(
    (callback: Listener) => {
      if (!listeners.has(key)) listeners.set(key, new Set());
      const set = listeners.get(key)!;
      set.add(callback);
      return () => set.delete(callback);
    },
    [key]
  );

  const getSnapshot = useCallback(() => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }, [key]);

  const getServerSnapshot = useCallback(() => null, []);

  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const value = useMemo(() => {
    if (raw === null) return initialValue;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return initialValue;
    }
  }, [raw, initialValue]);

  const setValue = useCallback(
    (updater: T | ((prev: T) => T)) => {
      let prev: T;
      try {
        const prevRaw = localStorage.getItem(key);
        prev = prevRaw !== null ? (JSON.parse(prevRaw) as T) : initialValue;
      } catch {
        prev = initialValue;
      }
      const next = typeof updater === "function" ? (updater as (p: T) => T)(prev) : updater;
      try {
        localStorage.setItem(key, JSON.stringify(next));
      } catch {
        // ignore write errors (e.g. private mode)
      }
      notify(key);
    },
    [key, initialValue]
  );

  return [value, setValue] as const;
}
