import { defineStore } from 'pinia';

export const useSideBarStore = defineStore('sideBarStore', () => {
    const burgerSubMenuItems: string[] = [
        'Файл',
        'Правка',
        'Перейти в раздел',
        'Вид',
        'Задачи',
        'Справка',
    ];
    return {
        burgerSubMenuItems,
    };
});
