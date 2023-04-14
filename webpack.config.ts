// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration } from 'webpack';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import TerserPlugin from 'terser-webpack-plugin';

const config: Configuration = {
    cache: {
        type: 'filesystem',
    },
    entry: {
        main: './assets/js/index.tsx',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'index.js',
        sourceMapFilename: 'index.map',
    },
    optimization: {
        minimizer: [new TerserPlugin({ extractComments: false })],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    devtool: 'eval-source-map',
};

export default config;
