import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainToolBarStore = defineStore('mainToolBarStore', () => {
    // Счётчики для рендеринга задач в каждом отдельном блоке
    const countTaskIncoming = ref(0);
    const countTaskToday = ref(0);

    // Параметр для выбора счётчика
    const setOption = ref('');

    // Функция добавления компонента "Task" в различные блоки
    const addTask = () => {
        if (setOption.value == 'Incoming') {
            countTaskIncoming.value = countTaskIncoming.value + 1;
            return countTaskIncoming.value;
        } else if (setOption.value == 'Today') {
            countTaskToday.value = countTaskToday.value + 1;
            return countTaskToday.value;
        }
    };

    return { countTaskIncoming, countTaskToday, setOption, addTask };
});
