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
    ['import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }], // `style: true` for less
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": 3,
        "version": "^7.8.3"
      }
    ]
  ],
};