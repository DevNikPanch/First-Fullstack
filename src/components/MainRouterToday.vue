<script setup lang="ts">
</script>
<template>
    <div class="today">
        <div class="today__container">
            <div class="router-header">
                <div class="router-header__container">
                    <div class="router-header__title">
                        <div class="router-header__title-img">
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
                        <div class="router-header__title-text">Сегодня</div>
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
            <div class="today__content">
                <div class="today__empty">
                    <div class="today__empty-title">Посмотрите короткое видео, чтобы узнать, с чего начать
                        планирование</div>
                    <button type="button" class="today__empty-btn">Смотреть видео</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.today {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.today__container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

/* Шапка основного окна */

.router-header__container {
    height: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 8px;
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

/* Основной контент блока "Сегодня" */
.today__content {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 20px 0 52px;
    scroll-snap-type: y mandatory;
}

.today__empty {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    height: 50vh;
    min-height: 50%;
}

.today__empty-title {
    font-size: 16px;
    color: var(--text-gray-color);
    line-height: 18px;
    margin-bottom: 24px;
    font-weight: 400;
}

.today__empty-btn {
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    color: #fff;
    background-color: #2384b9;
    width: 242px;
    height: 48px;
    margin: 0;
    margin-left: 12px;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    min-width: 94px;
    padding: 0 30px;
    text-align: center;
    transition: all .4s ease;
}

.today__empty-btn:hover {
    background: #2384b9;
    opacity: .75;
}
</style>