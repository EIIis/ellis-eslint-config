import nextConfig from 'eslint-config-next';

export default [
  {
    name: 'ellis:next',
    ...nextConfig,
    rules: {
      ...nextConfig.rules,

      // Extra big-tech style rules
      '@next/next/no-img-element': 'off', // allow <img> when needed
    },
  },
];
