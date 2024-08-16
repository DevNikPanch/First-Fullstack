<script setup lang="ts">
import EditorJS from '@editorjs/editorjs';
import { ref } from 'vue';
import TaskMiddlePart from './TaskMiddlePart.vue';

const props = defineProps<{
    counter: number,
    typeIncoming: boolean
}>()

// Флаг для проверки на открытие таски
const isOpenTask = ref(true);

// Флаг для проверки выбора элемента
const isSelected = ref(false);

// Флаг для проверки на первое открытие
const isFirstOpen = ref(true);

// Флаг для проверки открытия видов типов
const isOpenTypeKinds = ref(false);

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

function showTask(show: boolean) {

    if (isFirstOpen.value) {
        isFirstOpen.value = false;
        return;
    }

    if (show === true) {
        isSelected.value = false;
    }

    isOpenTask.value = show;
}

function showSelected(show: boolean) {
    if (isOpenTask.value === true) {
        isSelected.value = false;
        return;
    }
    isSelected.value = show;
}

</script>
<template>
    <div class="task" :class="{ 'selected': isSelected }" @click="showSelected(true)" @dblclick="showTask(true)"
        v-click-in-element="{
            onUnActive: () => { showTask(false); showSelected(false); }
        }">
        <div class="task__container">
            <div class="task__wrapper" :style="{ 'background': isOpenTask ? '#1c283e' : 'none' }">
                <div class="task__form">
                    <div class="task__header">
                        <div class="check-icon" style="min-height: 24px; min-width: 24px;">
                            <div class="check-border">
                                <div class="icon-svg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" class="injected-svg"
                                            data-src="resources/icons/check_empty_24.svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="task__title">
                            <div :id="`editorjsTitle-${props.counter}`" class="task__title-wrapper-input">
                            </div>
                        </div>
                        <div class="task__note" :style="{ 'display': isOpenTask ? 'block' : 'none' }">
                            <div :id="`editorjsSubTitle-${props.counter}`" class="task__title-wrapper-input"></div>
                        </div>
                    </div>
                    <TaskMiddlePart :typeIncoming="typeIncoming" :isOpenTask="isOpenTask"
                        :isOpenTypeKinds="isOpenTypeKinds" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
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
</style>