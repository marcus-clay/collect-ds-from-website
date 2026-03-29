import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "ghost"] },
    size:    { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Download Surf",
    variant: "primary",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    children: "Learn more",
    variant: "ghost",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "Download",
    variant: "primary",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Join the open Beta",
    variant: "primary",
    size: "lg",
  },
};

export const WithDownloadIcon: Story = {
  args: {
    children: "Download Surf",
    variant: "primary",
    size: "md",
    leftIcon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
};

export const AsLink: Story = {
  args: {
    children: "View on GitHub",
    variant: "ghost",
    size: "md",
    href: "#",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" size="sm">Primary SM</Button>
      <Button variant="primary" size="md">Primary MD</Button>
      <Button variant="primary" size="lg">Primary LG</Button>
      <Button variant="ghost"   size="sm">Ghost SM</Button>
      <Button variant="ghost"   size="md">Ghost MD</Button>
      <Button variant="ghost"   size="lg">Ghost LG</Button>
    </div>
  ),
};
