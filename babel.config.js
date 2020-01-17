module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], // `style: true` for less
  ],
};
