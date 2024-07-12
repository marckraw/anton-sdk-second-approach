import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/anton-sdk.cjs.js',
                format: 'cjs'
            },
            {
                file: 'dist/anton-sdk.esm.js',
                format: 'es'
            },
            {
                file: 'dist/anton-sdk.umd.js',
                format: 'umd',
                name: 'AntonSDK',
                globals: {
                    axios: 'axios'
                }
            }
        ],
        plugins: [
            typescript({ tsconfig: './tsconfig.json' }),
            resolve(),
            commonjs()
        ],
        external: ['axios']
    },
    {
        input: 'src/bin/index.ts',
        output: [
            {
                dir: 'dist',
                entryFileNames: 'bin/[name].js',
                format: 'cjs'
            }
        ],
        plugins: [
            typescript({ tsconfig: './tsconfig.json' }),
            resolve(),
            commonjs()
        ],
        external: ['axios']
    },
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/anton-sdk.d.ts', format: 'es' }],
        plugins: [dts()]
    }
];

export default config;