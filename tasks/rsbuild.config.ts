import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';
import {pluginSass} from '@rsbuild/plugin-sass';
import {pluginModuleFederation} from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginModuleFederation({
      name: 'tasks',
      manifest: true,
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.0.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.0.0",
        },
      },
    }),
  ],
  server: {
    port: 3051
  },
});
