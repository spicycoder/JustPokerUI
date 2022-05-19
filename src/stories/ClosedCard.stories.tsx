import { ComponentStory, ComponentMeta } from '@storybook/react';
import ClosedCard from '../components/ClosedCard';

export default {
  title: 'Cards/ClosedCard',
  component: ClosedCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ClosedCard>;

const Template: ComponentStory<typeof ClosedCard> = (args) => <ClosedCard {...args} />;

export const Closed = Template.bind({});
Closed.args = {
    name: 'John'
};