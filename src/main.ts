import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import MainRouterIncoming from './components/MainRouterIncoming.vue';

// Маршруты
const routes = [
    { path: '/', component: MainRouterIncoming },
    { path: '/today', component: () => import('./components/MainRouterToday.vue') },
    {
        path: '/plans',
        component: () => import('./components/MainRouterPlans.vue'),
    },
];

// Создание роутера
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// Генерация корневого VUE файла
createApp(App).use(router).mount('#app');
