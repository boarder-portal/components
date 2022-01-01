import { FC, forwardRef, memo, useCallback } from 'react';
import classNames from 'classnames';

import cx from './Input.pcss';

interface IInputProps {
  className?: string;
  value: string;
  type?: 'text' | 'password';
  placeholder?: string;
  disableAutoCorrect?: boolean;
  onInput?(value: string): void;
}

export const Input: FC<IInputProps> = memo(forwardRef<HTMLInputElement | null, IInputProps>((props, ref) => {
  const { className, value, type = 'text', placeholder, disableAutoCorrect, onInput } = props;

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
    type={type}
    placeholder={placeholder}
    autoCorrect={disableAutoCorrect ? 'off' : undefined}
    spellCheck={disableAutoCorrect ? 'false' : undefined}
    onInput={handleEvent}
  />;
}));

Input.displayName = 'Input';
