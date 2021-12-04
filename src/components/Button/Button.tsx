import './Button.scss';
import block from 'bem-cn';
import { FC, memo } from 'react';

interface IButtonProps {
  className?: string;
  type?: 'success' | 'danger';
  disabled?: boolean;
  onClick?(): void;
}

const b = block('Button');

export const Button: FC<IButtonProps> = memo((props) => {
  const { className, disabled, children, type = 'success', onClick } = props;

  return (
    <button
      className={b({ type, disabled }).mix(className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
