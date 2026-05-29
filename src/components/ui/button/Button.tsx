import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'cardButton' | 'round';
  colorScheme:
    | 'blueWhite'
    | 'whiteBlack'
    | 'yellowBlack'
    | 'greyBlue'
    | 'slateSlate'
    | 'greenWhite';
  className?: string;
}

export function Button({
  variant,
  colorScheme,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[colorScheme],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
