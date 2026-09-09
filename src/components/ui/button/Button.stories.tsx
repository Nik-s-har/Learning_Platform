// Button.stories.tsx
// import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Volume2 } from 'lucide-react';
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
      options: ['primary', 'secondary', 'cardButton', 'round'],
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
        'indigoWhite',
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

export const RoundBW: Story = {
  args: {
    variant: 'round',
    colorScheme: 'blueWhite',
    // У варианта round нет собственного размера — его задаёт потребитель
    // через className (см. .soundBtn в Flashcards / ChoiceCard).
    style: { width: 64 },
    'aria-label': 'Прослушать',
    children: <Volume2 />,
  },
};
