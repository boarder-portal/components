import { FC, forwardRef, memo } from 'react';
import classNames from 'classnames';

import cx from './Heading.pcss';

interface IHeadingProps {
  className?: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export const Heading: FC<IHeadingProps> = memo(forwardRef<HTMLDivElement | null, IHeadingProps>((props, ref) => {
  const { className, level, children } = props;

  return <div
    className={classNames(cx.root, cx[`level_${level}`], className)}
    ref={ref}>{children}</div>;
}));

Heading.displayName = 'Heading';
