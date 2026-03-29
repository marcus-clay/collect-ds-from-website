import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard } from "./FeatureCard";

const NoteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 5h12M4 8h8M4 11h10M4 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BrainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 10c0-1.66 1.34-3 3-3s3 1.34 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 13v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M13 13l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const meta = {
  title: "Components/FeatureCard",
  component: FeatureCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    selected: { control: "boolean" },
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Generate personal notes",
    description: "Surf automatically captures key insights as you browse, building your personal knowledge base.",
    icon: <NoteIcon />,
  },
};

export const Selected: Story = {
  args: {
    title: "Generate personal notes",
    description: "Surf automatically captures key insights as you browse, building your personal knowledge base.",
    icon: <NoteIcon />,
    selected: true,
  },
};

export const NoIcon: Story = {
  args: {
    title: "Explore your interests",
    description: "Discover content tailored to what you actually care about.",
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
      <FeatureCard
        title="Generate personal notes"
        description="Surf automatically captures key insights as you browse."
        icon={<NoteIcon />}
        selected
      />
      <FeatureCard
        title="Understand anything"
        description="Ask questions about any page and get instant, intelligent answers."
        icon={<BrainIcon />}
      />
      <FeatureCard
        title="Explore your interests"
        description="Discover content tailored to what you actually care about."
        icon={<SearchIcon />}
      />
    </div>
  ),
};
