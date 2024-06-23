<script setup lang="ts">
import MainRouterHeader from './MainRouterHeader.vue'
</script>
<template>
    <div class="incoming">
        <div class="incoming__container">
            <MainRouterHeader title="Входящие" />
            <div class="incoming__content">
                <div class="incoming__empty">
                    <div class="incoming__empty-title">Тут пока ничего нет</div>
                    <div class="incoming__empty-subtitle">Нажмите иконку + для создания новой задачи</div>
                </div>
                <div class="incoming__content-drop"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.incoming {
    height: 100%;
}

.incoming__container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.incoming__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 20px 0 52px;
    scroll-snap-type: y mandatory;
}

.incoming__empty {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    height: 50vh;
    min-height: 50%;
}

.incoming__empty-title {
    font-size: 24px;
    color: var(--text-gray-color);
    font-weight: 400;
    text-align: center;
    line-height: 26px;
    line-height: 24px;
    margin-bottom: 16px;
}

.incoming__empty-subtitle {
    font-size: 12px;
    color: var(--text-gray-color);
    font-weight: 400;
    text-align: center;
    line-height: 14px;
    margin: 0;
}

.incoming__content-drop {
    flex: 1;
    height: 100%;
}
</style>