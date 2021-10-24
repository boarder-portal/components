import './Button.scss';
import { FunctionalComponent } from 'preact';
import { memo } from 'preact/compat';
import block from 'bem-cn';

interface IButtonProps {
  className?: string;
  type?: 'success' | 'danger';
  disabled?: boolean;
  onClick?(): void;
}

const b = block('Button');

export const Button: FunctionalComponent<IButtonProps> = memo((props) => {
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
