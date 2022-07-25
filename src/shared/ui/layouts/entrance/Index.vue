<template>
  <div class="entrance-layout">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EntranceLayout extends Vue {}
</script>

<style lang="scss" scoped>
.entrance-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>
