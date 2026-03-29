import React from "react";

export type ButtonVariant = "primary" | "ghost";
export type ButtonSize    = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
          React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style */
  variant?: ButtonVariant;
  /** Size */
  size?: ButtonSize;
  /** Render as <a> tag (for download links) */
  href?: string;
  /** Icon on the left */
  leftIcon?: React.ReactNode;
  /** Icon on the right */
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-md gap-2.5",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-cta text-white border-0 " +
    "hover:brightness-110 hover:-translate-y-px " +
    "active:brightness-95 active:translate-y-0.5",
  ghost:
    "bg-transparent text-brand-dark border border-border " +
    "hover:border-border-hover hover:bg-brand-dark/5 " +
    "active:translate-y-0.5",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  leftIcon,
  rightIcon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-switzer font-medium " +
    "rounded-full transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] " +
    "cursor-pointer select-none outline-none focus-visible:ring-2 " +
    "focus-visible:ring-accent-bright focus-visible:ring-offset-2";

  const classes = [base, sizeClasses[size], variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
