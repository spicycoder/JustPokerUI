import { ComponentStory, ComponentMeta } from '@storybook/react';
import EstimatePage from '../components/EstimatePage';

export default {
  title: 'Pages/Estimate',
  component: EstimatePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EstimatePage>;

const Template: ComponentStory<typeof EstimatePage> = (args) => <EstimatePage />;

export const Default = Template.bind({});