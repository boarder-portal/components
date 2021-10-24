import './Container.scss';
import { FunctionalComponent } from 'preact';
import { memo } from 'preact/compat';
import block from 'bem-cn';

const b = block('Container');

interface IContainerProps {
  className?: string;
}

export const Container: FunctionalComponent<IContainerProps> = memo((props) => {
  const { className, children } = props;

  return <div className={b.mix(className)}>{children}</div>;
});
