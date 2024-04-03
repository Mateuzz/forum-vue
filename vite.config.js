import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig((command) => {
    // const isProduction = /build|preview/
    return {
        server: {
            port: 8080
        },
        preview: {
            port: 8080
        },
        build: {
            sourcemap: true,
        },
        plugins: [
            vue({ 
                // isProduction 
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
                '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
                '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
                '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
            }
        }
    };
})

