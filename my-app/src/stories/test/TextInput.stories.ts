import TextInput from './TextInput.svelte';

export default {
  title: 'Components/TextInput',
  component: TextInput,
};

const Template = (args) => ({
  Component: TextInput,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter your name...',
  value: '',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input',
  disabled: true,
  value: 'Cannot edit',
};

export const WithValue = Template.bind({});
WithValue.args = {
  placeholder: 'Prefilled input',
  value: 'John Doe',
};
