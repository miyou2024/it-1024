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
    children: [
      {
        meta: {
          title: '腾讯云存储',
        },
        name: 'drivers-tencent-cos',
        path: '/drivers/tencent-cos',
        component: () => import('#/views/drivers/tencent-cos/index.vue'),
      },
      {
        meta: {
          title: '阿里云存储',
        },
        name: 'drivers-aliyun-oss',
        path: '/drivers/aliyun-oss',
        component: () => import('#/views/drivers/aliyun-oss/index.vue'),
      },
      {
        meta: {
          title: '本地存储',
        },
        name: 'drivers-local',
        path: '/drivers/local',
        component: () => import('#/views/drivers/local/index.vue'),
      },
    ],
  },
];

export default routes;
