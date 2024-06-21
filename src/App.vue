<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import Header from './components/Header.vue';


</script>

<template>
  <div class="app">
    <div class="app__container">
      <div class="app__container-item">
        <SideBar />
      </div>
      <div class="app__container-item app__container-item--header">
        <Header />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app__container {
  display: flex;
}

.app__container-item--header {
  flex-grow: 1;
}
</style>
