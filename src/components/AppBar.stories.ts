import type { Meta, StoryObj } from '@storybook/svelte';
import AppBar from './AppBar.svelte';

const meta = {
  title: 'Example/AppBar',
  component: AppBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HasPort: Story = {
  args: {
    port: {
      name: 'COM3',
    },
    //requestPort=null,
    //openPort=null
  },
};

export const AwaitingPort: Story = {};
