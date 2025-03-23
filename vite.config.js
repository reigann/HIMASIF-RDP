import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/globals.css',  // Load first
                'resources/css/app.css',
                'resources/css/home.css',
                'resources/css/components/navbar.css',
                'resources/js/app.js',
                'resources/js/home.js'
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources',
            '~': '/public'
        },
    },
    publicDir: 'public',
});
