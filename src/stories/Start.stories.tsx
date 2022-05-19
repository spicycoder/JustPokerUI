import { ComponentStory, ComponentMeta } from '@storybook/react';
import Start from '../components/Start';

export default {
  title: 'Components/Start',
  component: Start,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Start>;

const Template: ComponentStory<typeof Start> = (args) => <Start />;

export const Default = Template.bind({});