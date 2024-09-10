<script setup lang="ts">
import { useTaskStore } from '../../stores/taskStore';
import { TaskData } from '../../types/taskData.types';
import UnplacedSvg from '../SideBar/SideBarSVG/UnplacedSvg.vue';
import InboxSVG from '../SideBar/SideBarSVG/InboxSVG.vue';
import SubMenu from './SubMenu.vue';
import MoreSVG from './TaskFooterSVG/MoreSVG.vue';
import CalendarSVG from './TaskFooterSVG/CalendarSVG.vue';
import RepeatSVG from './TaskFooterSVG/RepeatSVG.vue';
import TimerSVG from './TaskFooterSVG/TimerSVG.vue';
import PrioritySVG from './TaskFooterSVG/PrioritySVG.vue';
import PinSVG from './TaskFooterSVG/PinSVG.vue';
import DeadLineSVG from './TaskFooterSVG/DeadLineSVG.vue';
import MoverSVG from './TaskFooterSVG/MoverSVG.vue';
import TagSVG from './TaskFooterSVG/TagSVG.vue';
import CheckList from './TaskFooterSVG/CheckList.vue';
import FileSVG from './TaskFooterSVG/FileSVG.vue';

const props = defineProps<{
    task: TaskData,
}>()

const taskStore = useTaskStore();

</script>
<template>
    <div class="task-footer">
        <div class="task-footer__container">
            <div class="task-footer__more">
                <div class="icon-svg more" style="min-height: 24px; min-width: 24px;">
                    <MoreSVG />
                </div>
            </div>
            <div class="task-footer__item task-footer__item--0">
                <div class="task-footer__item-action hover-help-info" id="calendar">
                    <div class="icon-svg calendar" style="min-height: 16px; min-width: 16px;">
                        <CalendarSVG />
                    </div>
                </div>
                <div class="task-footer__item-action hover-help-info" id="repeat">
                    <div class="icon-svg repeat " style="min-height: 16px; min-width: 16px;">
                        <RepeatSVG />
                    </div>
                </div>
                <div class="task-footer__item-action task-footer__item-action--last hover-help-info" id="timer">
                    <div class="icon-svg timer " style="min-height: 16px; min-width: 16px;">
                        <TimerSVG />
                    </div>
                </div>
            </div>
            <div class="task-footer__item task-footer__item--1">
                <div class="task-footer__item-action hover-help-info" id="priority"
                    @click="taskStore.setHighPriority(task.taskId)">
                    <div class="icon-svg priority " style="min-height: 16px; min-width: 16px;">
                        <PrioritySVG />
                    </div>
                </div>
                <div class="task-footer__item-action hover-help-info" id="pin">
                    <div class="icon-svg pin " style="min-height: 16px; min-width: 16px;">
                        <PinSVG />
                    </div>
                </div>
                <div class="task-footer__item-action task-footer__item-action--last hover-help-info" id="deadline">
                    <div class="icon-svg deadline " style="min-height: 16px; min-width: 16px;">
                        <DeadLineSVG />
                    </div>
                </div>
            </div>
            <div class="task-footer__item task-footer__item--2">
                <SubMenu>
                    <template #trigger="{ onClick }">
                        <div class="task-footer__item-action hover-help-info" id="mover" @click="onClick">
                            <div class="icon-svg mover " style="min-height: 16px; min-width: 16px;">
                                <MoverSVG />
                            </div>
                        </div>
                    </template>
                    <template #body="{ onClick }">
                        <div class="project__move">
                            <input placeholder="Куда" type="text" class="project__move-inpt">
                        </div>
                        <div class="project__types">
                            <div class="project__type"
                                @click="taskStore.switchTypeProject(task.taskId, true), onClick()">
                                <div class="project__info">
                                    <div class="icon__wrapper">
                                        <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                                            <InboxSVG />
                                        </div>
                                    </div>
                                    <div class="project__type-title">Входящие</div>
                                </div>
                            </div>
                            <div class="project__type"
                                @click="taskStore.switchTypeProject(task.taskId, false), onClick()">
                                <div class="project__info">
                                    <div class="icon__wrapper">
                                        <div class="icon-svg inbox" style="min-height: 24px; min-width: 24px;">
                                            <UnplacedSvg />
                                        </div>
                                    </div>
                                    <div class="project__type-title">Без проекта</div>
                                </div>
                            </div>
                        </div>
                    </template>
                </SubMenu>
                <div class="task-footer__item-action hover-help-info" id="tag">
                    <div class="icon-svg tag " style="min-height: 16px; min-width: 16px;">
                        <TagSVG />
                    </div>
                </div>
                <div class="task-footer__item-action hover-help-info" id="checklist">
                    <div class="icon-svg checklist " style="min-height: 16px; min-width: 16px;">
                        <CheckList />
                    </div>
                </div>
                <div class="task-footer__item-action task-footer__item-action--last hover-help-info" id="file">
                    <div class="icon-svg file " style="min-height: 16px; min-width: 16px;">
                        <FileSVG />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.task-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 12px -8px 0 7px;
}

.task-footer__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}

.task-footer__more {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    line-height: 12px;
    margin-right: 8px;
    position: relative;
}

.task-footer__more:hover::before {
    border-radius: 5px;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #182137;
}

.task-footer__more .more {
    color: var(--text-gray-color);
}

.task-footer__more:hover .more {
    color: var(--icon-side-bar-color);
}

.icon-svg {
    z-index: 10;
}

.task-footer__item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 8px;
}

.task-footer__item-action {
    align-items: center;
    border-radius: 5px;
    display: flex;
    height: 24px;
    justify-content: center;
    line-height: 12px;
    margin-right: 8px;
    position: relative;
    width: 24px;
}

.task-footer__item-action .icon-svg {
    color: var(--text-gray-color);
}

.task-footer__item-action:hover {
    border-radius: 5px;
    background-color: #182137;
}

.task-footer__item-action:hover .icon-svg {
    color: var(--icon-side-bar-color);
}

.task-footer__item-action--last {
    margin-right: 0;
}

#calendar:hover::before {
    content: 'Календарь';
}

#repeat:hover::before {
    content: 'Повторять задачу';
}

#timer:hover::before {
    content: 'Помодоро';
}

#priority:hover::before {
    content: 'Высокий приоритет';
}

#pin:hover::before {
    content: 'Закрепить';
}

#deadline:hover::before {
    content: 'Крайний срок';
}

#mover:hover::before {
    content: 'Изменить проект';
}

#tag:hover::before {
    content: 'Тэги';
}

#checklist:hover::before {
    content: 'Чек-лист';
}

#file:hover::before {
    content: 'Прикрепить файл';
}
</style>