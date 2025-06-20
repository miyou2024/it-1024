import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: '驱动配置',
    },
    name: 'drivers',
    path: '/drivers',
    component: () => import('#/views/drivers/index.vue'),
  },
];

export default routes;
