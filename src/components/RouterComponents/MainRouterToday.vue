<script setup lang="ts">
import { useTaskStore } from '../../stores/taskStore';
import StarSVG from '../SideBar/SideBarSVG/StarSVG.vue';
import ArrowDownSVG from './RouterComponentsSVG/ArrowDownSVG.vue';
import SortBurgerSVG from './RouterComponentsSVG/SortBurgerSVG.vue';
import TaskContainer from '../TaskComponents/TaskContainer.vue';

const taskStore = useTaskStore();

</script>
<template>
    <div class="today">
        <div class="today__container">
            <div class="router-header">
                <div class="router-header__container">
                    <div class="router-header__title">
                        <div class="router-header__title-img">
                            <div class="icon-svg">
                                <StarSVG />
                            </div>
                        </div>
                        <div class="router-header__title-text">Сегодня</div>
                    </div>
                    <div class="router-header__burger">
                        <div class="router-header__burger-btn-wrp hover-item">
                            <div class="router-header__burger-btn-sort hover-help-info" id="burger-filter">
                                <div class="icon-svg">
                                    <SortBurgerSVG />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="today__content">
                <div v-if="taskStore.countTasks == 0" class="today__empty">
                    <div class="today__empty-title">Посмотрите короткое видео, чтобы узнать, с чего начать
                        планирование</div>
                    <button type="button" class="today__empty-btn">Смотреть видео</button>
                </div>
                <!-- <div class="task-group task-group--overdue">
                    <div class="task-group__info">
                        <div class="icon-wrapper">
                            <div class="icon-svg star" style="min-height: 24px; min-width: 24px;">
                                <StarSVG />
                            </div>
                        </div>
                        <div class="task-group__info-title">Просроченные задачи</div>
                        <div class="task-group__arrow">
                            <div class="icon-svg arrow_down " style="min-height: 16px; min-width: 16px;">
                                <ArrowDownSVG />
                            </div>
                        </div>
                    </div>
                    <div class="task-group__list">
                        <TaskContainer :typeProjectIncoming="false" />
                    </div>
                </div> -->
                <div class="task-group task-group--relevant">
                    <div class="task-group__info">
                        <div class="icon-wrapper">
                            <div class="icon-svg star" style="min-height: 24px; min-width: 24px;">
                                <StarSVG />
                            </div>
                        </div>
                        <div class="task-group__info-title">Сегодня</div>
                        <div class="task-group__arrow">
                            <div class="icon-svg arrow_down " style="min-height: 16px; min-width: 16px;">
                                <ArrowDownSVG />
                            </div>
                        </div>
                    </div>
                    <div class="task-group__list">
                        <TaskContainer :typeProjectIncoming="false" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.today {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.today__container {
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

/* Основной контент блока "Сегодня" */
.today__content {
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

.today__empty {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    height: 50vh;
    min-height: 50%;
}

.today__empty-title {
    font-size: 16px;
    color: var(--text-gray-color);
    line-height: 18px;
    margin-bottom: 24px;
    font-weight: 400;
}

.today__empty-btn {
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    color: #fff;
    background-color: #2384b9;
    width: 242px;
    height: 48px;
    margin: 0;
    margin-left: 12px;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    min-width: 94px;
    padding: 0 30px;
    text-align: center;
    transition: all .4s ease;
}

.today__empty-btn:hover {
    background: #2384b9;
    opacity: .75;
}

/* Стилизация фильтрованных списков задач с датами */
.task-group {
    margin-top: 8px;
}

.task-group__info {
    align-items: center;
    display: flex;
    height: 24px;
    padding: 16px 0 16px 2px;
    position: relative;
    z-index: 1;
}

.task-group__info::after {
    border-top: 1px solid rgba(57, 59, 70, .5);
    border-bottom: 1px solid rgba(57, 59, 70, .5);
    bottom: -1px;
    content: "";
    left: -52px;
    pointer-events: none;
    position: absolute;
    right: -52px;
    top: 0;
}

.tas .task-group__info:hover::before {
    border-radius: 5px;
    bottom: 14px;
    content: "";
    left: -4px;
    position: absolute;
    right: -6px;
    top: 14px;
    background-color: #1d2b4d;
}

.task-group__info .icon-wrapper {
    left: -36px;
    position: absolute;
    padding-right: 10px;
    color: var(--text-gray-color);
}

.task-group__info-title {
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
}

.task-group__arrow {
    position: relative;
    margin-left: auto;
    opacity: .5;
    transition: opacity .1s linear;
    flex-shrink: 0;
    color: var(--text-gray-color);
}

.task-group__arrow .icon-svg {
    transform: rotate(0deg);
    transition: transform .4s ease;
}

.task-group__list {
    margin: 12px 0;
    min-height: 24px;
}
</style>