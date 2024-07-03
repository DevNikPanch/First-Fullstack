<script setup lang="ts"></script>

<template>
    <div class="today">
        <div class="today__container">
            <div class="router-header">
                <div class="router-header__container">
                    <div class="router-header__title">
                        <div class="router-header__title-img">
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
                        <div class="router-header__title-text">Планы</div>
                    </div>
                    <div class="router-header__burger">
                        <div class="router-header__burger-btn-wrp hover-item">
                            <div class="router-header__burger-btn-sort hover-help-info" id="burger-filter">
                                <div class="icon-svg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" class="injected-svg"
                                            data-src="resources/icons/sort_1_24.svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M18 17C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17H18ZM16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H16ZM20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H6C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5H20Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="today-navigation">
                <div class="today-navigation__container">
                    <div class="today-navigation__container-flex">
                        <div class="today-navigation__menu">
                            <div class="today-navigation__tabs">
                                <div class="today-navigation__tabs-wrapper today-navigation__tabs-selector">
                                    <div class="icon-svg checklist">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" class="injected-svg"
                                                data-src="resources/icons/checklist_24.svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <path
                                                    d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7C4.55228 7 5 6.55228 5 6C5 5.44772 4.55228 5 4 5Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M20 5H9C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M20 11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18C5 17.4477 4.55228 17 4 17Z"
                                                    fill="currentColor"></path>
                                                <path
                                                    d="M20 17H9C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17Z"
                                                    fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="today-navigation__tabs-wrapper today-navigation__tabs-today non-active">
                                    <div class="icon-svg star">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0.5 24 24" fill="none" class="injected-svg"
                                                data-src="resources/icons/star_24.svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <path fill="currentColor"
                                                    d="M9.12647 8.46088L3.04787 8.46171L2.92918 8.46777C2.003 8.56364 1.64625 9.77342 2.43313 10.3414L7.35058 13.891L5.47256 19.6351L5.44262 19.7448C5.24389 20.6516 6.29385 21.3657 7.08199 20.7968L11.9995 17.2461L16.918 20.7968L17.0137 20.859C17.8204 21.327 18.8285 20.5556 18.5274 19.6351L16.6484 13.891L21.5669 10.3414L21.6593 10.2672C22.3519 9.64877 21.9248 8.46171 20.9521 8.46171L14.8725 8.46088L12.9947 2.71798C12.6816 1.76067 11.3184 1.76067 11.0053 2.71798L9.12647 8.46088ZM11.9995 6.40042L13.1186 9.82186L13.1631 9.93508C13.3321 10.3003 13.7014 10.5398 14.1133 10.5398L17.734 10.539L14.8046 12.6538L14.7011 12.7391C14.4103 13.0118 14.2987 13.4302 14.4247 13.8155L15.5429 17.2347L12.6147 15.122L12.5011 15.0505C12.1502 14.86 11.7152 14.8838 11.3853 15.122L8.45607 17.2347L9.57531 13.8155L9.60859 13.6861C9.68252 13.2956 9.52529 12.8919 9.19538 12.6538L6.26497 10.539L9.88671 10.5398C10.3398 10.5398 10.7414 10.25 10.8814 9.82186L11.9995 6.40042Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="today-navigation__dates">
                                <div class="today-navigation__wrapper">
                                    <div class="today-navigation__wrapper-inner">
                                        <div class="today-navigation__wrapper-data">
                                            <div class="today-navigation__wrapper-data-type">пт.
                                                <p class="today-navigation__wrapper-data-number">28</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="today-navigation__wrapper">
                                    <div class="today-navigation__wrapper-inner">
                                        <div class="today-navigation__wrapper-data">
                                            <div class="today-navigation__wrapper-data-type">сб.
                                                <p class="today-navigation__wrapper-data-number">29</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="today-navigation__wrapper">
                                    <div class="today-navigation__wrapper-inner">
                                        <div class="today-navigation__wrapper-data">
                                            <div class="today-navigation__wrapper-data-type">вс.
                                                <p class="today-navigation__wrapper-data-number">30</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="today-navigation__wrapper">
                                    <div class="today-navigation__wrapper-inner">
                                        <div class="today-navigation__wrapper-data">
                                            <div class="today-navigation__wrapper-data-type">пн.
                                                <p class="today-navigation__wrapper-data-number">1</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="today-navigation__wrapper">
                                    <div class="today-navigation__wrapper-inner">
                                        <div class="today-navigation__wrapper-data">
                                            <div class="today-navigation__wrapper-data-type">вт.
                                                <p class="today-navigation__wrapper-data-number">2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="today-navigation__wrapper">
                                    <div class="today-navigation__wrapper-inner">
                                        <div class="today-navigation__wrapper-data">
                                            <div class="today-navigation__wrapper-data-type">ср.
                                                <p class="today-navigation__wrapper-data-number">3</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="today-navigation__wrapper">
                                    <div class="today-navigation__wrapper-inner">
                                        <div class="today-navigation__wrapper-data">
                                            <div class="today-navigation__wrapper-data-type">чт.
                                                <p class="today-navigation__wrapper-data-number">4</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="today-navigation__switcher">
                            <div class="today-navigation__switcher-wrapper today-navigation__switcher-left-arrow">
                                <div class="icon-svg" style="min-height: 16px; min-width: 16px;">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none" class="injected-svg"
                                            data-src="resources/icons/arrow_left_16.svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9.2929 3.05025C9.68342 2.65973 10.3166 2.65973 10.7071 3.05025C11.0976 3.44078 11.0976 4.07394 10.7071 4.46447L7.17158 8L10.7071 11.5355C11.0976 11.9261 11.0976 12.5592 10.7071 12.9497C10.3166 13.3403 9.68342 13.3403 9.2929 12.9497L5.05026 8.70711C4.68763 8.34448 4.66173 7.77263 4.97255 7.38011L5.05026 7.29289L9.2929 3.05025Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="today-navigation__switcher-wrapper today-navigation__switcher-right-arrow">
                                <div class="icon-svg" style="min-height: 16px; min-width: 16px;">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none" class="injected-svg"
                                            data-src="resources/icons/arrow_left_16.svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9.2929 3.05025C9.68342 2.65973 10.3166 2.65973 10.7071 3.05025C11.0976 3.44078 11.0976 4.07394 10.7071 4.46447L7.17158 8L10.7071 11.5355C11.0976 11.9261 11.0976 12.5592 10.7071 12.9497C10.3166 13.3403 9.68342 13.3403 9.2929 12.9497L5.05026 8.70711C4.68763 8.34448 4.66173 7.77263 4.97255 7.38011L5.05026 7.29289L9.2929 3.05025Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="today-navigation__main">
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                    <div class="today-navigation__main-item hover-item">
                        <div class="icon-wrapper"></div>
                        <div class="today-navigation__main-item-text">28
                            <i>Пятница,
                                <p>Сегодня</p>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.today {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.today-navigation__container {
    display: flex;
    margin-bottom: 8px;
    margin-left: -4px;
    margin-top: 8px;
    padding: 0 20px 0 52px;
    transition: opacity .1s linear;
}

.today-navigation__container-flex {
    display: flex;
    flex-grow: 1;
}

/* Шапка основного окна */

.router-header__container {
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 0;
    padding: 0 0 0 16px;
}

.router-header__title {
    display: flex;
    align-items: center;
}

.router-header__title-img {
    padding-bottom: 0;
    color: var(--text-gray-color);
    padding-right: 14px;
}

.router-header__title-text {
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
}

.router-header__burger {
    position: relative;
    align-items: center;
    display: flex;
    height: 32px;
    margin: 0;
    margin-left: 6px;
    padding-left: 5px;
}

.router-header__burger-btn-wrp {
    padding: 3px;
    border-radius: 5px;
    margin-right: 13px;
}

.router-header__burger-btn-sort {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    color: var(--text-gray-color);
    position: relative;
}

#burger-filter:hover::before {
    content: "Пользовательская сортировка";
}

