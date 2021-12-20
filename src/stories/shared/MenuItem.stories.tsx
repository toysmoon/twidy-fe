import { Meta, Story } from '@storybook/react';
import MenuItem, {
  IMenuItem,
} from 'features/cards/components/MoreMenu/MenuItem';

export default {
  component: MenuItem,
  title: 'shared/MenuItem',
} as Meta;

const Template: Story<IMenuItem> = (args) => <MenuItem {...args} />;

export const defaults = Template.bind({});
defaults.args = {
  label: '메뉴 아이템',
  onClick: () => {},
};
