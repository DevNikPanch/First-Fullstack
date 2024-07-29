<script setup lang="ts">
import UpMenuSideBar from './UpMenuSideBar.vue';
import Projects from '../ProjectsSideBar.vue'
import DownMenuSideBar from './DownMenuSideBar.vue';

import { useSideBarStore } from '../../stores/sideBarStore';

const sideBarStore = useSideBarStore()

</script>
<template>
    <div class="side-bar-container">
        <div class="side-bar-container__item">
            <UpMenuSideBar :subMenuItems=sideBarStore.burgerSubMenuItems />
        </div>
        <div class="side-bar-container__item side-bar-container__item--stretch">
            <Projects />
        </div>
        <div class="side-bar-container__item">
            <DownMenuSideBar />
        </div>
    </div>
</template>
<style scoped>
.side-bar-container {
    width: 270px;
    height: 100vh;
    border-right: 1px solid rgba(57, 59, 70, .5);
    transition: width .4s ease, left .4s ease;
    display: flex;
    flex-direction: column;
}

.side-bar-container__item--stretch {
    flex: 1;
}
</style>