import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { TaskList } from '../types/taskData.types';

export const useTaskStore = defineStore('taskStore', () => {
    // Счётчики для рендеринга задач в каждом отдельном блоке
    const countTasks = ref(0);

    const taskList: TaskList = reactive(new Map());

    const activeTask = ref<number>(0);

    // const expiredTasks = computed(() => {
    //     // TODO filtering current task list by date and date now for get expired tasks
    //     return new Map()
    // } );
    // Функция добавления компонента "Task" в различные блоки
    const addTask = () => {
        countTasks.value = countTasks.value + 1;
        taskList.set(countTasks.value, {
            taskId: countTasks.value,
            isCheckTask: false,
            checkTypeIncoming: true,
            isHighPriority: false,
            isMidPriority: true,
            isLowPriority: false,
        });

        activeTask.value = countTasks.value;

        return countTasks.value;
    };

    function checkTask(taskId: number) {
        const taskData = taskList.get(taskId);
        if (taskData === undefined) return;

        taskList.set(taskId, {
            ...taskData,
            isCheckTask: !taskData?.isCheckTask,
        });
    }

    // Функция смена типа проекта
    function switchTypeProject(taskId: number, switcher: boolean) {
        const taskData = taskList.get(taskId);
        if (taskData === undefined) return;

        taskList.set(taskId, {
            ...taskData,
            checkTypeIncoming: switcher,
        });
    }

    function setHighPriority(taskId: number) {
        const taskData = taskList.get(taskId);
        if (taskData === undefined) return;

        taskList.set(taskId, {
            ...taskData,
            isHighPriority: true,
            isMidPriority: false,
            isLowPriority: false,
        });
    }

    function setMidPriority(taskId: number) {
        const taskData = taskList.get(taskId);
        if (taskData === undefined) return;

        taskList.set(taskId, {
            ...taskData,
            isHighPriority: false,
            isMidPriority: true,
            isLowPriority: false,
        });
    }

    function setLowPriority(taskId: number) {
        const taskData = taskList.get(taskId);
        if (taskData === undefined) return;

        debugger;

        taskList.set(taskId, {
            ...taskData,
            isHighPriority: false,
            isMidPriority: false,
            isLowPriority: true,
        });
    }

    return {
        addTask,
        taskList,
        countTasks,
        activeTask,
        checkTask,
        switchTypeProject,
        setHighPriority,
        setMidPriority,
        setLowPriority,
    };
});
