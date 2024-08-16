<script setup lang="ts">
</script>
<template>
    <div class="task-footer">
        <div class="task-footer__container">
            <div class="task-footer__more">
                <div class="icon-svg more" style="min-height: 24px; min-width: 24px;">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            class="injected-svg" data-src="resources/icons/more_24.svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10ZM19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="task-footer__item task-footer__item--0">
                <div class="task-footer__item-action">
                    <div class="icon-svg calendar" style="min-height: 16px; min-width: 16px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" class="injected-svg" data-src="resources/icons/calendar_16.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11 1C12 1 12 2 12 2H14C14 2 15 2 15 3V14C15 15 14 15 14 15H2C0.999999 15 1 14 1 14V3C0.999999 2 2 2 2 2H4C4 2 4 1 5 1C6 1 6 2 6 2H10C10 2 10 1 11 1ZM13 4H3V6V8V13H13V8H3V6H13V4Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="task-footer__item-action">
                    <div class="icon-svg repeat" style="min-height: 16px; min-width: 16px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" class="injected-svg" data-src="resources/icons/repeat_16.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path
                                    d="M2.12285 6.04214L2.1664 6.08908L3.7927 8.52853C3.8146 8.56138 3.82629 8.59998 3.82629 8.63947C3.82629 8.73151 3.76411 8.80904 3.67946 8.83232L3.62629 8.83947L3.0702 8.83972C3.46956 11.2013 5.52473 13 7.99999 13C9.49891 13 10.8438 12.3404 11.7602 11.2957L13.2002 12.686C11.919 14.1069 10.0638 15 7.99999 15C4.4183 15 1.4649 12.31 1.04989 8.84008L0.373697 8.83947C0.334212 8.83947 0.29561 8.82778 0.262757 8.80588C0.189232 8.75686 0.158633 8.66759 0.180705 8.58678L0.207287 8.52853L1.83358 6.08908C1.84823 6.06711 1.86708 6.04826 1.88905 6.03361C1.96258 5.98459 2.05675 5.99069 2.12285 6.04214ZM7.99999 1C11.5265 1 14.4439 3.6077 14.9291 6.99999L15.6263 7C15.6658 7 15.7044 7.01169 15.7372 7.03359C15.8108 7.08261 15.8414 7.17188 15.8193 7.25269L15.7927 7.31094L14.1664 9.75039C14.1518 9.77236 14.1329 9.79121 14.1109 9.80585C14.0374 9.85487 13.9432 9.84878 13.8771 9.79733L13.8336 9.75039L12.2073 7.31094C12.1854 7.27809 12.1737 7.23948 12.1737 7.2C12.1737 7.10795 12.2359 7.03043 12.3205 7.00714L12.3737 7L12.8999 6.99981C12.4366 4.71767 10.4189 3 7.99999 3C6.45551 3 5.07458 3.70028 4.15741 4.80065L2.67003 3.462C3.95398 1.95544 5.86541 1 7.99999 1Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="task-footer__item-action task-footer__item-action--last">
                    <div class="icon-svg timer" style="min-height: 16px; min-width: 16px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" class="injected-svg" data-src="resources/icons/timer_16.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path
                                    d="M6.35002 1.78318C6.13882 1.78318 5.95268 1.70825 5.79162 1.55838C5.63055 1.40825 5.55002 1.22212 5.55002 0.999985C5.55002 0.788785 5.63055 0.608251 5.79162 0.458385C5.95268 0.308251 6.13882 0.233185 6.35002 0.233185H9.66682C9.86682 0.233185 10.0473 0.308251 10.2084 0.458385C10.3695 0.608251 10.45 0.788785 10.45 0.999985C10.45 1.21118 10.3695 1.39452 10.2084 1.54998C10.0473 1.70545 9.86682 1.78318 9.66682 1.78318H6.35002ZM8.00002 9.59998C8.21122 9.59998 8.39455 9.52225 8.55002 9.36678C8.70548 9.21105 8.78322 9.02772 8.78322 8.81678V6.43318C8.78322 6.22225 8.70548 6.04172 8.55002 5.89158C8.39455 5.74172 8.21122 5.66678 8.00002 5.66678C7.78882 5.66678 7.60828 5.74172 7.45842 5.89158C7.30828 6.04172 7.23322 6.22225 7.23322 6.43318V8.81678C7.23322 9.02772 7.30828 9.21105 7.45842 9.36678C7.60828 9.52225 7.78882 9.59998 8.00002 9.59998ZM8.00002 15.55C7.10002 15.55 6.25562 15.3805 5.46682 15.0416C4.67775 14.7027 3.98882 14.2416 3.40002 13.6584C2.81122 13.0749 2.35015 12.3888 2.01682 11.6C1.68348 10.8112 1.51682 9.96678 1.51682 9.06678C1.51682 8.16678 1.68348 7.32225 2.01682 6.53318C2.35015 5.74438 2.81122 5.05838 3.40002 4.47518C3.98882 3.89172 4.67775 3.42772 5.46682 3.08318C6.25562 2.73892 7.10002 2.56678 8.00002 2.56678C8.76668 2.56678 9.48615 2.68625 10.1584 2.92518C10.8307 3.16385 11.4389 3.50545 11.9832 3.94998L12.5 3.44998C12.6445 3.30545 12.8251 3.23598 13.0416 3.24158C13.2584 3.24718 13.4445 3.32225 13.6 3.46678C13.7445 3.62225 13.8168 3.80825 13.8168 4.02478C13.8168 4.24158 13.7445 4.42225 13.6 4.56678L13.1 5.06678C13.5333 5.57772 13.8749 6.15825 14.1248 6.80838C14.3749 7.45825 14.5 8.21105 14.5 9.06678C14.5 9.96678 14.3305 10.8112 13.9916 11.6C13.6527 12.3888 13.1888 13.0749 12.6 13.6584C12.0112 14.2416 11.3223 14.7027 10.5332 15.0416C9.74442 15.3805 8.90002 15.55 8.00002 15.55ZM8.00002 13.7668C9.32215 13.7668 10.4388 13.314 11.35 12.4084C12.2612 11.5028 12.7168 10.3889 12.7168 9.06678C12.7168 7.75558 12.2612 6.63892 11.35 5.71678C10.4388 4.79438 9.32215 4.33318 8.00002 4.33318C6.67788 4.33318 5.56122 4.79438 4.65002 5.71678C3.73882 6.63892 3.28322 7.75558 3.28322 9.06678C3.28322 10.3777 3.73882 11.4888 4.65002 12.4C5.56122 13.3112 6.67788 13.7668 8.00002 13.7668Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="task-footer__item task-footer__item--1">
                <div class="task-footer__item-action">
                    <div class="icon-svg priority" style="min-height: 16px; min-width: 16px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" class="injected-svg" data-src="resources/icons/priority_16.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path d="M9 5C9 5 9 4 8 4C7 4 7 5 7 5V8C7 8 7 9 8 9C9 9 9 8 9 8V5Z" fill="currentColor">
                                </path>
                                <path
                                    d="M8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M8 1C15 1 15 8 15 8C15 8 15 15 8 15C1 15 1 8 1 8C1 8 1 1 8 1ZM8 3C3 3 3 8 3 8C3 8 3 13 8 13C13 13 13 8 13 8C13 8 13 3 8 3Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="task-footer__item-action">
                    <div class="icon-svg pin" style="min-height: 16px; min-width: 16px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" class="injected-svg" data-src="resources/icons/pin_16.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8 15C8.8 15 9 14.3333 9 14V12H14C15 12 15 11 15 11C15 5 9 5 9 5V3H11C11 3 12 3 12 2C12 1 11 1 11 1H5C5 1 4 1 4 2C4 3 5 3 5 3C5 3 6.84839 3 7 3V5C7 5 1 5 1 11C1 11.3333 1.2 12 2 12H7V14C7 14.3333 7.2 15 8 15ZM13 10C13 10 13 7 8 7C3 7 3 10 3 10H13Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="task-footer__item-action task-footer__item-action--last">
                    <div class="icon-svg deadline" style="min-height: 16px; min-width: 16px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" class="injected-svg" data-src="resources/icons/deadline_16.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M13.8812 2C13.8812 2 14.3564 1 13.4059 1H2.9505C2.42555 1 2 1.44772 2 2V14C2 14.5523 2.42555 15 2.9505 15C3.47544 15 3.90099 14.5523 3.90099 14V11H13.4059C14.3564 11 13.8812 10 13.8812 10L11.8084 6.51074C11.6213 6.19592 11.6213 5.80408 11.8084 5.48927L13.8812 2ZM11.0297 3H3.90095V9H11.0297L9.80701 7.0705C9.39286 6.41692 9.39286 5.58308 9.80701 4.9295L11.0297 3Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="task-footer__item task-footer__item--2">
                <div class="task-footer__item-action">
                    <div class="icon-svg mover" style="min-height: 16px; min-width: 16px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" class="injected-svg" data-src="resources/icons/mover_16.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8.11353 1.0344C8.13602 1.04939 8.15531 1.06869 8.17031 1.09117L9.83477 3.58787C9.89748 3.68194 9.87207 3.80903 9.778 3.87174C9.74438 3.89415 9.70487 3.90611 9.66446 3.90611L9.02316 3.90564L9.02299 6.97605L12.0944 6.97621L12.0939 6.33552C12.0939 6.22247 12.1855 6.13083 12.2986 6.13083C12.339 6.13083 12.3785 6.14279 12.4121 6.1652L14.9088 7.82967C15.0029 7.89238 15.0283 8.01947 14.9656 8.11353C14.9506 8.13602 14.9313 8.15531 14.9088 8.1703L12.4121 9.83477C12.3181 9.89748 12.191 9.87206 12.1283 9.778C12.1058 9.74438 12.0939 9.70487 12.0939 9.66446L12.0944 9.02316L9.02299 9.02299L9.02316 12.0934L9.66446 12.0939C9.6914 12.0939 9.71794 12.0992 9.7426 12.1094L9.778 12.1283C9.85325 12.1784 9.88457 12.2698 9.86198 12.3525L9.83477 12.4121L8.17031 14.9088C8.15531 14.9313 8.13602 14.9506 8.11353 14.9656C8.03828 15.0158 7.9419 15.0095 7.87424 14.9569L7.82967 14.9088L6.16521 12.4121C6.14279 12.3785 6.13083 12.339 6.13083 12.2986C6.13083 12.2044 6.19447 12.125 6.28111 12.1012L6.33552 12.0939L6.97621 12.0934L6.97605 9.02299L3.90659 9.02316L3.90611 9.66446C3.90611 9.6914 3.9008 9.71794 3.89061 9.7426L3.87174 9.778C3.82157 9.85325 3.7302 9.88457 3.6475 9.86198L3.58788 9.83477L1.09117 8.1703C1.06869 8.15531 1.04939 8.13602 1.0344 8.11353C0.984233 8.03828 0.990467 7.9419 1.04313 7.87424L1.09117 7.82967L3.58788 6.1652C3.6215 6.14279 3.66101 6.13083 3.70142 6.13083C3.79563 6.13083 3.87497 6.19447 3.8988 6.2811L3.90611 6.33552L3.90659 6.97621L6.97605 6.97605L6.97621 3.90564L6.33552 3.90611C6.22247 3.90611 6.13083 3.81447 6.13083 3.70142C6.13083 3.66101 6.14279 3.6215 6.16521 3.58787L7.82967 1.09117C7.89238 0.997109 8.01947 0.971692 8.11353 1.0344Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="task-footer__item-action">
                    <div class="icon-svg tag" style="min-height: 16px; min-width: 16px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" class="injected-svg" data-src="resources/icons/tag_16.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g clip-path="url(#clip0-3)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.99997 1.00001C1.44769 1.00001 0.999971 1.44773 0.999971 2.00001L0.999971 7.00007C0.999971 7.26529 1.10533 7.51965 1.29287 7.70718L8.29287 14.7071C8.68339 15.0976 9.31655 15.0976 9.70708 14.7071L14.7071 9.70712C15.0976 9.31659 15.0976 8.68343 14.7071 8.29291L7.70708 1.29291C7.51954 1.10537 7.26519 1.00001 6.99997 1.00001L1.99997 1.00001ZM2.99997 6.58586L2.99997 3.00001L6.58576 3.00001L12.5858 9.00001L8.99997 12.5858L2.99997 6.58586ZM5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6Z"
                                        fill="currentColor"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0-3">
                                        <rect width="16" height="16" fill="currentColor"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="task-footer__item-action">
                    <div class="icon-svg checklist" style="min-height: 16px; min-width: 16px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" class="injected-svg" data-src="resources/icons/checklist_16.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14 13C14.5523 13 15 13.4477 15 14C15 14.5523 14.5523 15 14 15H6C5.44772 15 5 14.5523 5 14C5 13.4477 5.44772 13 6 13H14ZM2 13C2.55228 13 3 13.4477 3 14C3 14.5523 2.55228 15 2 15C1.44772 15 1 14.5523 1 14C1 13.4477 1.44772 13 2 13ZM14 7C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7H14ZM2 7C2.55228 7 3 7.44772 3 8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8C1 7.44772 1.44772 7 2 7ZM14 1C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H6C5.44772 3 5 2.55228 5 2C5 1.44772 5.44772 1 6 1H14ZM2 1C2.55228 1 3 1.44772 3 2C3 2.55228 2.55228 3 2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="task-footer__item-action task-footer__item-action--last">
                    <div class="icon-svg file" style="min-height: 16px; min-width: 16px;">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" class="injected-svg" data-src="resources/icons/file_16.svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M5.27314 2.00259C6.04117 1.3199 7.03693 1 8 1C8.96307 1 9.95883 1.3199 10.7269 2.00259C11.5133 2.70164 12 3.72864 12 5V8.00002C12 8.02462 12.0005 8.05468 12.001 8.0895C12.0058 8.3923 12.0161 9.0559 11.772 9.63725C11.6197 9.99976 11.3611 10.3644 10.9412 10.6281C10.5283 10.8875 10.0376 11 9.5 11C8.96239 11 8.47174 10.8875 8.05879 10.6281C7.63893 10.3644 7.38027 9.99976 7.22802 9.63725C6.98385 9.0559 6.99424 8.3923 6.99898 8.0895C6.99953 8.05468 7 8.02462 7 8.00002V6.00002C7 5.44773 7.44772 5.00002 8 5.00002C8.55228 5.00002 9 5.44773 9 6.00002V8.00002C9 8.05023 8.99967 8.09698 8.99936 8.14148C8.9984 8.27786 8.99759 8.39314 9.00683 8.52252C9.01853 8.68625 9.04345 8.79484 9.07198 8.86278C9.09473 8.91694 9.11107 8.92727 9.12246 8.93442C9.14076 8.94591 9.23761 9.00002 9.5 9.00002C9.76239 9.00002 9.85924 8.94591 9.87754 8.93442C9.88893 8.92727 9.90527 8.91694 9.92802 8.86278C9.95655 8.79484 9.98147 8.68625 9.99317 8.52252C10.0024 8.39314 10.0016 8.27786 10.0006 8.14148C10.0003 8.09698 10 8.05023 10 8.00002V5C10 4.27136 9.7367 3.79836 9.39814 3.49741C9.04117 3.1801 8.53693 3 8 3C7.46307 3 6.95883 3.1801 6.60186 3.49741C6.2633 3.79836 6 4.27136 6 5V10C6 10.8522 6.21567 11.6209 6.6125 12.15C6.97989 12.6399 7.55419 13 8.5 13C8.76637 13 9.15297 12.9966 9.516 12.9052C9.88954 12.8112 10.0448 12.6743 10.1056 12.5528C10.3526 12.0588 10.9532 11.8586 11.4472 12.1056C11.9412 12.3526 12.1414 12.9532 11.8944 13.4472C11.4552 14.3257 10.6239 14.6888 10.0042 14.8448C9.38648 15.0002 8.78496 15.0001 8.51599 15L8.5 15C6.94581 15 5.77011 14.3601 5.0125 13.35C4.28433 12.3791 4 11.1478 4 10V5C4 3.72864 4.4867 2.70164 5.27314 2.00259Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
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
    margin: 12px -8px 0 0;
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

.task-footer svg {
    color: var(--text-gray-color);
}

.task-footer__item {
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

.task-footer__item-action--last {
    margin-right: 0;
}
</style>