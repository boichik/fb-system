import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { AppStore } from '../store/interface/AppStore';
import { TestStore } from './interface/TestStore';

export const testStoreInit = (store: AppStore): TestStore => {
  @Module({ dynamic: true, store, name: 'TestStore', namespaced: true })
  class TestStoreImpl extends VuexModule implements TestStore {
    private _testValue = false;

    public get testValue() {
      return this._testValue;
    }

    @Action
    setValue(val: boolean): void {
      this._setValue(val);
    }

    @Mutation
    private _setValue(val: boolean) {
      this._testValue = val;
    }
  }

  return getModule(TestStoreImpl);
};
