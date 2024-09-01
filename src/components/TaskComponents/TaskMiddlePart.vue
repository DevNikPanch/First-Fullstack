<script setup lang="ts">import InboxSVG from '../SvgComponents/InboxSVG.vue';
import UnplacedSvg from '../SvgComponents/UnplacedSvg.vue';
import RemoveSvg from '../SvgComponents/RemoveSvg.vue';
import CalendarSVG from '../SvgComponents/CalendarSVG.vue';

import { useTaskStore } from '../../stores/taskStore';
import { TaskData } from '../../types/taskData.types';
import PrioritySVG from './TaskSVG/PrioritySVG.vue';
import SubMenu from './SubMenu.vue';

const props = defineProps<{
    task: TaskData,
}>()

const taskStore = useTaskStore();

</script>
<template>
    <div class="task__middle">
        <div class=" task-project">
            <SubMenu>
                <template #trigger="{ onClick }">
                    <div class="priority info"
                        :style="{ 'display': task.isHighPriority || task.isLowPriority ? 'block' : 'none' }">
                        <div class="priority__container info-container">
                            <div class="priority__value value-wrapper" @click="onClick">
                                <div class="icon-svg priority " style="min-height: 24px; min-width: 24px;">
                                    <PrioritySVG />
                                </div>
                                <div class="priority__content info-content">
                                    <span>{{ task.isHighPriority ? 'Высокий приоритет' :
                                        task.isLowPriority ? 'Низкий приоритет' : '' }} </span>
                                </div>
                            </div>
                            <div class="icon-svg remove" style="min-height: 24px; min-width: 24px;">
                                <RemoveSvg @click="taskStore.setMidPriority(task.taskId)" />
                            </div>
                        </div>
                    </div>
                </template>
                <template #body="{ onClick }">
                    <div class="submenu__list">
                        <div class="submenu__list-item" @click="taskStore.setHighPriority(task.taskId), onClick()">
                            <div class="icon-svg priority-types__item-icon priority-types__item-icon--high"
                                style="min-height: 24px; min-width: 24px;">
                                <PrioritySVG />
                            </div>
                            <span class="submenu__list-item-text submenu__list-item-text--high">Высокий
                                приоритет</span>
                        </div>
                        <div class="submenu__list-item" @click="taskStore.setMidPriority(task.taskId), onClick()">
                            <div class="icon-svg priority-types__item-icon priority-types__item-icon--mid"
                                style="min-height: 24px; min-width: 24px;">
                                <PrioritySVG />
                            </div>
                            <span class="submenu__list-item-text">Средний приоритет</span>
                        </div>
                        <div class="submenu__list-item" @click="taskStore.setLowPriority(task.taskId), onClick()">
                            <div class="icon-svg priority-types__item-icon priority-types__item-icon--low"
                                style="min-height: 24px; min-width: 24px;">
                                <PrioritySVG />
                            </div>
                            <span class="submenu__list-item-text submenu__list-item-text--low">Низкий
                                приоритет</span>
                        </div>
                    </div>
                </template>
            </SubMenu>
            <div class="task-project__container">
                <SubMenu>
                    <template #trigger="{ onClick }">
                        <div class="task-project__wrapper" @click="onClick">
                            <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                                <InboxSVG v-if="task.checkTypeIncoming === true" />
                                <UnplacedSvg v-else />
                            </div>
                            <div class="task-project__wrapper-content">
                                <span>{{ task.checkTypeIncoming ? 'Входящие' : 'Без проекта' }}</span>
                            </div>
                        </div>
                        <div @click="taskStore.switchTypeProject(task.taskId, false)" class="icon-svg remove"
                            style="min-height: 24px; min-width: 24px;"
                            :style="{ 'visibility': task.checkTypeIncoming ? 'visible' : 'hidden' }">
                            <RemoveSvg />
                        </div>
                    </template>
                    <template #body="{ onClick }">
                        <div class="project__move">
                            <input placeholder="Куда" type="text" class="project__move-inpt">
                        </div>
                        <div class="project__types">
                            <div class="project__type"
                                @click="taskStore.switchTypeProject(task.taskId, true), onClick()">
                                <div class="project__info">
                                    <div class="icon__wrapper">
                                        <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                                            <InboxSVG />
                                        </div>
                                    </div>
                                    <div class="project__type-title">Входящие</div>
                                </div>
                            </div>
                            <div class="project__type"
                                @click="taskStore.switchTypeProject(task.taskId, false), onClick()">
                                <div class="project__info">
                                    <div class="icon__wrapper">
                                        <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                                            <UnplacedSvg />
                                        </div>
                                    </div>
                                    <div class="project__type-title">Без проекта</div>
                                </div>
                            </div>
                        </div>
                    </template>
                </SubMenu>
            </div>
            <div class="date info" :style="{ 'display': task.checkTypeIncoming ? 'none' : 'block' }">
                <div class="date__container info-container">
                    <div class="date__wrapper value-wrapper">
                        <div class="icon-svg calendar " style="min-height: 24px; min-width: 24px;">
                            <CalendarSVG />
                        </div>
                        <div class="date__content"><span>Дата:</span></div>
                        <div class="date__value">Когда-нибудь</div>
                    </div>
                    <div @click="taskStore.switchTypeProject(task.taskId, true)" class="icon-svg remove"
                        style="min-height: 24px; min-width: 24px;"
                        :style="{ 'visibility': task.checkTypeIncoming ? 'hidden' : 'visible' }">
                        <RemoveSvg />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.task__middle {
    padding-left: 7px;
}

