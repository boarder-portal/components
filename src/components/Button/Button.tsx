import './Button.scss';
import block from 'bem-cn';
import { forwardRef, memo } from 'react';

interface IButtonProps {
  className?: string;
  type?: 'success' | 'danger';
  disabled?: boolean;
  onClick?(): void;
}

const b = block('Button');

export const Button = memo(forwardRef<HTMLButtonElement | null, IButtonProps>((props, ref) => {
  const { className, disabled, children, type = 'success', onClick } = props;

  return (
    <button
      className={b({ type, disabled }).mix(className)}
      ref={ref}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}));

Button.displayName = 'Button';
