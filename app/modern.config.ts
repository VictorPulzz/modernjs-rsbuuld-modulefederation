import {appTools, defineConfig} from '@modern-js/app-tools';
import {config} from './main.config'
import { moduleFederationPlugin } from '@module-federation/modern-js';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss'

export default defineConfig(({env}) => ({
  dev: {
    port: env === 'development' ? config.devPort : config.prodPort,
  },
  runtime: {
    router: true,
  },
  server: {
    ssr: {
      mode: 'stream',
    },
  },
  plugins: [
    appTools({
      bundler: 'rspack',
    }),
    tailwindcssPlugin(),
    moduleFederationPlugin(),
  ],
}));
