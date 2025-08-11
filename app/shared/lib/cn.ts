export function cn(...xs: unknown[]) {
  return xs
    .filter((v): v is string => typeof v === "string" && v.length > 0)
    .join(" ");
}