import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('account.title'),
    },
    name: 'account',
    path: '/account',
    children: [
      {
        meta: {
          title: $t('account.phone.title'),
        },
        name: 'account-phone',
        path: '/account/phone',
        component: () => import('#/views/account/phone/index.vue'),
      },
    ],
  },
];

export default routes;
