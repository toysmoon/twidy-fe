import { Meta, Story } from '@storybook/react';
import ThemeSelect from 'features/settings/components/Theme/ThemeSelect';

export default {
  component: ThemeSelect,
  title: 'settings/ThemeSelect',
} as Meta;

const Template: Story<{}> = () => (
  <ThemeSelect value={'black'} onChange={() => {}} />
);

export const defaults = Template.bind({});
defaults.args = {};
