import './Flex.scss';
import block from 'bem-cn';
import { forwardRef, memo, MouseEventHandler } from 'react';

interface IFlexProps {
  className?: string;
  direction?: 'row' | 'column';
  justifyContent?: 'center' | 'flexStart' | 'flexEnd' | 'spaceBetween';
  alignItems?: 'center' | 'flexStart' | 'flexEnd' | 'stretch';
  between?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onContextMenu?: MouseEventHandler<HTMLDivElement>;
}

const b = block('Flex');

export const Flex = memo(forwardRef<HTMLDivElement | null, IFlexProps>((props, ref) => {
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
      className={b({ direction, justifyContent, alignItems, between }).mix(
        className,
      )}
      ref={ref}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {children}
    </div>
  );
}));

Flex.displayName = 'Flex';
