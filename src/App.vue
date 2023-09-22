<script setup>
import {  RouterView } from 'vue-router';
import FontAction from './components/FontAction.vue';
import Navigation from './components/Navigation.vue';
</script>

<template>
  <FontAction/>
  <main>
  <Navigation/>

  <RouterView />
  </main>
</template>

<style scoped>
main {
  background-color: var(--color-dark);
  background: url(./assets/background.png);

}
</style>
