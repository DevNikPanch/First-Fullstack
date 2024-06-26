<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import Header from './components/Header.vue';
import Today from './components/MainRouterToday.vue'
import ToolBar from './components/MainToolBar.vue'


</script>

<template>
  <div class="app">
    <div class="app__container">
      <div class="app__container-item">
        <SideBar />
      </div>
      <div class="app__container-item app__container-item--main">
        <Header />
        <div class="app__container-flex">
          <Today />
        </div>
        <ToolBar />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app__container {
  display: flex;
}

.app__container-item--main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.app__container-flex {
  flex-grow: 1;
}
</style>