.task-project {
    margin: 20px 4px 6px 0;
}

.task-project:hover .remove {
    display: block;
}

.task-project__container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
}

.task-project__wrapper {
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-sizing: border-box;
    flex-shrink: 0;
    margin-right: 2px;
    padding-right: 4px;
    position: relative;
    max-width: calc(100% - 20px);
    z-index: 10;
}

.task-project__wrapper:hover::before {
    content: "";
    border-radius: 5px;
    bottom: -2px;
    left: -4px;
    position: absolute;
    right: -4px;
    top: -2px;
    background-color: #182137;
}

.inbox {
    color: var(--icon-side-bar-color);
    margin-right: 12px;
    position: relative;
    z-index: 2;
}

.task-project__wrapper-content {
    display: inline-flex;
    flex-shrink: 0;
    padding-right: 1px;
    max-width: calc(100% - 36px);
    z-index: 1;
    overflow: hidden;
    text-overflow: ellipsis;
}

.task-project__wrapper-content span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.remove {
    display: none;
    color: var(--text-gray-color);
    cursor: pointer;
}

.remove:hover {
    color: #fff;
}

/* Блок с выбором даты */
.info {
    margin: 6px 4px 6px 0;
}

.info div {
    z-index: 100;
}


.info-container {
    align-items: center;
    display: flex;
    width: 100%;
    line-height: 14px;
}

.value-wrapper {
    align-items: center;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    margin-right: 2px;
    padding-right: 4px;
    position: relative;
}

.value-wrapper:hover::before {
    content: "";
    border-radius: 5px;
    bottom: -2px;
    left: -4px;
    position: absolute;
    right: -4px;
    top: -2px;
    background-color: #182137;
}

.value-wrapper .icon-svg {
    margin-right: 12px;
}

.date__wrapper .icon-svg {
    color: var(--text-gray-color);
}

.info-content {
    flex-shrink: 0;
    overflow: hidden;
}

.info-content span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.date__value {
    display: inline;
    margin-left: 5px;
    color: var(--icon-side-bar-color);
}

/* Блок с выбором приоритета */

.submenu__list {
    z-index: 100;
}

.priority__content {
    font-weight: 500;
}

.submenu__list-item {
    align-items: center;
    color: #fff;
    display: flex;
    position: relative;
    width: 100%;
    margin-bottom: 8px;
}

.submenu__list-item-text--high {
    font-weight: 700;
}

.submenu__list-item-text--low {
    color: #939db5;
}

.submenu__list-item:hover {
    cursor: pointer;
}

.submenu__list-item:hover::before {
    content: "";
    position: absolute;
    border-radius: 5px;
    bottom: -2px;
    top: -2px;
    left: -3px;
    right: -5px;
    background-color: #182137;
}

.submenu__list-item .icon-svg {
    margin-right: 8px;
    z-index: 10;
}

.submenu__list-item span {
    z-index: 10;
}

.priority-types__item-icon--high {
    color: var(--high-priority-color);
}

.priority-types__item-icon--mid {
    color: var(--text-gray-color);
}

.priority-types__item-icon--low {
    color: #596175;
}

/* Блок с выбором типа проекта */

.project__move {
    margin-bottom: 16px;
    position: relative;
}

.project__move-inpt {
    background: transparent;
    border: 1px solid var(--text-gray-color);
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--cWhite);
    height: 26px;
    line-height: 14px;
    opacity: .5;
    padding: 5px 13px;
    text-align: left;
    width: 100%;
}

.project__type {
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 4px;
    padding: 2px;
    position: relative;
}

.project__info {
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 4px;
    padding: 2px;
    position: relative;
}

.project__type:hover::before {
    content: "";
    position: absolute;
    border-radius: 5px;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-color: #182137;
}

.project__type .icon-wrapper {
    position: relative;
    margin-right: 12px;
}

.project__type-title {
    color: #fff;
    flex-basis: 100%;
    overflow: hidden;
    position: relative;
    text-align: left;
    white-space: nowrap;
    width: 100%;
}

.icon-wrapper .inbox {
    color: var(--icon-side-bar-color);
    margin-right: 12px;
    position: relative;
    z-index: 2;
}
</style>