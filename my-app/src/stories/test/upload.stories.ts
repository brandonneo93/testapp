// my-app/src/stories/test/upload.stories.ts
import Upload from './upload.svelte';

export default {
  title: 'Components/Upload',
  component: Upload,
};

const Template = (args) => ({
  Component: Upload,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  // Add any default props if needed
};
