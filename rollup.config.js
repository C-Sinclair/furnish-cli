import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import common from 'rollup-plugin-commonjs'

export default [
	{
		input: 'src/index.js',
		output: {
			file: 'lib/index.cjs.js',
			format: 'cjs',
			name: 'furnish-cli',
			exports: 'named'
		},
		plugins: [
			resolve(),
			common(),
			json({
				preferConst: true,
				compact: true,
				namedExports: true
			}),
			babel({
				exclude: ['node_modules/**', '*.json']
			})
		]
	}
]
