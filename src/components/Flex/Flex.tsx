import { forwardRef, MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';

import cx from './Flex.pcss';

interface IFlexProps {
  className?: string;
  direction?: 'row' | 'column';
  justifyContent?: 'center' | 'flexStart' | 'flexEnd' | 'spaceBetween';
  alignItems?: 'center' | 'flexStart' | 'flexEnd' | 'stretch';
  between?: 1 | 2 | 3 | 4 | 5;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onContextMenu?: MouseEventHandler<HTMLDivElement>;
}

export const Flex = forwardRef<HTMLDivElement | null, IFlexProps>((props, ref) => {
  const {
    className,
    children,
    direction,
    justifyContent,
    alignItems,
    between,
    onClick,
    onContextMenu,
  } = props;

  return (
    <div
      className={classNames(
        cx.root,
        direction ? cx[`direction_${direction}`] : '',
        justifyContent ? cx[`justifyContent_${justifyContent}`] : '',
        alignItems ? cx[`alignItems_${alignItems}`] : '',
        between ? cx[`between_${between}`] : '',
        className,
      )}
      ref={ref}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';
