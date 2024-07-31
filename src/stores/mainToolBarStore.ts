import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainToolBarStore = defineStore('mainToolBarStore', () => {
    const countTask = ref(0);

    const addTask = () => {
        countTask.value = countTask.value + 1;
        return countTask.value;
    };

    return { countTask, addTask };
});
