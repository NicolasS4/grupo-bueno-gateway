interface GBLogoProps {
  className?: string;
  /** Color for the "GB" + "GRUPO BUENO" wordmark text */
  textColor?: string;
  /** Color of the slanted brand mark */
  markColor?: string;
  /** Color of the "SOLUÇÕES EMPRESARIAIS" tagline */
  taglineColor?: string;
  title?: string;
}

/**
 * Fully responsive SVG recreation of the GB — Grupo Bueno wordmark.
 * Scales perfectly at any size via viewBox.
 */
export function GBLogo({
  className,
  textColor = "var(--ink)",
  markColor = "var(--primary)",
  taglineColor = "var(--primary)",
  title = "GB Grupo Bueno",
}: GBLogoProps) {
  return (
    <svg
      viewBox="0 0 664 120"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {/* slanted parallelogram mark */}
      <polygon points="42,26 104,26 82,94 20,94" fill={markColor} />

      {/* GB monogram */}
      <text
        x="112"
        y="86"
        fontFamily="'Sora', sans-serif"
        fontWeight="800"
        fontSize="74"
        letterSpacing="-2"
        fill={textColor}
      >
        GB
      </text>

      {/* GRUPO BUENO */}
      <text
        x="262"
        y="62"
        fontFamily="'Sora', sans-serif"
        fontWeight="500"
        fontSize="38"
        letterSpacing="7"
        fill={textColor}
      >
        GRUPO BUENO
      </text>

      {/* tagline */}
      <text
        x="264"
        y="92"
        fontFamily="'Inter', sans-serif"
        fontWeight="500"
        fontSize="16.5"
        letterSpacing="6.5"
        fill={taglineColor}
      >
        SOLUÇÕES EMPRESARIAIS
      </text>
    </svg>
  );
}

/** Compact monogram (mark + GB) for tight spaces / favicons. */
export function GBMark({
  className,
  textColor = "var(--ink)",
  markColor = "var(--primary)",
}: Pick<GBLogoProps, "className" | "textColor" | "markColor">) {
  return (
    <svg
      viewBox="0 0 250 120"
      className={className}
      role="img"
      aria-label="GB Grupo Bueno"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="42,26 104,26 82,94 20,94" fill={markColor} />
      <text
        x="112"
        y="86"
        fontFamily="'Sora', sans-serif"
        fontWeight="800"
        fontSize="74"
        letterSpacing="-2"
        fill={textColor}
      >
        GB
      </text>
    </svg>
  );
}
