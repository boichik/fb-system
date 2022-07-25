<template>
  <div class="login">
    <div class="login-icon">
      <div class="login-icon__container">
        <img src="../../../../assets/images/user-icon.svg" alt="" />
      </div>
    </div>
    <ElForm :form="form" @submit.prevent.native="handleLogin">
      <ElFormItem prop="email" label="Email">
        <ElInput v-model="form.email" placeholder="test@gmail.com" />
      </ElFormItem>
      <ElFormItem prop="password" label="Password">
        <ElInput v-model="form.password" :show-password="true" placeholder="*********" />
      </ElFormItem>
      <ElFormItem style="margin: 0">
        <ElButton type="primary" native-type="submit" :loading="loading">Login</ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RequiredEmailValidationRule } from '@/shared/rules/Email';
import { RequiredPasswordValidationRule } from '@/shared/rules/Password';
import { inject } from 'inversify-props';
import { TYPES } from '@/shared/ioc/types';
import { TestStore } from '@/shared/testStore/interface/TestStore';
import { UserStore } from '@/shared/userStore/interface/UserStore';

interface Form {
  email: string;
  password: string;
}

@Component
export default class Login extends Vue {
  @inject(TYPES.UserStore)
  private readonly userStore!: UserStore;

  private loading = false;

  private form: Form = {
    email: '',
    password: '',
  };

  private rules = {
    email: RequiredEmailValidationRule,
  };

  private async handleLogin() {
    this.userStore.signIn({ email: this.form.email, password: this.form.password });
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 300px;
  border-radius: 15px;
  padding: 30px;
  -webkit-box-shadow: 0px 0px 23px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 23px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 23px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 300px) {
    width: 80%;
  }

  &-icon {
    width: 100%;
    height: 65px;
    position: absolute;
    top: -35px;
    left: 0;
    display: flex;
    justify-content: center;

    img {
      height: 100%;
    }

    &__container {
      padding: 8px;
      background: #409eff;
      border-radius: 50%;
    }
  }
}
</style>
