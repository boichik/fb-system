import { interfaces } from 'inversify';
import { container } from 'inversify-props';
import { TYPES } from '@/shared/ioc/types';
import { createClient } from '../resource/testClient/testClient';
import { TestClient } from '../resource/testClient/interface/TestClient';
import { FirebaseClient } from '../firebaseClient/interface/FirebaseClient';
import { FirebaseClientImpl } from '../firebaseClient/FirebaseClientImpl';
import { createAppRouter } from '@/router/index';
import VueRouter from 'vue-router';
import { AppStore } from '../store/interface/AppStore';
import { storeInitializer } from '../store/service/AppStore';
import { TestStore } from '../testStore/interface/TestStore';
import { testStoreInit } from '../testStore/TestStore';
import { UserStore } from '../userStore/interface/UserStore';
import { userStoreInit } from '../userStore/UserStore';

container.bind<TestClient>(TYPES.TestClient).toDynamicValue(createClient);
container.bind<FirebaseClient>(TYPES.FirebaseClient).to(FirebaseClientImpl);
container
  .bind<VueRouter>(TYPES.AppRouter)
  .toDynamicValue((ctx) => {
    const firebase = ctx.container.get<FirebaseClient>(TYPES.FirebaseClient);

    return createAppRouter(firebase);
  })
  .inSingletonScope();

container
  .bind<TestStore>(TYPES.TestStore)
  .toDynamicValue((ctx) => {
    const store = ctx.container.get<AppStore>(TYPES.AppStore);

    return testStoreInit(store);
  })
  .inSingletonScope();

container
  .bind<UserStore>(TYPES.UserStore)
  .toDynamicValue((ctx) => {
    const store = ctx.container.get<AppStore>(TYPES.AppStore);
    const client = ctx.container.get<FirebaseClient>(TYPES.FirebaseClient);

    return userStoreInit(store, client);
  })
  .inSingletonScope();

container.bind<AppStore>(TYPES.AppStore).toDynamicValue(storeInitializer).inSingletonScope();

export const iocContainer = container;
