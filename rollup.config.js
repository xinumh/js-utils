import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/js-utils.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
  ]
};