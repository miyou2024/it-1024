import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('store.title'),
    },
    name: '门店管理',
    path: '/store',
    children: [
      {
        meta: {
          title: $t('store.employee.title'),
        },
        name: '员工管理',
        path: '/store/employee',
        component: () => import('#/views/store/employee/index.vue'),
      },
    ],
  },
];

export default routes;
