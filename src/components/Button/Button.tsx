import React, { ReactNode } from 'react';
import classNames from 'classnames';

import cx from './Button.pcss';

interface IButtonProps {
  className?: string;
  type?: 'success' | 'danger';
  disabled?: boolean;
  children?: ReactNode;
  onClick?(): void;
}

export const Button = React.forwardRef<HTMLButtonElement | null, IButtonProps>((props, ref) => {
  const { className, disabled, children, type = 'success', onClick } = props;

  return (
    <button
      className={classNames(cx.root, cx[type], { [cx.disabled]: disabled }, className)}
      ref={ref}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
