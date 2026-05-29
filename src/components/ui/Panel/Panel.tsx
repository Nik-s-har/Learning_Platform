import React from 'react';
import clsx from 'clsx';
import styles from './Panel.module.css';

export interface PanelProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

function Panel({
  children,
  className,
  as: Tag = 'div',
  padding = 'md',
}: PanelProps) {
  return (
    <Tag
      className={clsx(
        styles.panel,
        padding !== 'none' && styles[`padding-${padding}`],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default Panel;