/* Основной контент блока "Планы" */
.today-navigation {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
}

.today-navigation__menu {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: start;
}

.today-navigation__menu:first-child::before {
    background-color: var(--icon-side-bar-color);
    border-bottom: 1px solid rgba(57, 59, 70, .5);
    bottom: 0;
    content: "";
    left: 0;
    opacity: 1;
    position: absolute;
    right: 0;
}

.today-navigation__tabs {
    display: inline-flex;
}

.today-navigation__tabs-wrapper {
    cursor: pointer;
    display: inline-flex;
    height: 40px;
    position: relative;
    transition: color .1s linear;
    width: 36px;
}

.today-navigation__tabs-wrapper .icon-svg {
    padding-left: 4px;
}

.today-navigation__tabs-wrapper .star {
    margin: 0 auto;
    padding-left: 0;
}

.today-navigation__dates {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.today-navigation__wrapper {
    height: 43px;
    min-width: 43px;
    width: 14.25%;
}

.today-navigation__wrapper-inner {
    height: 40px;
    min-width: 40px;
    width: 100%;
}

.today-navigation__wrapper-data {
    cursor: pointer;
    display: flex;
    height: inherit;
    justify-content: center;
    position: relative;
    width: 100%;
}

.today-navigation__wrapper-data-type {
    color: var(--text-gray-color);
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    transition: color .1s linear;
}

.today-navigation__wrapper-data-number {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    margin-left: 4px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.today-navigation__wrapper:hover {
    color: #fff;
}

.today-navigation__switcher {
    display: flex;
    justify-content: start;
    position: relative;
}

.today-navigation__switcher-wrapper {
    color: var(--icon-side-bar-color);
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
}

.today-navigation__switcher-left-arrow {
    margin-left: 6px;
    margin-right: 6px;
    color: var(--text-gray-color);
    pointer-events: none;
}

.today-navigation__switcher-right-arrow {
    margin-left: 8px;
    transform: rotate(180deg);
}

.today-navigation__switcher-wrapper .icon-svg {
    position: relative;
}

/* Основной список дат */
.today-navigation__main {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 20px 0 52px;
    scroll-snap-type: y mandatory;
}

.today-navigation__main-item {
    display: flex;
    align-items: center;
    height: 24px;
    margin-left: -3px;
    padding: 14px 16px 13px 0;
    position: relative;
    z-index: 1;
}

.today-navigation__main-item::after {
    content: "";
    border-bottom: 1px solid rgba(57, 59, 70, .5);
    border-bottom-width: 0 !important;
    border-top: 1px solid rgba(57, 59, 70, .5);
    bottom: -1px;
    left: -52px;
    pointer-events: none;
    position: absolute;
    right: -52px;
    top: 0;
}

.today-navigation__main-item-text {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 0;
    margin-top: 0;
    top: 0;
    text-transform: lowercase;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
}

.today-navigation__main-item-text i {
    color: var(--text-gray-color);
    font-style: normal;
    font-weight: 400;
}

.today-navigation__main-item-text p {
    color: #fff;
    text-transform: none;
    display: contents;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
}

.icon-wrapper {
    position: absolute;
    left: -36px;
    color: var(--text-gray-color);
    padding-right: 10px;

}
</style>