import type { LucideIcon } from 'lucide-react';
import styles from './CardPresentation.module.css';

export interface CardPresentationProps {
  Icon: LucideIcon;
  head: string;
  text: string;
}

function CardPresentation({ Icon, head, text }: CardPresentationProps) {
  return (
    <div className={styles.container}>
      <Icon color="var(--color-sky-300)" />
      <h3>{head}</h3>
      <p>{text}</p>
    </div>
  );
}

export default CardPresentation;
