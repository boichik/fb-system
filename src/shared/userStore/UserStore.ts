import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import {
  FirebaseAuthWithEmailAndPassword,
  FirebaseClient,
} from '../firebaseClient/interface/FirebaseClient';
import { AppStore } from '../store/interface/AppStore';
import { User, UserStore } from './interface/UserStore';

export const userStoreInit = (store: AppStore, client: FirebaseClient) => {
  @Module({ dynamic: true, store, name: 'UserStore', namespaced: true })
  class UserStoreImpl extends VuexModule implements UserStore {
    private _currentUser: User | null = null;

    public get currentUser() {
      return this._currentUser;
    }

    @Action({ rawError: true })
    async signIn(data: FirebaseAuthWithEmailAndPassword): Promise<void> {
      console.log('store', client.firebaseApp);

      //   const resp = await client.auth().signInEmail(data);

      //   const { email = null, providerId = null, photoURL = null, displayName = null } = resp.user;

      //   this._setCurrentUser({ id: providerId, email, avatar: photoURL, name: displayName });
    }

    @Action
    async logOut(): Promise<void> {
      console.log('log out');
    }

    @Mutation
    private _setCurrentUser(user: User) {
      this._currentUser = user;
    }
  }

  return getModule(UserStoreImpl);
};
