import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: '配置管理',
    },
    name: 'conf',
    path: '/conf',
    children: [
      {
        meta: {
          title: '命名空间',
        },
        name: 'conf-namespace',
        path: '/conf/namespace',
        component: () => import('#/views/conf/namespace/index.vue'),
      },
      {
        meta: {
          title: '字典配置',
        },
        name: 'conf-dict',
        path: '/conf/dict',
        component: () => import('#/views/conf/dict/index.vue'),
      },
    ],
  },
];

export default routes;
