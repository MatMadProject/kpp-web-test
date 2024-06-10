import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
    assetsInclude: ['./assets/img/**/*'],
    server: {
        open: './index.html',
    },
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
            }
        }
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
        }),
        ViteImageOptimizer(),
    ],
};