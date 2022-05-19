import { ComponentStory, ComponentMeta } from '@storybook/react';
import OpenCard from '../components/OpenCard';

export default {
  title: 'Cards/OpenCard',
  component: OpenCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OpenCard>;

const Template: ComponentStory<typeof OpenCard> = (args) => <OpenCard {...args} />;

export const TShirt = Template.bind({});
TShirt.args = {
    name: 'John',
    value: 'XL'
};

export const Storypoint = Template.bind({});
Storypoint.args = {
    name: 'John',
    value: '5'
};

export const Fruit = Template.bind({});
Fruit.args = {
    name: 'John',
    value: '🍓'
};