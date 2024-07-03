<script setup lang="ts">
import { showActiveItem } from '../helpers/showActiveItem'

</script>
<template>
    <div class="menu-header">
        <div class="menu-header__item">
            <div class="menu-header__item-up">
                <img src="../../images/sing-logo.png" alt="Logo" class="menu-header__item-logo">
                <div class="menu-header__item-title">Singularity App</div>
            </div>
            <div class="menu-header__item-burger" style="position: relative;">
                <div class="top-menu-burger">
                    <div class="icon-svg more " style="min-height: 24px; min-width: 24px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" class="injected-svg" data-src="resources/icons/more_24.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10ZM19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="menu-down">
        <ul class="list">
            <li @click="showActiveItem">
                <router-link to="/" class="list__item">
                    <div class="list__item-info">
                        <div class="list__item-img">
                            <div class="icon-svg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        class="injected-svg" data-src="resources/icons/inbox_24.svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                                            d="M21 19H3C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19Z">
                                        </path>
                                        <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                                            d="M5 6C5.55228 6 6 6.44772 6 7C6 7.55228 5.55228 8 5 8H4V15L5.98284 15.0001C5.98855 15 5.99427 15 6 15H20V8H19C18.4477 8 18 7.55228 18 7C18 6.44772 18.4477 6 19 6H21C21.5523 6 22 6.44772 22 7V20C22 20.5523 21.5523 21 21 21C20.4477 21 20 20.5523 20 20V17L6.01716 16.9999C6.01145 17 6.00573 17 6 17H4V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20V7C2 6.44772 2.44772 6 3 6H5ZM12 3C12.5523 3 13 3.44772 13 4V10L14.1213 8.87868C14.5118 8.48815 15.145 8.48815 15.5355 8.87868C15.9261 9.2692 15.9261 9.90237 15.5355 10.2929L12.7071 13.1213C12.5569 13.2715 12.3708 13.364 12.1764 13.3986L12.059 13.4125H11.941C11.7051 13.3986 11.4731 13.3016 11.2929 13.1213L8.46447 10.2929C8.07394 9.90237 8.07394 9.2692 8.46447 8.87868C8.85499 8.48815 9.48815 8.48815 9.87868 8.87868L11 10V4C11 3.44772 11.4477 3 12 3Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <span class="list__item-text">Входящие</span>
                    </div>
                    <div class="list__item-count">0</div>
                </router-link>
            </li>
            <li @click="showActiveItem">
                <router-link to="/today" class="list__item">
                    <div class="list__item-info">
                        <div class="list__item-img">
                            <div class="icon-svg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0.5 24 24"
                                        fill="none" class="injected-svg" data-src="resources/icons/star_24.svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path fill="currentColor"
                                            d="M9.12647 8.46088L3.04787 8.46171L2.92918 8.46777C2.003 8.56364 1.64625 9.77342 2.43313 10.3414L7.35058 13.891L5.47256 19.6351L5.44262 19.7448C5.24389 20.6516 6.29385 21.3657 7.08199 20.7968L11.9995 17.2461L16.918 20.7968L17.0137 20.859C17.8204 21.327 18.8285 20.5556 18.5274 19.6351L16.6484 13.891L21.5669 10.3414L21.6593 10.2672C22.3519 9.64877 21.9248 8.46171 20.9521 8.46171L14.8725 8.46088L12.9947 2.71798C12.6816 1.76067 11.3184 1.76067 11.0053 2.71798L9.12647 8.46088ZM11.9995 6.40042L13.1186 9.82186L13.1631 9.93508C13.3321 10.3003 13.7014 10.5398 14.1133 10.5398L17.734 10.539L14.8046 12.6538L14.7011 12.7391C14.4103 13.0118 14.2987 13.4302 14.4247 13.8155L15.5429 17.2347L12.6147 15.122L12.5011 15.0505C12.1502 14.86 11.7152 14.8838 11.3853 15.122L8.45607 17.2347L9.57531 13.8155L9.60859 13.6861C9.68252 13.2956 9.52529 12.8919 9.19538 12.6538L6.26497 10.539L9.88671 10.5398C10.3398 10.5398 10.7414 10.25 10.8814 9.82186L11.9995 6.40042Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <span class="list__item-text">Сегодня</span>
                    </div>
                    <div class="list__item-count">0</div>
                </router-link>
            </li>
            <li @click="showActiveItem">
                <router-link to="/plans" class="list__item">
                    <div class="list__item-info">
                        <div class="list__item-img">
                            <div class="icon-svg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" class="injected-svg" data-src="resources/icons/calendar_24.svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path
                                            d="M7 4V5H17V4C17 3.44772 17.4477 3 18 3C18.5523 3 19 3.44772 19 4V5H20C20.5523 5 21 5.44772 21 6V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V6C3 5.44772 3.44772 5 4 5H5V4C5 3.44772 5.44772 3 6 3C6.55228 3 7 3.44772 7 4ZM18.7 7H5.3C5.13431 7 5 7.13431 5 7.3V18.7C5 18.8657 5.13431 19 5.3 19H18.7C18.8657 19 19 18.8657 19 18.7V7.3C19 7.13431 18.8657 7 18.7 7ZM17 9.5V10.5C17 10.7761 16.7761 11 16.5 11H15.5C15.2239 11 15 10.7761 15 10.5V9.5C15 9.22386 15.2239 9 15.5 9H16.5C16.7761 9 17 9.22386 17 9.5ZM13 9.5V10.5C13 10.7761 12.7761 11 12.5 11H11.5C11.2239 11 11 10.7761 11 10.5V9.5C11 9.22386 11.2239 9 11.5 9H12.5C12.7761 9 13 9.22386 13 9.5ZM9 9.5V10.5C9 10.7761 8.77614 11 8.5 11H7.5C7.22386 11 7 10.7761 7 10.5V9.5C7 9.22386 7.22386 9 7.5 9H8.5C8.77614 9 9 9.22386 9 9.5ZM17 12.5V13.5C17 13.7761 16.7761 14 16.5 14H15.5C15.2239 14 15 13.7761 15 13.5V12.5C15 12.2239 15.2239 12 15.5 12H16.5C16.7761 12 17 12.2239 17 12.5ZM13 12.5V13.5C13 13.7761 12.7761 14 12.5 14H11.5C11.2239 14 11 13.7761 11 13.5V12.5C11 12.2239 11.2239 12 11.5 12H12.5C12.7761 12 13 12.2239 13 12.5ZM9 12.5V13.5C9 13.7761 8.77614 14 8.5 14H7.5C7.22386 14 7 13.7761 7 13.5V12.5C7 12.2239 7.22386 12 7.5 12H8.5C8.77614 12 9 12.2239 9 12.5ZM17 15.5V16.5C17 16.7761 16.7761 17 16.5 17H15.5C15.2239 17 15 16.7761 15 16.5V15.5C15 15.2239 15.2239 15 15.5 15H16.5C16.7761 15 17 15.2239 17 15.5ZM13 15.5V16.5C13 16.7761 12.7761 17 12.5 17H11.5C11.2239 17 11 16.7761 11 16.5V15.5C11 15.2239 11.2239 15 11.5 15H12.5C12.7761 15 13 15.2239 13 15.5ZM9 15.5V16.5C9 16.7761 8.77614 17 8.5 17H7.5C7.22386 17 7 16.7761 7 16.5V15.5C7 15.2239 7.22386 15 7.5 15H8.5C8.77614 15 9 15.2239 9 15.5Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <span class="list__item-text">Планы</span>
                    </div>
                </router-link>
            </li>
            <li @click="showActiveItem">
                <router-link to="/" class="list__item">
                    <div class="list__item-info">
                        <div class="list__item-img">
                            <div class="icon-svg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" class="injected-svg" data-src="resources/icons/scheduler_24.svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M15 9C18.866 9 22 12.134 22 16C22 19.866 18.866 23 15 23C11.134 23 8 19.866 8 16C8 12.134 11.134 9 15 9ZM15 11C12.2386 11 10 13.2386 10 16C10 18.7614 12.2386 21 15 21C17.7614 21 20 18.7614 20 16C20 13.2386 17.7614 11 15 11ZM18 1C18.5523 1 19 1.44772 19 2V3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 20.5523 9 20 9C19.4477 9 19 8.55228 19 8V5H5V17H6C6.55228 17 7 17.4477 7 18C7 18.5523 6.55228 19 6 19H4C3.44772 19 3 18.5523 3 18V4C3 3.44772 3.44772 3 4 3H5V2C5 1.44772 5.44772 1 6 1C6.55228 1 7 1.44772 7 2V3H17V2C17 1.44772 17.4477 1 18 1ZM15 12C15.5523 12 16 12.4477 16 13V15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H15C14.4477 17 14 16.5523 14 16V13C14 12.4477 14.4477 12 15 12Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <span class="list__item-text">Календарь</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.menu-header {
    height: 30px;
    display: flex;
    line-height: 16px;
}

.menu-header__item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 18px;
}

.menu-header__item-up {
    display: flex;
    align-items: center;
    gap: 5px;
}

.menu-header__item-burger {
    display: flex;
    align-items: center;
}

.burger {
    width: 30px;
    height: 30px;
    padding: 6px 0 0 0;
}

/* Список верхнего меню SideBar */

.menu-down {
    padding: 8px 12px 12px;
}

.list {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 6px;
}

.list__item {
    position: relative;
    height: 24px;
    padding: 2px 6px 2px 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
}

.list__item:hover::before {
    content: "";
    border-radius: 5px;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #12284591;
}

.list__item-info {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
}

.list__item-img {
    align-items: center;
    color: var(--icon-side-bar-color);
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    position: relative;
    z-index: 1;
}

.list__item-count {
    color: #76899b;
}
</style>