import { splash } from 'docz-plugin-splash'

export default {
  entry: 'src/index.ts',
  esm: 'rollup',
  cjs: 'rollup',
  doc: {
    src: './docs',
    public: './public',
    base: '/Algorithm/',
    title: 'js-common-data-structures',
    description: 'JavaScript Data Structures',
    plugins: [splash()]
  }
}