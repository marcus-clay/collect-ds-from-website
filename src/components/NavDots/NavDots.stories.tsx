import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NavDots } from "./NavDots";

const meta = {
  title: "Components/NavDots",
  component: NavDots,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    count:  { control: { type: "range", min: 2, max: 8, step: 1 } },
    active: { control: { type: "range", min: 0, max: 7, step: 1 } },
  },
} satisfies Meta<typeof NavDots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 3,
    active: 0,
    onChange: () => {},
  },
};

export const Interactive: Story = {
  render: () => {
    const [active, setActive] = useState(0);
    return (
      <div className="flex flex-col items-center gap-6">
        <div className="w-64 h-32 rounded-xl bg-gradient-heading flex items-center justify-center">
          <span className="text-white font-switzer font-semibold">Slide {active + 1}</span>
        </div>
        <NavDots count={4} active={active} onChange={setActive} />
      </div>
    );
  },
};

export const ManyDots: Story = {
  args: {
    count: 6,
    active: 2,
    onChange: () => {},
  },
};
