import { defineConfig } from 'umi';

export default defineConfig({
  ssr:{},
  title: 'umi-test',
  layout:{},
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
});
