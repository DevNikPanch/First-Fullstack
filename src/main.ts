import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import MainRouterIncoming from './components/MainRouterIncoming.vue';
import { Directive } from 'vue';

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
const app = createApp(App);

app.directive('click-outside', {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = (event: MouseEvent) => {
            // here I check that click was outside the el and his children
            if (!(el == event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                binding.value(event);
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted: (el) => {
        document.removeEventListener('click', el.clickOutsideEvent);
    },
});
app.use(router);

app.mount('#app');
