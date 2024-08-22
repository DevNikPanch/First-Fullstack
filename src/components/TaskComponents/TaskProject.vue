<script setup lang="ts">
import { useTaskStore } from '../../stores/taskStore';
import InboxSVG from '../SvgComponents/InboxSVG.vue';
import UnplacedSvg from '../SvgComponents/UnplacedSvg.vue';

const props = defineProps<{
    counter: number
}>()

const taskStore = useTaskStore();
</script>
<template>
    <div class="project">
        <div class="project__wrapper">
            <div class="project__move">
                <input placeholder="Куда" type="text" class="project__move-inpt">
            </div>
            <div class="project__types">
                <div class="project__type" v-click-in-element="{
                    onActive: () => {
                        taskStore.switchTypeProject(props.counter, true), taskStore.showTypesKinds(props.counter, false)
                    }
                }">
                    <div class="icon__wrapper">
                        <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                            <InboxSVG />
                        </div>
                    </div>
                    <div class="project__type-title">Входящие</div>
                </div>
                <div class="project__type"
                    v-click-in-element="{ onActive: () => { taskStore.switchTypeProject(props.counter, true), taskStore.showTypesKinds(props.counter, false) } }">
                    <div class="icon__wrapper">
                        <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                            <UnplacedSvg />
                        </div>
                    </div>
                    <div class="project__type-title">Без проекта</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* Блок с выбором типа проекта */

.project {
    display: none;
    top: 30px;
    left: 0;
    box-sizing: border-box;
    border: 1px solid rgba(57, 59, 70, .5);
    box-shadow: 0 22px 50px 5px rgba(0, 0, 0, .56), 0 0 0 1px rgba(0, 0, 0, .5);
    background-color: #0b0417;
    border-radius: 5px;
    max-height: calc(100vh - 20px);
    position: absolute;
    z-index: 10000;
    font-family: HelveticaNeue, sans-serif;
    line-height: 16px;
    padding: 16px;
    width: 280px;
}

.project__move {
    margin-bottom: 16px;
    position: relative;
}

.project__move-inpt {
    background: transparent;
    border: 1px solid var(--text-gray-color);
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--cWhite);
    height: 26px;
    line-height: 14px;
    opacity: .5;
    padding: 5px 13px;
    text-align: left;
    width: 100%;
}

.project__type {
    display: flex;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 4px;
    padding: 2px;
    position: relative;
}

.project__type:hover::before {
    content: "";
    position: absolute;
    border-radius: 5px;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-color: #182137;
}

.project__type .icon-wrapper {
    position: relative;
    color: rgba(70, 131, 203, .5);
    margin-right: 12px;
}

.project__type-title {
    color: #fff;
    flex-basis: 100%;
    overflow: hidden;
    position: relative;
    text-align: left;
    white-space: nowrap;
    width: 100%;
}

.inbox {
    color: var(--icon-side-bar-color);
    margin-right: 12px;
    position: relative;
    z-index: 2;
}
</style>