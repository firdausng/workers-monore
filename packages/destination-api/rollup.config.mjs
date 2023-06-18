import typescript from '@rollup/plugin-typescript';
import {folderInput} from "rollup-plugin-folder-input";
import del from 'rollup-plugin-delete'

/** @type {import('rollup').RollupOptions} */
const config =  {
    strictDeprecations: true,
    input: ['src/*.ts'],
    external: ['@jest/globals'],
    output: {
        entryFileNames: "[name].mjs",
        exports: "named",
        dir: 'dist',
        format: 'es',
        sourcemap: true
    },
    plugins: [del({ targets: 'dist/*' }), typescript({ tsconfig: './tsconfig.json' }), folderInput()]
};

export default config;