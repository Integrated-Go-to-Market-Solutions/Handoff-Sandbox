/**
 * Dissolves the boundary between two sections by bleeding the neighbouring
 * section's colour into this one's edge. Without these, flat colour blocks
 * butt against each other and the page reads as stacked cards rather than a
 * continuous surface.
 *
 * `color` should be the colour of the section on the other side of the seam.
 */
export function EdgeFade({
  side,
  color,
  height = "8rem",
}: {
  side: "top" | "bottom";
  color: string;
  height?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${
        side === "top" ? "top-0" : "bottom-0"
      }`}
      style={{
        height,
        background: `linear-gradient(to ${
          side === "top" ? "bottom" : "top"
        }, ${color} 0%, transparent 100%)`,
      }}
    />
  );
}
