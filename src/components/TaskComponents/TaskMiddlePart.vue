<script setup lang="ts">

import InboxSVG from '../SvgComponents/InboxSVG.vue';
import UnplacedSvg from '../SvgComponents/UnplacedSvg.vue';
import RemoveSvg from '../SvgComponents/RemoveSvg.vue';
import CalendarSVG from '../SvgComponents/CalendarSVG.vue';
import TaskProject from './TaskProject.vue';
import { useTaskStore } from '../../stores/taskStore';
import { TaskData } from '../../types/taskData.types';

const props = defineProps<{
    task: TaskData,
}>()

const taskStore = useTaskStore();


</script>

<template>
    <div class="task__middle" :style="{ 'display': props.task.isOpenTask ? 'block' : 'none' }">
        <div class=" task-project">
            <div class="task-project__container">
                <div v-if="props.task.checkTypeIncoming === true" class="task-project__wrapper" v-click-in-element="{
                    onActive: () => taskStore.showTypesKinds(props.task.taskId, true), onUnActive: () => taskStore.showTypesKinds(props.task.taskId, false)
                }">
                    <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                        <InboxSVG />
                    </div>
                    <div class="task-project__wrapper-content">
                        <span>Входящие</span>
                    </div>
                </div>
                <div v-else class="task-project__wrapper" v-click-in-element="{
                    onActive: () => taskStore.showTypesKinds(props.task.taskId, true), onUnActive: () => taskStore.showTypesKinds(props.task.taskId, false)
                }">
                    <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                        <UnplacedSvg />
                    </div>
                    <div class="task-project__wrapper-content">
                        <span>Без проекта</span>
                    </div>
                </div>
                <div @click="taskStore.switchTypeProject(props.task.taskId, false)" class="icon-svg remove"
                    style="min-height: 24px; min-width: 24px;"
                    :style="{ 'visibility': props.task.checkTypeIncoming ? 'visible' : 'hidden' }">
                    <RemoveSvg />
                </div>
                <TaskProject :counter="props.task.taskId"
                    :style="{ 'display': props.task.checkOpenTypeKinds ? 'block' : 'none' }" />
            </div>
            <div class="date" :style="{ 'display': props.task.checkTypeIncoming ? 'none' : 'block' }">
                <div class="date__container">
                    <div class="date__wrapper">
                        <div class="icon-svg calendar " style="min-height: 24px; min-width: 24px;">
                            <CalendarSVG />
                        </div>
                        <div class="date__content">
                            <span>Дата:</span>
                        </div>
                        <div class="date__value">Когда-нибудь</div>
                    </div>
                    <div @click="taskStore.switchTypeProject(props.task.taskId, true)" class="icon-svg remove"
                        style="min-height: 24px; min-width: 24px;"
                        :style="{ 'visibility': props.task.checkTypeIncoming ? 'hidden' : 'visible' }">
                        <RemoveSvg />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
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
.date {
    margin: 6px 4px 6px 0;
}

.date div {
    z-index: 1;
}


.date__container {
    align-items: center;
    display: flex;
    width: 100%;
    line-height: 14px;
}

.date__wrapper {
    align-items: center;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    margin-right: 2px;
    padding-right: 4px;
    position: relative;
}

.date__wrapper:hover::before {
    content: "";
    border-radius: 5px;
    bottom: -2px;
    left: -4px;
    position: absolute;
    right: -4px;
    top: -2px;
    background-color: #182137;
}

.date__wrapper .icon-svg {
    color: var(--text-gray-color);
    margin-right: 12px;
}

.date__content {
    flex-shrink: 0;
    overflow: hidden;
}

.date__content span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.date__value {
    display: inline;
    margin-left: 5px;
    color: var(--icon-side-bar-color);
}
</style>