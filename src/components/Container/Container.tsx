import { forwardRef, memo, ReactNode } from 'react';
import classNames from 'classnames';

import cx from './Container.pcss';

interface IContainerProps {
  className?: string;
  children?: ReactNode;
}

export const Container = memo(forwardRef<HTMLDivElement | null, IContainerProps>((props, ref) => {
  const { className, children } = props;

  return <div className={classNames(cx.root, className)} ref={ref}>{children}</div>;
}));

Container.displayName = 'Container';
