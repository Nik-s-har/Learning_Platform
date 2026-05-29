// Button.stories.tsx
// import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';
import type { ButtonProps } from './Button';
import '../../../styles/global.css';
import '../../../styles/fonts.css';
import '../../../styles/color.css';

// 🔹 Используем тип Meta с фреймворка
const meta: Meta<ButtonProps> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'cardButton'],
    },
    colorScheme: {
      control: { type: 'radio' },
      options: [
        'blueWhite',
        'whiteBlack',
        'yellowBlack',
        'greyBlue',
        'slateSlate',
        'greenWhite',
      ],
    },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

// 🔹 Истории
export const PrimaryBW: Story = {
  args: {
    variant: 'primary',
    colorScheme: 'blueWhite',
    children: 'Начать учится бесплатно',
  },
};

export const CardButtonSS: Story = {
  args: {
    variant: 'cardButton',
    colorScheme: 'slateSlate',
    children: 'Заблокировано',
  },
};

export const SecondaryBW: Story = {
  args: {
    variant: 'secondary',
    colorScheme: 'blueWhite',
    children: 'Кабинет',
  },
};
