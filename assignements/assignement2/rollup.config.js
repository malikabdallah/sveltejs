import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;
const currentDir = process.cwd(); // Get the current working directory

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: `${currentDir}/public/bundle.js`
    },
    plugins: [
        svelte({
            dev: !production,
            css: css => {
                const outputPath = `${currentDir}/public/bundle.css`; // Use currentDir
                css.write(outputPath);
            }
        }),
        resolve(),
        commonjs(),
        !production && livereload('public'),
        production && terser()
    ]
};
