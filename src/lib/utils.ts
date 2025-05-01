import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (url: string) =>
  fetch(url).then(async (r) => await r.json());

 
export const mutator = (url: string, { arg }: { arg?: { comment: string } }) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (r) => await r.json());
