// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), react()],

    fonts: [
        {
            provider: fontProviders.local(),
            name: 'SpaceGrotesk',
            cssVariable: '--font-space-grotesk',
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/SpaceGrotesk-Regular.woff2'],
                        weight: '100 500',
                        style: 'normal',
                    },
                    {
                        src: ['./src/assets/fonts/SpaceGrotesk-Bold.woff2'],
                        weight: '600 900',
                        style: 'normal',

                    },
                ],
            },
        },
    ],
});