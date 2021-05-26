const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://q40zg4x0.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;