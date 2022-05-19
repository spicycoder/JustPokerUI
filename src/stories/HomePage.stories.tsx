import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomePage from '../components/HomePage';

export default {
  title: 'Pages/Home',
  component: HomePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage />;

export const Default = Template.bind({});