import './Input.scss';
import block from 'bem-cn';
import { forwardRef, memo, useCallback } from 'react';

interface IInputProps {
  className?: string;
  value: string;
  onInput?(value: string): void;
}

const b = block('Input');

export const Input = memo(forwardRef<HTMLInputElement | null, IInputProps>((props, ref) => {
  const { className, value, onInput } = props;

  const handleEvent = useCallback(
    (e) => {
      onInput?.(e.currentTarget.value);
    },
    [onInput],
  );

  return <input
    className={b.mix(className)}
    ref={ref}
    value={value}
    onInput={handleEvent}
  />;
}));

Input.displayName = 'Input';
