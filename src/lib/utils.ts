import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (url: string) =>
  fetch(url).then(async (r) => await r.json());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mutator = (url: string, data?: any) =>
  fetch(url, { method: "POST", body: JSON.stringify(data) }).then(
    async (r) => await r.json()
  );
