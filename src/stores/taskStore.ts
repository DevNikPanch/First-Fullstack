import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { TaskList } from '../types/taskData.types';

export const useTaskStore = defineStore('taskStore', () => {
    // Счётчики для рендеринга задач в каждом отдельном блоке
    const countTasks = ref(0);

    const taskList: TaskList = reactive(new Map());

    // const expiredTasks = computed(() => {
    //     // TODO filtering current task list by date and date now for get expired tasks
    //     return new Map()
    // } );
    // Функция добавления компонента "Task" в различные блоки
    const addTask = () => {
        countTasks.value = countTasks.value + 1;
        taskList.set(countTasks.value, {
            taskId: countTasks.value,

            isOpenTask: true,
            isSelected: false,
            isFirstOpen: true,
            isCheckTask: false,
            checkTypeIncoming: true,
            checkOpenTypeKinds: false,
            isOpenTypeKindsFooter: false,
        });
        return countTasks.value;
    };

    function showTask(taskId: number, show: boolean) {
        const taskData = taskList.get(taskId);
        if (taskData === undefined) return;

        taskList.set(taskId, {
            ...taskData,
            isFirstOpen: taskData.isFirstOpen ? false : taskData.isFirstOpen,
            isSelected: show ? false : taskData.isSelected,
            isOpenTask: show,
        });
    }

    function showSelected(taskId: number, show: boolean) {
        const taskData = taskList.get(taskId);
        if (taskData === undefined) return;

        if (taskData.isOpenTask === true) {
            taskList.set(taskId, {
                ...taskData,
                isSelected: false,
            });
            return;
        }

        taskList.set(taskId, {
            ...taskData,
            isSelected: show,
        });
    }

    function checkTask(taskId: number) {
        const taskData = taskList.get(taskId);
        if (taskData === undefined) return;

        taskList.set(taskId, {
            ...taskData,
            isCheckTask: !taskData?.isCheckTask,
        });
    }

    // Функция открытия и закрытия выбора типов
    function showTypesKinds(taskId: number, show: boolean) {
        const taskData = taskList.get(taskId);
        if (taskData === undefined) return;

        taskList.set(taskId, {
            ...taskData,
            checkOpenTypeKinds: show,
        });
    }

    // Функция открытия и закрытия выбора типов подвала таски
    function showTypesKindsFooter(taskId: number, show: boolean) {
        const taskData = taskList.get(taskId);
        if (taskData === undefined) return;

        debugger;

        taskList.set(taskId, {
            ...taskData,
            isOpenTypeKindsFooter: show,
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

    return {
        addTask,
        taskList,
        countTasks,
        showTask,
        showSelected,
        checkTask,
        showTypesKinds,
        showTypesKindsFooter,
        switchTypeProject,
    };
});
