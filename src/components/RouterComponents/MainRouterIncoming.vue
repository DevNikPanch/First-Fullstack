<script setup lang="ts">
import Task from '../Task.vue';
import { useMainToolBarStore } from '../../stores/mainToolBarStore';

const mainToolBarStore = useMainToolBarStore();

</script>
<template>
    <div class="incoming">
        <div class="incoming__container">
            <div class="router-header">
                <div class="router-header__container">
                    <div class="router-header__title">
                        <div class="router-header__title-img">
                            <div class="icon-svg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        class="injected-svg" data-src="resources/icons/inbox_24.svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                                            d="M21 19H3C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19Z">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                                            d="M5 6C5.55228 6 6 6.44772 6 7C6 7.55228 5.55228 8 5 8H4V15L5.98284 15.0001C5.98855 15 5.99427 15 6 15H20V8H19C18.4477 8 18 7.55228 18 7C18 6.44772 18.4477 6 19 6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21C20.4477 21 20 20.5523 20 20V17L6.01716 16.9999C6.01145 17 6.00573 17 6 17H4V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20V7C2 6.44772 2.44772 6 3 6H5ZM12 3C12.5523 3 13 3.44772 13 4V10L14.1213 8.87868C14.5118 8.48815 15.145 8.48815 15.5355 8.87868C15.9261 9.2692 15.9261 9.90237 15.5355 10.2929L12.7071 13.1213C12.5569 13.2715 12.3708 13.364 12.1764 13.3986L12.059 13.4125H11.941C11.7051 13.3986 11.4731 13.3016 11.2929 13.1213L8.46447 10.2929C8.07394 9.90237 8.07394 9.2692 8.46447 8.87868C8.85499 8.48815 9.48815 8.48815 9.87868 8.87868L11 10V4C11 3.44772 11.4477 3 12 3Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="router-header__title-text">Входящие</div>
                    </div>
                    <div class="router-header__burger">
                        <div class="router-header__burger-btn-wrp">
                            <div class="router-header__burger-btn-sort hover-help-info" id="burger-filter">
                                <div class="icon-svg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" class="injected-svg"
                                            data-src="resources/icons/sort_1_24.svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M18 17C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17H18ZM16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H16ZM20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H6C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5H20Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="incoming__content">
                <div v-if="mainToolBarStore.countTask == 0" class="incoming__empty">
                    <div class="incoming__empty-title">Тут пока ничего нет</div>
                    <div class="incoming__empty-subtitle">Нажмите иконку + для создания новой задачи</div>
                </div>
                <div v-for="index in mainToolBarStore.countTask" :key="index">
                    <Task />
                </div>
                <div class="incoming__content-drop"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.incoming {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.incoming__container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

/* Шапка основного окна */
.router-header__container {
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 8px;
    margin-top: 0;
    padding: 0 0 0 16px;
}

.router-header__title {
    display: flex;
    align-items: center;
}

.router-header__title-img {
    padding-bottom: 0;
    color: var(--text-gray-color);
    padding-right: 14px;
}

.router-header__title-text {
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
}

.router-header__burger {
    position: relative;
    align-items: center;
    display: flex;
    height: 32px;
    margin: 0;
    margin-left: 6px;
    padding-left: 5px;
}

.router-header__burger-btn-wrp {
    padding: 3px;
    border-radius: 5px;
    margin-right: 13px;
}

.router-header__burger-btn-wrp:hover::before {
    background-color: #12284591;
    border-radius: 5px;
    bottom: 2px;
    content: "";
    left: 6px;
    position: absolute;
    right: 12px;
    top: 2px;
}

.router-header__burger-btn-sort {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    color: var(--text-gray-color);
    position: relative;
}

#burger-filter:hover::before {
    content: "Пользовательская сортировка";
}

/* Основной контент блока "Входящие" */
.incoming__content {
    position: relative;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 74px - 55px);
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 20px 0 52px;
    scroll-snap-type: y mandatory;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

:hover::-webkit-scrollbar-thumb {
    background-color: #1d2b4d;
    border: 2px solid transparent;
    border-radius: 6px;
    cursor: pointer;
}

.incoming__empty {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    height: 50vh;
    min-height: 50%;
}

.incoming__empty-title {
    font-size: 24px;
    color: var(--text-gray-color);
    font-weight: 400;
    text-align: center;
    line-height: 26px;
    line-height: 24px;
    margin-bottom: 16px;
}

.incoming__empty-subtitle {
    font-size: 12px;
    color: var(--text-gray-color);
    font-weight: 400;
    text-align: center;
    line-height: 14px;
    margin: 0;
}

.incoming__content-drop {
    flex: 1;
    height: 100%;
}
</style>