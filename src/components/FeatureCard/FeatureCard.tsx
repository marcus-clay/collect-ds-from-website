import React, { useState } from "react";

export interface FeatureCardProps {
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Optional icon or illustration */
  icon?: React.ReactNode;
  /** Force selected state (uncontrolled) */
  selected?: boolean;
  /** Called on click with new selected state */
  onSelect?: (selected: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export function FeatureCard({
  title,
  description,
  icon,
  selected: controlledSelected,
  onSelect,
  className = "",
  children,
}: FeatureCardProps) {
  const [internalSelected, setInternalSelected] = useState(false);

  const isSelected =
    controlledSelected !== undefined ? controlledSelected : internalSelected;

  function handleClick() {
    const next = !isSelected;
    setInternalSelected(next);
    onSelect?.(next);
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick()}
      className={[
        // Base
        "relative flex flex-col gap-3 rounded-xl p-6 cursor-pointer",
        "outline outline-[clamp(0.7px,0.27vw,3.6px)]",
        "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "select-none focus-visible:ring-2 focus-visible:ring-accent-bright focus-visible:ring-offset-2",
        // State
        isSelected
          ? "bg-gradient-card-selected text-white outline-transparent shadow-none"
          : "bg-white text-brand-dark outline-border shadow-card hover:outline-border-hover hover:shadow-card-hover hover:-translate-y-px active:translate-y-0.5 active:shadow-card-active",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon && (
        <div
          className={[
            "w-10 h-10 flex items-center justify-center rounded-lg",
            isSelected ? "text-white/80" : "text-accent-bright",
          ].join(" ")}
        >
          {icon}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <h3 className="font-switzer font-semibold text-md leading-snug">
          {title}
        </h3>
        {description && (
          <p
            className={[
              "text-sm leading-relaxed",
              isSelected ? "text-white/75" : "text-brand-dark/60",
            ].join(" ")}
          >
            {description}
          </p>
        )}
      </div>

      {children}
    </div>
  );
}
