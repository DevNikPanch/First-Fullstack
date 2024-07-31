<script setup lang="ts">
import { ref } from 'vue';
import { showActiveItem } from '../../helpers/showActiveItem'
import { SidebarItems } from '../../types/sideBarItems';
import InboxSVG from '../SvgComponents/InboxSVG.vue'
import StarSVG from '../SvgComponents/StarSVG.vue'
import CalendarSVG from '../SvgComponents/CalendarSVG.vue'

defineProps<{
    subMenuItems: Array<String>,
    upMenuItems: SidebarItems
}>()

const isOpenMenu = ref(false);

function showSubMenu(show: boolean) {
    isOpenMenu.value = show;
}

</script>
<template>
    <div class="menu-header">
        <div class="menu-header__item">
            <div class="menu-header__item-up">
                <img src="../../../images/sing-logo.png" alt="Logo" class="menu-header__item-logo">
                <div class="menu-header__item-title">Singularity App</div>
            </div>
            <div class="menu-header__item-burger" @click="showSubMenu(true)" v-click-outside="() => showSubMenu(false)"
                style="position: relative;">
                <div class="top-menu-burger">
                    <div class="icon-svg more " style="min-height: 24px; min-width: 24px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" class="injected-svg" data-src="resources/icons/more_24.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10ZM19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="submenu" :style="{ 'display': isOpenMenu ? 'block' : 'none' }">
                    <ul class="submenu__list">
                        <li v-for="item in subMenuItems" class="submenu__list-item">
                            <div class="submenu__list-item-text">
                                <span class="submenu__list-item-label">{{ item }}</span>
                                <div class="icon-svg" style="min-height: 12px; min-width: 12px;">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 12 12" fill="none" class="injected-svg"
                                            data-src="resources/icons/arrow_right_12.svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <path fill="currentColor"
                                                d="M7.85403 6.35403L7.8265 6.3785L4.85076 9.35403C4.65613 9.54866 4.34059 9.54866 4.14597 9.35403C3.96632 9.17438 3.9525 8.8917 4.10451 8.69619L4.14597 8.64924L6.795 6L4.14597 3.35076C3.95134 3.15613 3.95134 2.84059 4.14597 2.64597C4.32562 2.46632 4.6083 2.4525 4.80381 2.60451L4.85076 2.64597L7.82704 5.62087C7.83627 5.62884 7.84527 5.63721 7.85403 5.64597C7.94386 5.73579 7.99223 5.85138 7.99914 5.96894V6.03106C7.99223 6.14862 7.94386 6.26421 7.85403 6.35403Z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="menu-down">
        <ul class="list">
            <li v-for="item in upMenuItems" @click="showActiveItem">
                <router-link :to="item.link" class="list__item">
                    <div class="list__item-info">
                        <div class="list__item-img">
                            <div class="icon-svg">
                                <div>
                                    <component v-if="item.name == 'Входящие'" :is="InboxSVG" />
                                    <component v-if="item.name == 'Сегодня'" :is="StarSVG" />
                                    <component v-if="item.name == 'Планы'" :is="CalendarSVG" />
                                </div>
                            </div>
                        </div>
                        <span class="list__item-text">{{ item.name }}</span>
                    </div>
                    <div v-if="item.counter" class="list__item-count">{{ item.count }}</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.menu-header {
    height: 30px;
    display: flex;
    line-height: 16px;
}

.menu-header__item {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 18px;
}

.menu-header__item-up {
    display: flex;
    align-items: center;
    gap: 5px;
}

.menu-header__item-burger {
    position: relative;
    display: flex;
    align-items: center;
}

.burger {
    width: 30px;
    height: 30px;
    padding: 6px 0 0 0;
}

/* Подменю бургера SideBar */

.submenu {
    display: none;
    left: 226px;
    top: 0;
    font-size: 12px;
    line-height: 1.25;
    position: fixed;
    z-index: 99999;
}

.submenu__list {
    position: absolute;
    background: #120c1e;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, .13);
}

.submenu__list-item {
    color: #fff;
    position: relative;
    white-space: nowrap;
    cursor: default;
}

.submenu__list-item:hover {
    background-color: #182137;
}

.submenu__list-item-text {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    box-sizing: border-box;
    color: inherit;
    height: 34px;
    padding: 8px 12px;
    text-align: left;
    text-align-last: left;
    width: 100%;
}

.submenu__list-item-label {
    flex-grow: 1;
    padding-right: 10px;
}

/* Список верхнего меню SideBar */

.menu-down {
    padding: 8px 12px 12px;
}

.list {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 6px;
}

.list__item {
    position: relative;
    height: 24px;
    padding: 2px 6px 2px 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
}

.list__item:hover::before {
    content: "";
    border-radius: 5px;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #12284591;
}

.list__item-info {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
}

.list__item-img {
    align-items: center;
    color: var(--icon-side-bar-color);
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    position: relative;
    z-index: 1;
}

.list__item-count {
    color: #76899b;
}
</style>