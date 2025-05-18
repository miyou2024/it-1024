import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('contact.title'),
    },
    name: 'contact',
    path: '/contact',
    children: [
      {
        meta: {
          title: $t('contact.phone.title'),
        },
        name: 'contact-phone',
        path: '/contact/phone',
        component: () => import('#/views/contact/phone/index.vue'),
      },
    ],
  },
];

export default routes;
