/**
 * Small line-icon set, cyan stroke on a dark card, in the spirit of the
 * brand guidelines' "Elements Usage" page (background-removed objects with a
 * teal stroke outline). The guidelines' actual icons are photographed
 * objects run through a halftone filter — real photography, not something to
 * fake credibly without the source images — so these are redrawn as simple
 * line marks instead, using the same category concepts the guide lists
 * (notifications, growth, direction, global reach, search, goals, feedback,
 * launch). Swap for the licensed photo-icon set if the source files show up.
 */
const paths = {
  bell: (
    <path d="M12 4.5c-2.6 0-4.4 2-4.4 4.6v2.8c0 .8-.3 1.6-.9 2.2l-.9.9h12.4l-.9-.9a3.1 3.1 0 0 1-.9-2.2V9.1c0-2.6-1.8-4.6-4.4-4.6ZM10.2 17.5a1.9 1.9 0 0 0 3.6 0" />
  ),
  trendingUp: (
    <path d="M4 16.5 9.5 11l3.5 3.5L20 7M20 7h-4.5M20 7v4.5" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="m14.6 9.4-1.7 4.2a1 1 0 0 1-.5.5l-4.2 1.7 1.7-4.2a1 1 0 0 1 .5-.5Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M4.5 12h15M12 4.5c2 2 3 4.7 3 7.5s-1 5.5-3 7.5c-2-2-3-4.7-3-7.5s1-5.5 3-7.5Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.1" />
      <path d="m19.5 19.5-4.2-4.2" />
    </>
  ),
  chat: (
    <>
      <path d="M4.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4 3.5V15.5h-1a2 2 0 0 1-2-2Z" />
      <path d="M8.7 10h6.6M8.7 12.7h4" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3.5c2.6 1.3 4.2 4 4.2 7.6 0 2.6-1 5.3-2.4 7l-1.8 1.9-1.8-1.9c-1.4-1.7-2.4-4.4-2.4-7 0-3.6 1.6-6.3 4.2-7.6Z" />
      <circle cx="12" cy="10.6" r="1.7" />
      <path d="m8.3 15.5-2.6 1.3.7-3M15.7 15.5l2.6 1.3-.7-3" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

/** The cyan-stroke badge these icons sit in on card layouts. */
export function IconBadge({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan ${className}`}
    >
      <Icon name={name} />
    </span>
  );
}
