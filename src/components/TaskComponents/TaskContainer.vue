<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../../stores/taskStore';
import Task from './Task.vue';

const props = defineProps<{
    typeProjectIncoming: boolean
}>()

const taskStore = useTaskStore();
const clickedTask = ref<null | number>(null);
const showedTask = ref<number>(0);

const onClickTaskHandler = (taskId: number) => {
    clickedTask.value = taskId;
}

const onDblClickTaskHandler = (taskId: number) => {
    showedTask.value = taskId;
    taskStore.activeTask = showedTask.value;
}

</script>
<template>
    <div v-for="task in taskStore.taskList.values()" :key="task.taskId">
        <Task :isSelected="clickedTask === task.taskId"
            :isShowed="showedTask === task.taskId || taskStore.activeTask === task.taskId" :taskData=task
            :typeIncoming=typeProjectIncoming @onClickTask="onClickTaskHandler"
            @onDblClickTask="onDblClickTaskHandler" />
    </div>
</template>
<style scoped></style>