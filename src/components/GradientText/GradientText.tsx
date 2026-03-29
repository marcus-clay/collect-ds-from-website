import React from "react";

type GradientVariant = "heading" | "heading-muted";
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "p" | "span";
type FontFamily = "switzer" | "gambarino" | "tanker";

export interface GradientTextProps {
  children: React.ReactNode;
  /** Gradient style */
  variant?: GradientVariant;
  /** HTML element to render */
  as?: HeadingLevel;
  /** Font family */
  font?: FontFamily;
  className?: string;
}

const gradientClasses: Record<GradientVariant, string> = {
  "heading":       "bg-gradient-heading",
  "heading-muted": "bg-gradient-heading-muted",
};

const fontClasses: Record<FontFamily, string> = {
  switzer:   "font-switzer",
  gambarino: "font-gambarino",
  tanker:    "font-tanker",
};

export function GradientText({
  children,
  variant = "heading",
  as: Tag = "span",
  font = "switzer",
  className = "",
}: GradientTextProps) {
  return (
    <Tag
      className={[
        gradientClasses[variant],
        fontClasses[font],
        "bg-clip-text text-transparent",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
