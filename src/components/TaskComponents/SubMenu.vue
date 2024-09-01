<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref<boolean>(false);
const toggleOpen = () => {
    isOpen.value = !isOpen.value
}

const unActiveHandler = () => {
    isOpen.value = isOpen.value === true ? false : isOpen.value
}

</script>

<template>
    <div v-click-in-element="{
        onUnActive: unActiveHandler
    }" style="display: contents;">
        <div v-if="isOpen">
            <div class="submenu">
                <div class="submenu__container">
                    <slot name="header"></slot>
                    <slot name="body" :onClick="toggleOpen"></slot>
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
        <slot name="trigger" :onClick="toggleOpen"></slot>
    </div>

</template>
<style scoped>
.submenu {
    width: 220px;
    font-size: 14px;
    top: 30px;
    left: 0;
    display: block;
    box-sizing: border-box;
    box-shadow: 0 22px 50px 5px rgba(0, 0, 0, .56), 0 0 0 1px rgba(0, 0, 0, .5);
    background-color: #0b0417;
    border-radius: 5px;
    max-height: calc(100vh - 20px);
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    border: 1px solid rgba(57, 59, 70, .5);
    line-height: 16px;
    padding: 16px;
    z-index: 1000;
}
</style>