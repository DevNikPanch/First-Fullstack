<script setup lang="ts">
import EditorJS from '@editorjs/editorjs';;
import TaskMiddlePart from './TaskMiddlePart.vue';
import TaskFooter from './TaskFooter.vue';
import CheckEmptySVG from './TaskSVG/CheckEmptySVG.vue';
import CheckDoneSVG from './TaskSVG/CheckDoneSVG.vue';
import { useTaskStore } from '../../stores/taskStore';
import { computed } from 'vue';


const props = defineProps<{
    counter: number,
    typeIncoming: boolean
}>()

const taskStore = useTaskStore();

const taskData = computed(() => {
    return taskStore.taskList.get(props.counter)
});

const editorTitle = new EditorJS({
    holder: `editorjsTitle-${props.counter}`,
    placeholder: 'Новая задача',
    minHeight: 0,
    autofocus: true,
    readOnly: false
})

const editorSubTitle = new EditorJS({
    holder: `editorjsSubTitle-${props.counter}`,
    placeholder: 'Заметка',
    minHeight: 0,
    autofocus: false,
    readOnly: false
})

</script>
<template>
    <div class="task" :class="{ 'selected': taskData?.isSelected }" @dblclick="taskStore.showTask(props.counter, true)"
        v-click-in-element="{
            onActive: () => taskStore.showSelected(props.counter, true),
            onUnActive: () => { taskStore.showTask(props.counter, false); taskStore.showSelected(props.counter, false); }
        }">
        <div class="task__container">
            <div class=" task__wrapper" :style="{ 'background': taskData?.isOpenTask ? '#1c283e' : 'none' }">
                <div class="task__form">
                    <div class="task__header">
                        <div class="check-icon" style="min-height: 24px; min-width: 24px;">
                            <div class="check-border" @click="taskStore.checkTask(props.counter)">
                                <div class="icon-svg">
                                    <CheckEmptySVG />
                                </div>
                            </div>
                            <div class="check-inner-elem">
                                <div class="icon-svg check-done" @click="taskStore.checkTask(props.counter)"
                                    style="min-height: 24px; min-width: 24px;"
                                    :style="{ 'display': taskData?.isCheckTask ? 'flex' : 'none' }">
                                    <CheckDoneSVG />
                                </div>
                            </div>
                        </div>
                        <div class="task__title">
                            <div :id="`editorjsTitle-${props.counter}`" class="task__title-wrapper-input">
                            </div>
                        </div>
                        <div class="task__note" :style="{ 'display': taskData?.isOpenTask ? 'block' : 'none' }">
                            <div :id="`editorjsSubTitle-${props.counter}`" class="task__title-wrapper-input"></div>
                        </div>
                    </div>
                    <TaskMiddlePart :task="taskData!" />
                    <TaskFooter :task="taskData!" :style="{ 'display': taskData?.isOpenTask ? 'block' : 'none' }" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* Модификатор */
.selected::after {
    border-radius: 5px;
    bottom: 0;
    content: "";
    left: -4px;
    position: absolute;
    right: -6px;
    top: 0;
    background-color: #1d2b4d;
}

.task {
    position: relative;
}

.task:hover::before {
    border-radius: 5px;
    bottom: 0;
    content: "";
    left: -4px;
    position: absolute;
    right: -6px;
    top: 0;
    background-color: #12284591;
}

.task__container {
    position: relative;
    min-height: 24px;
    margin: 2px 0;
}

.task__wrapper {
    border-radius: 5px;
    margin: 0 -4px;
    padding: 4px 8px 8px 33px;
    box-sizing: border-box;
}

.task__form {
    margin-left: -7px;
}

.task__header {
    padding-left: 9px;
    position: relative;
    z-index: 1;
}

.task__header .check-icon {
    position: absolute;
    left: -22px;
    margin-right: 5px;
    color: var(--text-gray-color);
    flex-grow: 0;
    flex-shrink: 0;
    cursor: pointer;
}

.task__title {
    width: 100%;
    color: var(--text-gray-color);
    z-index: 1;
    line-height: 18px;
    padding-top: 1px;
}

.task__header input {
    width: 100%;
    white-space: pre-wrap;
    word-break: break-all;
    background: #1c283e;
    border: none;
}

.task__header input::placeholder {
    color: var(--text-gray-color);
}

.task__title-wrapper-input {
    color: #fff;
    white-space: pre-line;
}

.task__note {
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .03em;
    line-height: 16px;
    margin-top: 18px;
    position: relative;
}

.task__note-input {
    letter-spacing: .03em;
    color: #babfc5;
    line-height: 1.42;
}

.task__note-input::placeholder {
    font-size: 12px;
}

.check-inner-elem {
    align-items: center;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
}

.check-inner-elem .icon-svg {
    display: none;
}
</style>