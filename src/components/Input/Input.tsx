import { FC, forwardRef, memo, useCallback } from 'react';
import classNames from 'classnames';

import cx from './Input.pcss';

interface IInputProps {
  className?: string;
  value: string;
  placeholder?: string;
  onInput?(value: string): void;
}

export const Input: FC<IInputProps> = memo(forwardRef<HTMLInputElement | null, IInputProps>((props, ref) => {
  const { className, value, placeholder, onInput } = props;

  const handleEvent = useCallback(
    (e) => {
      onInput?.(e.currentTarget.value);
    },
    [onInput],
  );

  return <input
    className={classNames(cx.root, className)}
    ref={ref}
    value={value}
    placeholder={placeholder}
    onInput={handleEvent}
  />;
}));

Input.displayName = 'Input';
