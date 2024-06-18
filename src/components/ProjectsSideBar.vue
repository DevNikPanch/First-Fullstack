<script setup lang="ts">
</script>
<template lang="">
    <div class='projects'>
        <div class="projects__container">
            <div class="btn hover-item">
                <div class="btn__img">
                    <div class="icon-svg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="injected-svg" data-src="resources/icons/add_24.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V12.999L6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11L11 10.999V6C11 5.44772 11.4477 5 12 5Z" fill="currentColor">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <span class="btn__text">Новый проект</span>
            </div>
        </div> 
    </div>
</template>

<style scoped>
.projects {
    border-top: 1px solid rgba(57, 59, 70, .5);
}

.projects__container {
    box-shadow: 0 -6px 8px var(--cChildPage);
    display: flex;
    margin-right: 4px;
    /* Верхний отступ сменить на 4 после добавления функционала */
    padding: 16px 12px 18px 16px;
    position: relative;
    z-index: 1;
}

.btn {
    align-items: center;
    border-radius: 5px;
    color: #76899b;
    display: flex;
    height: 24px;
    position: relative;
    transition: color .1s linear;
    width: 100%;
}

.btn__img {
    height: 24px;
    margin-right: 12px;
    z-index: 2;
}

.btn__text {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    width: 100%;
    z-index: 2;
}
</style>