import React from 'react';
import styled from 'styled-components';

interface IBoxProps {
  className?: string;
  children: React.ReactNode;
  mt?: number;
  mb?: number;
  ml?: number;
  between?: number;
  bold?: boolean;
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
  flex?: boolean;
  column?: boolean;
  alignItems?: 'center';
}

const TEXT_SIZES_MAP = {
  s: 14,
  m: 16,
  l: 20,
  xl: 26,
  xxl: 36,
};

const Root = styled.div`
  ${({ flex }: IBoxProps) => flex ? 'display: flex;' : ''}
  ${({ column }: IBoxProps) => column ? 'flex-direction: column;' : ''}
  ${({ alignItems }: IBoxProps) => alignItems ? `align-items: ${alignItems};` : ''}
  ${({ mt }: IBoxProps) => mt ? `margin-top: ${mt}px;` : ''}
  ${({ mb }: IBoxProps) => mb ? `margin-bottom: ${mb}px;` : ''}
  ${({ ml }: IBoxProps) => ml ? `margin-left: ${ml}px;` : ''}
  ${({ between, flex, column }: IBoxProps) => between ?
  `& > *:not(:first-child) { margin-${flex ? column ? 'top' : 'left' : 'top'}: ${between}px; }`
  : ''}
  ${({ bold }: IBoxProps) => bold ? 'font-weight: bold;' : ''}
  ${({ size }: IBoxProps) => size ? `
    font-size: ${TEXT_SIZES_MAP[size]}px;
    line-height: 1.2;
  ` : ''}
`;

export const Box: React.FC<IBoxProps> = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <Root className={className} {...restProps}>{children}</Root>
  );
};
