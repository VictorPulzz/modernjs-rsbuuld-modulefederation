import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'app',
  remotes: {
    tasks: 'tasks@http://localhost:3051/mf-manifest.json',
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
});
