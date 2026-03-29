import type { Preview } from "@storybook/react";
import "../src/tokens.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark",  value: "#1a2a3a" },
        { name: "gray",  value: "#f5f6f8" },
      ],
    },
  },
};

export default preview;
