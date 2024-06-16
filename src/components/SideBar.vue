<script setup lang="ts">
import UpMenuSideBar from './UpMenuSideBar.vue';
</script>
<template>
    <div class="sideBar-container">
        <UpMenuSideBar />
    </div>
</template>
<style scoped>
.sideBar-container {
    width: 270px;
    height: 100vh;
    border-right: 1px solid rgba(57, 59, 70, .5);
    position: relative;
    top: 0;
    bottom: 0;
    transition: width .4s ease, left .4s ease;
}
</style>