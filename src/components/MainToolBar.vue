<script setup lang="ts">
</script>
<template>
    <div class="incoming__footer">
        <div class="incoming__toolbar">
            <div class="incoming__toolbar-item hover-item" id="add">
                <div class="icon-svg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            class="injected-svg" data-src="resources/icons/add_24.svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V12.999L6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11L11 10.999V6C11 5.44772 11.4477 5 12 5Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <div class="incoming__toolbar-item-text">Новая задача</div>
            </div>
            <div class="incoming__toolbar-item non-active incoming__toolbar-item--margin" id="section">
                <div class="incoming__toolbar-item-img icon-svg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            class="injected-svg" data-src="resources/icons/section_24.svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                                d="M5.63628 15.536C5.24576 15.1455 5.24576 14.5123 5.63628 14.1218L7.7576 12.0004L5.63628 9.87913C5.24576 9.4886 5.24576 8.85544 5.63628 8.46491L11.2931 2.80806C11.6837 2.41753 12.3168 2.41753 12.7074 2.80806L18.3642 8.46491C18.7547 8.85544 18.7547 9.4886 18.3642 9.87913L16.2429 12.0004L18.3642 14.1218C18.7547 14.5123 18.7547 15.1455 18.3642 15.536L12.7074 21.1928C12.3447 21.5555 11.7729 21.5814 11.3804 21.2705L11.2931 21.1928L5.63628 15.536ZM12.0002 19.0715L16.2429 14.8289L14.8287 13.4147L12.7074 15.536C12.3168 15.9265 11.6837 15.9265 11.2931 15.536L9.17182 13.4147L7.7576 14.8289L12.0002 19.0715ZM16.2429 9.17202L12.0002 4.92938L7.7576 9.17202L12.0002 13.4147L16.2429 9.17202Z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="incoming__toolbar-item non-active incoming__toolbar-item--margin" id="calendar">
                <div class="incoming__toolbar-item-img icon-svg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            class="injected-svg" data-src="resources/icons/calendar_24.svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path
                                d="M7 4V5H17V4C17 3.44772 17.4477 3 18 3C18.5523 3 19 3.44772 19 4V5H20C20.5523 5 21 5.44772 21 6V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V6C3 5.44772 3.44772 5 4 5H5V4C5 3.44772 5.44772 3 6 3C6.55228 3 7 3.44772 7 4ZM18.7 7H5.3C5.13431 7 5 7.13431 5 7.3V18.7C5 18.8657 5.13431 19 5.3 19H18.7C18.8657 19 19 18.8657 19 18.7V7.3C19 7.13431 18.8657 7 18.7 7ZM17 9.5V10.5C17 10.7761 16.7761 11 16.5 11H15.5C15.2239 11 15 10.7761 15 10.5V9.5C15 9.22386 15.2239 9 15.5 9H16.5C16.7761 9 17 9.22386 17 9.5ZM13 9.5V10.5C13 10.7761 12.7761 11 12.5 11H11.5C11.2239 11 11 10.7761 11 10.5V9.5C11 9.22386 11.2239 9 11.5 9H12.5C12.7761 9 13 9.22386 13 9.5ZM9 9.5V10.5C9 10.7761 8.77614 11 8.5 11H7.5C7.22386 11 7 10.7761 7 10.5V9.5C7 9.22386 7.22386 9 7.5 9H8.5C8.77614 9 9 9.22386 9 9.5ZM17 12.5V13.5C17 13.7761 16.7761 14 16.5 14H15.5C15.2239 14 15 13.7761 15 13.5V12.5C15 12.2239 15.2239 12 15.5 12H16.5C16.7761 12 17 12.2239 17 12.5ZM13 12.5V13.5C13 13.7761 12.7761 14 12.5 14H11.5C11.2239 14 11 13.7761 11 13.5V12.5C11 12.2239 11.2239 12 11.5 12H12.5C12.7761 12 13 12.2239 13 12.5ZM9 12.5V13.5C9 13.7761 8.77614 14 8.5 14H7.5C7.22386 14 7 13.7761 7 13.5V12.5C7 12.2239 7.22386 12 7.5 12H8.5C8.77614 12 9 12.2239 9 12.5ZM17 15.5V16.5C17 16.7761 16.7761 17 16.5 17H15.5C15.2239 17 15 16.7761 15 16.5V15.5C15 15.2239 15.2239 15 15.5 15H16.5C16.7761 15 17 15.2239 17 15.5ZM13 15.5V16.5C13 16.7761 12.7761 17 12.5 17H11.5C11.2239 17 11 16.7761 11 16.5V15.5C11 15.2239 11.2239 15 11.5 15H12.5C12.7761 15 13 15.2239 13 15.5ZM9 15.5V16.5C9 16.7761 8.77614 17 8.5 17H7.5C7.22386 17 7 16.7761 7 16.5V15.5C7 15.2239 7.22386 15 7.5 15H8.5C8.77614 15 9 15.2239 9 15.5Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="incoming__toolbar-item non-active incoming__toolbar-item--margin" id="mover">
                <div class="incoming__toolbar-item-img icon-svg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            class="injected-svg" data-src="resources/icons/mover_24.svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M12 15C11.4477 15 11 15.4477 11 16V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V16C13 15.4477 12.5523 15 12 15ZM12 5C11.4477 5 11 5.44772 11 6V8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8V6C13 5.44772 12.5523 5 12 5Z"
                                fill="currentColor"></path>
                            <path
                                d="M8 11H6C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H8C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11Z"
                                fill="currentColor"></path>
                            <path
                                d="M19 11H17C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11Z"
                                fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M12.3536 3.35354L15.1465 6.14643C15.3418 6.34169 15.3418 6.65828 15.1465 6.85354C15.0527 6.94731 14.9255 6.99999 14.7929 6.99999H9.20715C8.93101 6.99999 8.70715 6.77613 8.70715 6.49999C8.70715 6.36738 8.75983 6.2402 8.8536 6.14643L11.6465 3.35354C11.8418 3.15828 12.1583 3.15828 12.3536 3.35354Z"
                                fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M21.6465 12.3535L18.8536 15.1464C18.6584 15.3417 18.3418 15.3417 18.1465 15.1464C18.0528 15.0527 18.0001 14.9255 18.0001 14.7929V9.20709C18.0001 8.93095 18.2239 8.70709 18.5001 8.70709C18.6327 8.70709 18.7599 8.75977 18.8536 8.85354L21.6465 11.6464C21.8418 11.8417 21.8418 12.1583 21.6465 12.3535Z"
                                fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M2.3536 12.3535L5.14649 15.1464C5.34175 15.3417 5.65834 15.3417 5.8536 15.1464C5.94737 15.0527 6.00005 14.9255 6.00005 14.7929V9.20709C6.00005 8.93095 5.77619 8.70709 5.50005 8.70709C5.36744 8.70709 5.24026 8.75977 5.14649 8.85354L2.3536 11.6464C2.15834 11.8417 2.15834 12.1583 2.3536 12.3535Z"
                                fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M12.3536 20.6464L15.1465 17.8535C15.3418 17.6582 15.3418 17.3417 15.1465 17.1464C15.0527 17.0526 14.9255 17 14.7929 17H9.20715C8.93101 17 8.70715 17.2238 8.70715 17.5C8.70715 17.6326 8.75983 17.7597 8.8536 17.8535L11.6465 20.6464C11.8418 20.8417 12.1583 20.8417 12.3536 20.6464Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="incoming__toolbar-item non-active incoming__toolbar-item--margin" id="basket">
                <div class="incoming__toolbar-item-img icon-svg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            class="injected-svg" data-src="resources/icons/basket_24.svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path
                                d="M15 4C15.5523 4 16 4.46812 16 5.04557V7H19.0021C19.5138 7 19.9356 7.38604 19.9933 7.88338L20 8V11C20 11.5523 19.5532 12 19.0021 12H18V19.0343C18 19.5295 17.614 19.9377 17.1166 19.9935L17 20H7C6.44772 20 6 19.5676 6 19.0343V12H4.99793C4.48616 12 4.06436 11.614 4.00671 11.1166L4 11V8C4 7.44772 4.44679 7 4.99793 7H8V5.04557C8 4.50661 8.39001 4.0629 8.89104 4.00614L9 4H15ZM15.999 12H7.999L7.9994 18.0683H15.9994L15.999 12ZM18.0039 8.9999L15.015 8.999L15 9H9C8.9946 9 8.9892 8.99995 8.98382 8.99987L5.99586 8.9999V9.9999H18.0039V8.9999ZM13.9994 6.09113H9.9994V6.90876H13.9994V6.09113Z"
                                fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="incoming__footer-item"></div>
    </div>
</template>
<style scoped>
.incoming__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 13px 12px;
    pointer-events: all;
}

.incoming__toolbar {
    display: flex;
    justify-content: flex-start;
}

.incoming__toolbar-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--icon-side-bar-color);
    position: relative;
    padding: 3px;
}

.incoming__toolbar-item--margin {
    margin-left: 11px;
}

.incoming__toolbar-item-text {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    margin: 0 5px;
}

.incoming__toolbar-item-img {
    color: var(--text-gray-color);
}

#add:hover::before {
    content: "Новая задача      Space";
    height: 22px;
    white-space: pre;
    padding: 0 5px;
    font-size: 11px;
    color: #0b0417;
    text-align: center;
    background-color: var(--text-gray-color);
    border-radius: 5px;
    position: absolute;
    z-index: 10;
    left: 5px;
    bottom: 40px;
    line-height: 22px;
    pointer-events: none;
}

#add:hover::after {
    content: "";
    position: absolute;
    bottom: 37px;
    width: 6px;
    height: 6px;
    background-color: var(--text-gray-color);
    visibility: visible;
    left: 14px;
    rotate: 45deg;
}
</style>