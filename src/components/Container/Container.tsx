import './Container.scss';
import block from 'bem-cn';
import { forwardRef, memo } from 'react';

const b = block('Container');

interface IContainerProps {
  className?: string;
}

export const Container = memo(forwardRef<HTMLDivElement | null, IContainerProps>((props, ref) => {
  const { className, children } = props;

  return <div className={b.mix(className)} ref={ref}>{children}</div>;
}));

Container.displayName = 'Container';
