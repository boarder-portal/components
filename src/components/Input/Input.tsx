import './Input.scss';
import { FunctionalComponent, JSX } from 'preact';
import { memo } from 'preact/compat';
import block from 'bem-cn';
import { useCallback } from 'preact/hooks';

interface IInputProps {
  value: string;
  onInput?(value: string): void;
}

const b = block('Input');

export const Input: FunctionalComponent<IInputProps> = memo((props) => {
  const { value, onInput } = props;

  const handleEvent = useCallback(
    (e: JSX.TargetedEvent<HTMLInputElement>) => {
      onInput?.(e.currentTarget.value);
    },
    [onInput],
  );

  return <input
    className={b()}
    value={value}

    // @ts-ignore
    onInput={handleEvent}
  />;
});

