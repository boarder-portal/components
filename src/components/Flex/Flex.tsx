import './Flex.scss';
import block from 'bem-cn';
import { FC, memo, MouseEventHandler } from 'react';

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

export const Flex: FC<IFlexProps> = memo((props) => {
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
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';
