import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta = {
  title: "Foundations/Shadows",
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const All: Story = {
  render: () => (
    <div style={{ fontFamily: "Switzer, sans-serif", display: "flex", flexDirection: "column", gap: 32 }}>

      <div>
        <h3 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", marginBottom: 16 }}>
          Card Shadows (inset bottom)
        </h3>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[
            { label: "shadow-card",        css: "0 -4px 0 0 #28476110 inset", state: "Default" },
            { label: "shadow-card-hover",  css: "0 -4px 0 0 #28476140 inset", state: "Hover" },
            { label: "shadow-card-active", css: "0 -4px 0 0 #0282e8 inset",   state: "Active" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
              <div style={{
                width: 160, height: 100,
                background: "#fff",
                borderRadius: 16,
                outline: "clamp(0.7px, 0.27vw, 3.6px) solid #28476110",
                boxShadow: s.css,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 13, color: "#1a2a3a", fontWeight: 500 }}>{s.state}</span>
              </div>
              <code style={{ fontSize: 11, color: "#666", background: "#f4f4f4", padding: "2px 6px", borderRadius: 3 }}>
                {s.label}
              </code>
              <span style={{ fontSize: 10, color: "#bbb", fontFamily: "monospace", maxWidth: 160, wordBreak: "break-all" }}>
                {s.css}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#999", marginBottom: 16 }}>
          Transitions
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { label: "transition-fast",    value: "0.15s cubic-bezier(0.4, 0, 0.2, 1)", usage: "Micro-interactions (dot, icon)" },
            { label: "transition-default", value: "0.2s  cubic-bezier(0.4, 0, 0.2, 1)", usage: "Standard — buttons, cards" },
            { label: "transition-slow",    value: "0.3s  cubic-bezier(0.4, 0, 0.2, 1)", usage: "Deliberate — panels, overlays" },
          ].map((t) => (
            <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 16, padding: "10px 0", borderBottom: "1px solid #f5f5f5" }}>
              <code style={{ width: 180, fontSize: 12, color: "#1a2a3a", background: "#f4f4f4", padding: "2px 6px", borderRadius: 3, flexShrink: 0 }}>
                {t.label}
              </code>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: "#888", width: 240, flexShrink: 0 }}>{t.value}</span>
              <span style={{ fontSize: 12, color: "#bbb" }}>{t.usage}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  ),
};
