import From from './From.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/From',
  component: From,
};

export default meta;

type Story = StoryObj<typeof From>;

// Default Modal Form Story
export const DefaultModalForm: Story = {
  render: () => {
    let isOpen = true;

    const closeModal = () => {
      isOpen = false;
    };

    return {
      Component: From,
      props: { isOpen, onClose: closeModal },
    };
  },
};
