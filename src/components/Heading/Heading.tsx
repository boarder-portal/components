import './Heading.scss';
import { FunctionalComponent } from 'preact';
import { memo } from 'preact/compat';
import block from 'bem-cn';

interface IHeadingProps {
  className?: string;
  level: 1 | 2 | 3 | 4 | 5;
}

const b = block('Heading');

export const Heading: FunctionalComponent<IHeadingProps> = memo((props) => {
  const { className, level, children } = props;

  return <div className={b({ level }).mix(className)}>{children}</div>;
});

