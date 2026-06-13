import type { ComponentType } from 'react';
import clsx from 'clsx';
import { Lock, LockOpen, CircleCheck } from 'lucide-react';
import styles from './LessonCard.module.css';
import Button from '../button';
import type { ButtonProps } from '../button';
import type { LessonStatus } from '@app-types/index';

interface VariantConfig {
  buttonProps: ButtonProps;
  StatusIcon: ComponentType;
}

const variantConfig: Record<LessonStatus, VariantConfig> = {
  lock: {
    buttonProps: {
      variant: 'cardButton',
      colorScheme: 'slateSlate',
      children: 'Заблокировано',
    },
    StatusIcon: Lock,
  },
  unlock: {
    buttonProps: {
      variant: 'cardButton',
      colorScheme: 'blueWhite',
      children: 'Начать урок',
    },
    StatusIcon: LockOpen,
  },
  done: {
    buttonProps: {
      variant: 'cardButton',
      colorScheme: 'greenWhite',
      children: 'Повторить урок',
    },
    StatusIcon: CircleCheck,
  },
};

interface LessonCardProps {
  title: string;
  image: string;
  content: string;
  variant: LessonStatus;
  onStart: () => void;
}

function LessonCard({
  title,
  image,
  content,
  variant,
  onStart,
}: LessonCardProps) {
  const { buttonProps, StatusIcon } = variantConfig[variant];

  return (
    <article className={clsx(styles.container, styles[variant])}>
      <header className={styles.header}>
        <img src={image} />
        <h3>{title}</h3>
        <StatusIcon />
      </header>
      <p>{content}</p>
      <footer className={styles.footer}>
        <Button
          {...buttonProps}
          className={styles.fullWidthButton}
          onClick={onStart}
        />
      </footer>
    </article>
  );
}

export default LessonCard;
