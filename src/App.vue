<template>
  <div id="app">
    <p>Emai {{ userEmail }}</p>
    <router-link to="/home">Home</router-link>
    <router-link to="/">Login</router-link>

    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { inject } from 'inversify-props';
import { TYPES } from '@/shared/ioc/types';
import { FirebaseClient } from './shared/firebaseClient/interface/FirebaseClient';
import { UserStore } from './shared/userStore/interface/UserStore';

@Component
export default class HomeView extends Vue {
  @inject(TYPES.UserStore)
  private readonly userStore!: UserStore;

  private get userEmail() {
    return this.userStore.currentUser;
  }
}
</script>
<style lang="scss">
@import url('@/assets/styles/index.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
