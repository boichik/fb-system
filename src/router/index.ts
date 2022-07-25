import Vue, { inject } from 'vue';
import VueRouter from 'vue-router';
import { entranceRoutes } from './entance';
import { defaultRoutes } from './default';
import { iocContainer } from '@/shared/ioc';
import {} from 'inversify-props';
import { FirebaseClient } from '@/shared/firebaseClient/interface/FirebaseClient';
import { TYPES } from '@/shared/ioc/types';

Vue.use(VueRouter);

export const createAppRouter = (firebase: FirebaseClient): VueRouter => {
  const routes = [...entranceRoutes, ...defaultRoutes];

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });

  router.beforeEach((to, from, next) => {
    const currentUser = firebase.firebaseClient?.currentUser;
    console.log(currentUser, to);

    if (!currentUser && to.name !== 'entrance-login') {
      next('/login');
    } else {
      next();
    }
  });

  return router;
};
