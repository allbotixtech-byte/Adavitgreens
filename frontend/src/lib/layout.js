/**
 * Routes whose hero fills the viewport and therefore sits *behind* the fixed
 * header — the header renders transparent over them until you scroll, and
 * <main> takes no top offset.
 *
 * Both Header and ConditionalLayout read from here. They previously kept
 * separate copies of this list, which drifted: "/services" and
 * "/schedule-pickup" were missing, so those pages got a 116px top offset that
 * pushed their full-height heroes down and left the header opaque over them.
 */
const FULL_HERO_ROUTES = new Set([
  "/",
  "/about",
  "/contact",
  "/insights",
  "/careers",
  "/services",
  "/schedule-pickup",
]);

export function hasFullHero(pathname) {
  if (!pathname) return false;
  if (FULL_HERO_ROUTES.has(pathname)) return true;
  // Individual service detail pages all use the full-height hero template.
  return pathname.startsWith("/services/");
}
