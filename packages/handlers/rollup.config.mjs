import typescript from '@rollup/plugin-typescript';
import { folderInput } from 'rollup-plugin-folder-input'

/** @type {import('rollup').RollupOptions} */
const config =  {
    strictDeprecations: true,
    input: './lib/*.ts',
    output: {
        entryFileNames: "[name].mjs",
        exports: "named",
        dir: 'dist',
        format: 'es',
        sourcemap: true
    },
    plugins: [typescript(), folderInput()]
};

export default config;