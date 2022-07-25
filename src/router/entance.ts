import { RouteConfig } from 'vue-router/types/router';
import EntranceLayout from '@/shared/ui/layouts/entrance/Index.vue';
import EntranceLogin from '@/modules/entrance/login/pages/Index.vue';

export const entranceRoutes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'entrance',
    component: EntranceLayout,
    redirect: 'login',
    children: [
      {
        path: '/login',
        name: 'entrance-login',
        component: EntranceLogin,
      },
    ],
  },
];
