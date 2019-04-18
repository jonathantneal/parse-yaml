import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const input = 'src/index.mjs';
const output = [
	{ file: 'index.js', format: 'cjs', strict: false },
	{ file: 'index.mjs', format: 'esm', strict: false }
];
const plugins = [
	babel(),
	nodeResolve(),
	commonjs(),
	terser()
];

export default { input, output, plugins };
