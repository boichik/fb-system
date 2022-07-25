import 'reflect-metadata';

import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import { iocContainer } from './shared/ioc';
import { TYPES } from './shared/ioc/types';
import { FirebaseClient } from '@/shared/firebaseClient/interface/FirebaseClient';
import VueRouter from 'vue-router';

Vue.use(ElementUI, { size: 'mini' });

Vue.config.productionTip = false;

const firebaseClient = iocContainer.get<FirebaseClient>(TYPES.FirebaseClient);

firebaseClient.initialize();
firebaseClient.auth().getAuthData();

const router = iocContainer.get<VueRouter>(TYPES.AppRouter);

if (firebaseClient.firebaseApp) {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app');
}
