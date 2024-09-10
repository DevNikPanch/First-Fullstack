<script setup lang="ts">
import { useTaskStore } from '../../stores/taskStore';
import InboxSVG from '../SideBar/SideBarSVG/InboxSVG.vue';
import SortBurgerSVG from './RouterComponentsSVG/SortBurgerSVG.vue';
import TaskContainer from '../TaskComponents/TaskContainer.vue';

const taskStore = useTaskStore();

</script>
<template>
    <div class="incoming">
        <div class="incoming__container">
            <div class="router-header">
                <div class="router-header__container">
                    <div class="router-header__title">
                        <div class="router-header__title-img">
                            <div class="icon-svg">
                                <InboxSVG />
                            </div>
                        </div>
                        <div class="router-header__title-text">Входящие</div>
                    </div>
                    <div class="router-header__burger">
                        <div class="router-header__burger-btn-wrp">
                            <div class="router-header__burger-btn-sort hover-help-info" id="burger-filter">
                                <div class="icon-svg">
                                    <SortBurgerSVG />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="incoming__content">
                <div v-if="taskStore.countTasks == 0" class="incoming__empty">
                    <div class="incoming__empty-title">Тут пока ничего нет</div>
                    <div class="incoming__empty-subtitle">Нажмите иконку + для создания новой задачи</div>
                </div>
                <TaskContainer :typeProjectIncoming="true" />
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

/* Шапка основного окна */
.router-header__container {
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 8px;
    margin-top: 0;
    padding: 0 0 0 6px;
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
    height: calc(100vh - 74px - 55px);
    overflow-x: hidden;
    overflow-y: auto;
    padding: 5px 20px 0 42px;
    scroll-snap-type: y mandatory;
    box-sizing: border-box;
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