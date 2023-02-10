<template>
  <ElConfigProvider :size="size">
    <router-view />
  </ElConfigProvider>
</template>

<script lang="ts">

import { ElConfigProvider } from 'element-plus';
import { defineComponent } from 'vue';
import { configStore } from './store/modules/config';

export default defineComponent({
  setup() {
    const size = configStore.size
    console.log('xxxxxxxxxxx size:', size)
    return {
      size: size
    }
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
</style>
