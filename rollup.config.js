import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/components/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions,
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions,
    }),
    scss({
      output: './dist/index.css',
      outputStyle: 'compressed',
    }),
    visualizer(),
  ],
};
