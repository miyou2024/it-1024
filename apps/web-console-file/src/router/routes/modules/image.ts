import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: '图片管理',
    },
    name: 'image',
    path: '/image',
    component: () => import('#/views/image/index.vue'),
  },
];

export default routes;
