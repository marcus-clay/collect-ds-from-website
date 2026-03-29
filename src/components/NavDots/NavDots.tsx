import React from "react";

export interface NavDotsProps {
  /** Total number of slides/items */
  count: number;
  /** Currently active index */
  active: number;
  /** Called with new index on click */
  onChange: (index: number) => void;
  className?: string;
}

export function NavDots({ count, active, onChange, className = "" }: NavDotsProps) {
  return (
    <div
      role="tablist"
      aria-label="Slide navigation"
      className={["flex items-center gap-2", className].join(" ")}
    >
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === active}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onChange(i)}
          className={[
            "w-2 h-2 rounded-full border-0 p-0 cursor-pointer",
            "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
            i === active
              ? "bg-black opacity-40 scale-125"
              : "bg-black/20 hover:bg-black/30",
          ].join(" ")}
        />
      ))}
    </div>
  );
}
