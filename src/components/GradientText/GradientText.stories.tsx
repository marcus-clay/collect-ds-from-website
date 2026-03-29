import type { Meta, StoryObj } from "@storybook/react";
import { GradientText } from "./GradientText";

const meta = {
  title: "Components/GradientText",
  component: GradientText,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: { control: "select", options: ["heading", "heading-muted"] },
    as:      { control: "select", options: ["h1", "h2", "h3", "h4", "p", "span"] },
    font:    { control: "select", options: ["switzer", "gambarino", "tanker"] },
  },
} satisfies Meta<typeof GradientText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1Switzer: Story = {
  args: {
    children: "Elevate your thinking",
    as: "h1",
    font: "switzer",
    variant: "heading",
    className: "text-5xl font-bold",
  },
};

export const H1Gambarino: Story = {
  args: {
    children: "Elevate your thinking",
    as: "h1",
    font: "gambarino",
    variant: "heading",
    className: "text-5xl",
  },
};

export const H1Tanker: Story = {
  args: {
    children: "Elevate your thinking",
    as: "h1",
    font: "tanker",
    variant: "heading",
    className: "text-5xl",
  },
};

export const Muted: Story = {
  args: {
    children: "The browser built for people who think",
    as: "h2",
    font: "switzer",
    variant: "heading-muted",
    className: "text-2xl font-medium",
  },
};

export const AllFonts: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-center">
      <GradientText as="h1" font="tanker"    className="text-5xl">Surf — Tanker</GradientText>
      <GradientText as="h1" font="gambarino" className="text-5xl">Surf — Gambarino</GradientText>
      <GradientText as="h1" font="switzer"   className="text-5xl font-bold">Surf — Switzer Bold</GradientText>
      <GradientText as="p"  font="switzer"   variant="heading-muted" className="text-xl">
        Muted subheading — Switzer regular
      </GradientText>
    </div>
  ),
};
