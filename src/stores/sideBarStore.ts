import { defineStore } from 'pinia';
import { SidebarItems } from '../types/sideBarItems';

export const useSideBarStore = defineStore('sideBarStore', () => {
    const burgerSubMenuItems: string[] = [
        'Файл',
        'Правка',
        'Перейти в раздел',
        'Вид',
        'Задачи',
        'Справка',
    ];

    const upMenuItems: SidebarItems = [
        {
            name: 'Входящие',
            link: '/',
            counter: true,
            count: 0,
        },
        {
            name: 'Сегодня',
            link: '/today',
            counter: true,
            count: 0,
        },
        {
            name: 'Планы',
            counter: false,
            link: '/plans',
        },
    ];

    return {
        burgerSubMenuItems,
        upMenuItems,
    };
});
