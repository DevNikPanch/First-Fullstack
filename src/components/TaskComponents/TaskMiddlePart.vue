<script setup lang="ts">

import InboxSVG from '../SvgComponents/InboxSVG.vue';
import UnplacedSvg from '../SvgComponents/UnplacedSvg.vue';
import RemoveSvg from '../SvgComponents/RemoveSvg.vue';
import { DefineComponent, onActivated, ref } from 'vue';

const props = defineProps<{
    typeIncoming: boolean,
    isOpenTask: boolean,
    isOpenTypeKinds: boolean
}>()

const checkOpenTypeKinds = ref(props.isOpenTypeKinds)
const checkTypeIncoming = ref(props.typeIncoming)

function showTypesKinds(show: boolean) {
    checkOpenTypeKinds.value = show;
}

function switchTypeProject(switcher: boolean) {
    checkTypeIncoming.value = switcher;
}

</script>

<template>
    <div class="task__middle" :style="{ 'display': isOpenTask ? 'block' : 'none' }">
        <div class=" task-project">
            <div class="task-project__container">
                <div v-if="checkTypeIncoming === true" class="task-project__wrapper" v-click-in-element="{
                    onActive: () => showTypesKinds(true), onUnActive: () => showTypesKinds(false)
                }">
                    <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                        <InboxSVG />
                    </div>
                    <div class="task-project__wrapper-content">
                        <span>Входящие</span>
                    </div>
                </div>
                <div v-else class="task-project__wrapper" v-click-in-element="{
                    onActive: () => showTypesKinds(true), onUnActive: () => showTypesKinds(false)
                }">
                    <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                        <UnplacedSvg />
                    </div>
                    <div class="task-project__wrapper-content">
                        <span>Без проекта</span>
                    </div>
                </div>
                <div @click="switchTypeProject(false)" class="icon-svg remove"
                    style="min-height: 24px; min-width: 24px;"
                    :style="{ 'visibility': checkTypeIncoming ? 'visible' : 'hidden' }">
                    <RemoveSvg />
                </div>
                <div class="project" :style="{ 'display': checkOpenTypeKinds ? 'block' : 'none' }">
                    <div class="project__wrapper">
                        <div class="project__move">
                            <input placeholder="Куда" type="text" class="project__move-inpt">
                        </div>
                        <div class="project__types">
                            <div class="project__type"
                                v-click-in-element="{ onActive: () => { switchTypeProject(true), showTypesKinds(false) } }">
                                <div class="icon__wrapper">
                                    <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                                        <InboxSVG />
                                    </div>
                                </div>
                                <div class="project__type-title">Входящие</div>
                            </div>
                            <div class="project__type"
                                v-click-in-element="{ onActive: () => { switchTypeProject(false), showTypesKinds(false) } }">
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
            </div>
        </div>
    </div>
</template>
<style scoped>
.task__middle {
    padding-left: 7px;
}

.task-project {
    margin: 20px 4px 6px 0;
}

.task-project:hover .remove {
    display: block;
}

.task-project__container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
}

.task-project__wrapper {
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-sizing: border-box;
    flex-shrink: 0;
    margin-right: 2px;
    padding-right: 4px;
    position: relative;
    max-width: calc(100% - 20px);
    z-index: 10;
}

.task-project__wrapper:hover::before {
    content: "";
    border-radius: 5px;
    bottom: -2px;
    left: -4px;
    position: absolute;
    right: -4px;
    top: -2px;
    background-color: #182137;
}

.inbox {
    color: var(--icon-side-bar-color);
    margin-right: 12px;
    position: relative;
    z-index: 2;
}

.task-project__wrapper-content {
    display: inline-flex;
    flex-shrink: 0;
    padding-right: 1px;
    max-width: calc(100% - 36px);
    z-index: 1;
    overflow: hidden;
    text-overflow: ellipsis;
}

.task-project__wrapper-content span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.remove {
    display: none;
    color: var(--text-gray-color);
    cursor: pointer;
}

.remove:hover {
    color: #fff;
}

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
</style>