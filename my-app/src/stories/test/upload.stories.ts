import Upload from './upload.svelte';

export default {
  title: 'Test/Upload',
  component: Upload,
};

const Template = (args) => ({
  Component: Upload,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
