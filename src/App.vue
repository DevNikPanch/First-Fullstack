<script setup lang="ts">
import SideBar from './components/SideBar/SideBar.vue'
import Header from './components/Header.vue';
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
          <router-view></router-view>
        </div>
        <ToolBar />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app__container {
  display: grid;
  grid-template-columns: 15vw 85vw;
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
