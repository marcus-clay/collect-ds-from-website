import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Foundations/Colors",
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

const colors = [
  {
    group: "Brand",
    tokens: [
      { name: "brand-dark",  value: "#1a2a3a", usage: "Headings, gradient text start" },
      { name: "brand-mid",   value: "#3a5a7a", usage: "Gradient text end" },
    ],
  },
  {
    group: "Accent",
    tokens: [
      { name: "accent-bright", value: "#0097fe", usage: "CTA buttons, primary action" },
      { name: "accent-blue",   value: "#0080e5", usage: "CTA gradient end" },
    ],
  },
  {
    group: "Interactive",
    tokens: [
      { name: "interactive",       value: "#0396df", usage: "Card selected start" },
      { name: "interactive-end",   value: "#0282e8", usage: "Card selected end" },
      { name: "interactive-hover", value: "#006ec7", usage: "Hover state" },
    ],
  },
  {
    group: "Border",
    tokens: [
      { name: "border",       value: "#28476110", usage: "Default outline (6% opacity)" },
      { name: "border-hover", value: "#28476140", usage: "Hover outline (25% opacity)" },
    ],
  },
  {
    group: "Accent / Decorative",
    tokens: [
      { name: "stroke-light",   value: "#d1d7fe", usage: "SVG strokes, lavender accent" },
      { name: "overlay-dark",   value: "#0000001a", usage: "10% black overlay" },
      { name: "overlay-light",  value: "#ffffffe6", usage: "90% white overlay" },
    ],
  },
  {
    group: "Base",
    tokens: [
      { name: "white", value: "#ffffff", usage: "Backgrounds" },
      { name: "black", value: "#000000", usage: "Body text" },
    ],
  },
];

function Swatch({ name, value, usage }: { name: string; value: string; usage: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}>
      <div style={{
        width: 48, height: 48, borderRadius: 8, flexShrink: 0,
        background: value,
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.2)",
      }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 600, color: "#1a2a3a" }}>
          {value}
        </div>
        <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>
          <code style={{ background: "#f4f4f4", padding: "1px 5px", borderRadius: 3 }}>
            bg-{name}
          </code>
          <span style={{ marginLeft: 8 }}>{usage}</span>
        </div>
      </div>
    </div>
  );
}

export const All: Story = {
  render: () => (
    <div style={{ fontFamily: "Switzer, sans-serif", maxWidth: 700 }}>
      {colors.map((group) => (
        <div key={group.group} style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", marginBottom: 8 }}>
            {group.group}
          </h3>
          {group.tokens.map((t) => (
            <Swatch key={t.name} {...t} />
          ))}
        </div>
      ))}
    </div>
  ),
};

const gradients = [
  { name: "gradient-heading",        value: "linear-gradient(135deg, #1a2a3a, #3a5a7a)",        usage: "Heading text (background-clip: text)" },
  { name: "gradient-heading-muted",  value: "linear-gradient(135deg, #1a2a3a99, #3a5a7a99)",    usage: "Muted subheadings" },
  { name: "gradient-cta",            value: "linear-gradient(180deg, #0097fe, #0080e5)",        usage: "Primary CTA button" },
  { name: "gradient-card-selected",  value: "linear-gradient(180deg, #0396df, #0282e8)",        usage: "Feature card selected state" },
];

export const Gradients: Story = {
  render: () => (
    <div style={{ fontFamily: "Switzer, sans-serif", display: "flex", flexDirection: "column", gap: 16, maxWidth: 700 }}>
      {gradients.map((g) => (
        <div key={g.name} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 80, height: 48, borderRadius: 8, background: g.value, flexShrink: 0 }} />
          <div>
            <code style={{ fontSize: 12, background: "#f4f4f4", padding: "2px 6px", borderRadius: 3 }}>
              bg-{g.name}
            </code>
            <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>{g.usage}</div>
            <div style={{ fontFamily: "monospace", fontSize: 11, color: "#999", marginTop: 2 }}>{g.value}</div>
          </div>
        </div>
      ))}
    </div>
  ),
};
