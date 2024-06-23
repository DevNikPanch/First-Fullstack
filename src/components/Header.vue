<script setup lang="ts"></script><template>
  <header class="header">
    <div class="header__container">
      <div class="header__container-item"></div>
      <ul class="header__list">
        <li class="header__list-item hover-item hover-help-info" id="habits">
          <div class="icon-svg">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                class="injected-svg" data-src="resources/icons/habits_24.svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <path
                  d="M17.07 2.93L15.66 4.34C17.1 5.79 18 7.79 18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.92 5.05 2.56 9 2.07V4.09C6.16 4.57 4 7.03 4 10C4 13.31 6.69 16 10 16C13.31 16 16 13.31 16 10C16 8.34 15.33 6.84 14.24 5.76L12.83 7.17C13.55 7.9 14 8.9 14 10C14 12.21 12.21 14 10 14C7.79 14 6 12.21 6 10C6 8.14 7.28 6.59 9 6.14V8.28C8.4 8.63 8 9.26 8 10C8 11.1 8.9 12 10 12C11.1 12 12 11.1 12 10C12 9.26 11.6 8.62 11 8.28V0H10C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 7.24 18.88 4.74 17.07 2.93Z"
                  fill="currentColor"></path>
              </svg></div>
          </div>
        </li>
        <li class="header__list-item hover-item hover-help-info" id="search">
          <div class="icon-svg">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                class="injected-svg" data-src="resources/icons/search_24.svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <path
                  d="M11 4C14.866 4 18 7.13401 18 11C18 12.5723 17.4816 14.0236 16.6064 15.1922L19.8284 18.4142C20.219 18.8047 20.219 19.4379 19.8284 19.8284C19.4379 20.219 18.8047 20.219 18.4142 19.8284L15.1922 16.6064C14.0236 17.4816 12.5723 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4ZM11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6Z"
                  fill="currentColor"></path>
              </svg></div>
          </div>
        </li>
        <li class="header__list-item hover-item hover-help-info" id="date">
          <div class="icon-svg">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                class="injected-svg" data-src="resources/icons/calendar_24.svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <path
                  d="M7 4V5H17V4C17 3.44772 17.4477 3 18 3C18.5523 3 19 3.44772 19 4V5H20C20.5523 5 21 5.44772 21 6V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V6C3 5.44772 3.44772 5 4 5H5V4C5 3.44772 5.44772 3 6 3C6.55228 3 7 3.44772 7 4ZM18.7 7H5.3C5.13431 7 5 7.13431 5 7.3V18.7C5 18.8657 5.13431 19 5.3 19H18.7C18.8657 19 19 18.8657 19 18.7V7.3C19 7.13431 18.8657 7 18.7 7ZM17 9.5V10.5C17 10.7761 16.7761 11 16.5 11H15.5C15.2239 11 15 10.7761 15 10.5V9.5C15 9.22386 15.2239 9 15.5 9H16.5C16.7761 9 17 9.22386 17 9.5ZM13 9.5V10.5C13 10.7761 12.7761 11 12.5 11H11.5C11.2239 11 11 10.7761 11 10.5V9.5C11 9.22386 11.2239 9 11.5 9H12.5C12.7761 9 13 9.22386 13 9.5ZM9 9.5V10.5C9 10.7761 8.77614 11 8.5 11H7.5C7.22386 11 7 10.7761 7 10.5V9.5C7 9.22386 7.22386 9 7.5 9H8.5C8.77614 9 9 9.22386 9 9.5ZM17 12.5V13.5C17 13.7761 16.7761 14 16.5 14H15.5C15.2239 14 15 13.7761 15 13.5V12.5C15 12.2239 15.2239 12 15.5 12H16.5C16.7761 12 17 12.2239 17 12.5ZM13 12.5V13.5C13 13.7761 12.7761 14 12.5 14H11.5C11.2239 14 11 13.7761 11 13.5V12.5C11 12.2239 11.2239 12 11.5 12H12.5C12.7761 12 13 12.2239 13 12.5ZM9 12.5V13.5C9 13.7761 8.77614 14 8.5 14H7.5C7.22386 14 7 13.7761 7 13.5V12.5C7 12.2239 7.22386 12 7.5 12H8.5C8.77614 12 9 12.2239 9 12.5ZM17 15.5V16.5C17 16.7761 16.7761 17 16.5 17H15.5C15.2239 17 15 16.7761 15 16.5V15.5C15 15.2239 15.2239 15 15.5 15H16.5C16.7761 15 17 15.2239 17 15.5ZM13 15.5V16.5C13 16.7761 12.7761 17 12.5 17H11.5C11.2239 17 11 16.7761 11 16.5V15.5C11 15.2239 11.2239 15 11.5 15H12.5C12.7761 15 13 15.2239 13 15.5ZM9 15.5V16.5C9 16.7761 8.77614 17 8.5 17H7.5C7.22386 17 7 16.7761 7 16.5V15.5C7 15.2239 7.22386 15 7.5 15H8.5C8.77614 15 9 15.2239 9 15.5Z"
                  fill="currentColor"></path>
              </svg></div>
          </div>
        </li>
        <li class="header__list-item hover-item hover-help-info" id="filter">
          <div class="icon-svg">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="injected-svg"
                data-src="resources/icons/filter_24.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                  d="M20 3C20.5523 3 21 3.44772 21 4C21 4.24102 20.9147 4.46213 20.7727 4.6348L20.7491 4.69336L20.7204 4.75102L16 13.4V19C16 19.5156 15.6099 19.94 15.1087 19.9942L15.0484 20.022L14.9851 20.0459L9.6132 21.8665C9.57516 21.8794 9.5362 21.8893 9.49665 21.8963L9.42769 21.9053C9.29827 21.9656 9.15315 22 9 22C8.44772 22 8 21.5523 8 21V13.403L3.19088 4.61345L3.15084 4.5284C3.05524 4.37508 3 4.19399 3 4C3 3.44772 3.44772 3 4 3H20ZM18.577 5H5.422L9.86602 12.6962C9.97098 12.8779 10.0124 13.079 9.99709 13.2736L10 13.3403V19.781L14 18.339V13.3577L14.0029 13.2736C13.9907 13.1179 14.0147 12.9581 14.0786 12.8073L14.134 12.6962L18.577 5Z">
                </path>
              </svg></div>
          </div>
        </li>
        <li class="header__list-item hover-item hover-help-info" id="tags">
          <div class="icon-svg">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                class="injected-svg" data-src="resources/icons/tag_24.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20.2929 12.7596L12.7597 20.2928C12.3692 20.6832 11.7361 20.6832 11.3454 20.2929L4.29299 13.2425C4.1054 13.0549 4 12.8005 4 12.5353V5.00241C4.00028 4.45024 4.44783 4.00257 5 4.00213L12.533 4C12.7983 3.99993 13.0528 4.10529 13.2404 4.29289L20.2929 11.3454C20.6834 11.7359 20.6834 12.3691 20.2929 12.7596ZM11.7278 5.99988H6.5C6.22386 5.99988 6 6.22374 6 6.49988V11.7242C6 11.8568 6.05264 11.9839 6.14635 12.0777L11.7119 17.6462C11.9071 17.8416 12.2237 17.8417 12.419 17.6465C12.419 17.6465 12.419 17.6464 12.419 17.6464L17.6464 12.4199C17.8417 12.2247 17.8417 11.9081 17.6465 11.7128L12.0814 6.14637C11.9876 6.05258 11.8604 5.99988 11.7278 5.99988ZM8.70711 7.29278C9.09763 7.6833 9.09763 8.31646 8.70711 8.70699C8.31658 9.09751 7.68342 9.09751 7.29289 8.70699C6.90237 8.31646 6.90237 7.6833 7.29289 7.29278C7.68342 6.90225 8.31658 6.90225 8.70711 7.29278Z"
                  fill="currentColor"></path>
              </svg></div>
          </div>
        </li>
        <li class="header__list-item non-active hover-help-info" id="break">
          <div class="icon-svg">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                class="injected-svg" data-src="resources/icons/check_mode_24.svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M19.2 18C19.6418 18 20 18.4477 20 19C20 19.5523 19.6418 20 19.2 20H4.8C4.35818 20 4 19.5523 4 19C4 18.4477 4.35818 18 4.8 18H19.2ZM18 4V7C19.6569 7 21 8.34315 21 10C21 11.6569 19.6569 13 18 13L17.9876 13.0012C17.8345 14.6805 16.2868 16 14.4 16H9.6C7.61178 16 6 14.5347 6 12.7273V4H18ZM16 6H8V12.8571C8 13.4432 8.51472 13.9263 9.17784 13.9923L9.33333 14H14.6667C15.3504 14 15.914 13.5588 15.991 12.9904L16 12.8571V6ZM18 9V11L18.1166 10.9933C18.614 10.9355 19 10.5128 19 10C19 9.48716 18.614 9.06449 18.1166 9.00673L18 9Z"
                  fill="currentColor"></path>
              </svg></div>
          </div>
        </li>
        <li class="header__list-item non-active hover-help-info" id="zoom">
          <div class="icon-svg">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                class="injected-svg" data-src="resources/icons/focus_24.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5 14C5.51284 14 5.93551 14.386 5.99327 14.8834L6 15V18H9C9.55228 18 10 18.4477 10 19C10 19.5523 9.55228 20 9 20H5C4.48716 20 4.06449 19.614 4.00673 19.1166L4 19V15C4 14.4477 4.44772 14 5 14ZM19 14C19.5523 14 20 14.4477 20 15V19L19.9933 19.1166C19.9355 19.614 19.5128 20 19 20L18.983 19.999L15 20C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18L18 17.999V15L18.0067 14.8834C18.0645 14.386 18.4872 14 19 14ZM12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM9 4C9.55228 4 10 4.44772 10 5C10 5.55228 9.55228 6 9 6L6 5.999V9C6 9.51284 5.61396 9.93551 5.11662 9.99327L5 10C4.48716 10 4.06449 9.61396 4.00673 9.11662L4 9V5C4 4.48716 4.38604 4.06449 4.88338 4.00673L5 4H9ZM19 4L19.1166 4.00673C19.614 4.06449 20 4.48716 20 5V9L19.9933 9.11662C19.9355 9.61396 19.5128 10 19 10L18.8834 9.99327C18.386 9.93551 18 9.51284 18 9V5.999L15 6C14.4477 6 14 5.55228 14 5C14 4.44772 14.4477 4 15 4H19Z"
                  fill="currentColor"></path>
              </svg></div>
          </div>
        </li>
        <li class="header__list-item hover-item header__list-item--active hover-help-info" id="notification">
          <div class="icon-svg">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                class="injected-svg" data-src="resources/icons/notification_filled_24.svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <path
                  d="M11 18L11.0067 18.1166C11.0645 18.614 11.4872 19 12 19C12.5523 19 13 18.5523 13 18H11ZM12 5C10.4023 5 9.09634 6.24892 9.00509 7.82373L9 8L8.99056 8.00138C8.89629 11.3651 8.09198 14.0242 6.40008 16.0012H17.5999C15.908 14.0242 15.1037 11.3651 15.0094 8.00138L15 8C15 6.34315 13.6569 5 12 5ZM14.9949 18.1763C14.9037 19.7511 13.5977 21 12 21C10.3431 21 9 19.6569 9 18H4C3.44772 18 3 17.5523 3 17V16.5031C3 16.1866 3.15195 15.8913 3.39638 15.6902C5.51072 13.9508 6.97099 11.2863 6.97955 7.50623L7.06428 7.19616C7.44879 4.8169 9.51222 3 12 3C14.4877 3 16.5511 4.81682 16.9357 7.19599L17.0204 7.50623C17.029 11.2863 18.4893 13.9508 20.6036 15.6902C20.8481 15.8913 21 16.1866 21 16.5031V17C21 17.5523 20.5523 18 20 18H15L14.9949 18.1763Z"
                  fill="currentColor"></path>
                <path
                  d="M22.5 3C23.3284 3 24 2.32843 24 1.5C24 0.671573 23.3284 0 22.5 0C21.6716 0 21 0.671573 21 1.5C21 2.32843 21.6716 3 22.5 3Z"
                  fill="currentColor"></path>
              </svg></div>
          </div>
        </li>
        <li class="header__list-item hover-item hover-help-info" id="pomodoro">
          <div class="icon-svg">
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                class="injected-svg" data-src="resources/icons/timer_24.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path
                  d="M11.9999 5C16.4182 5 19.9999 8.58172 19.9999 13C19.9999 17.4183 16.4182 21 11.9999 21C7.58166 21 3.99994 17.4183 3.99994 13C3.99994 8.58172 7.58166 5 11.9999 5ZM11.9999 7C8.68623 7 5.99994 9.68629 5.99994 13C5.99994 16.3137 8.68623 19 11.9999 19C15.3136 19 17.9999 16.3137 17.9999 13C17.9999 9.68629 15.3136 7 11.9999 7ZM11.9999 9C12.5522 9 12.9999 9.44772 12.9999 10V14C12.9999 14.5523 12.5522 15 11.9999 15C11.4477 15 10.9999 14.5523 10.9999 14V10C10.9999 9.44772 11.4477 9 11.9999 9ZM13.9999 2C14.5522 2 14.9999 2.44772 14.9999 3C14.9999 3.55228 14.5522 4 13.9999 4H9.99994C9.44765 4 8.99994 3.55228 8.99994 3C8.99994 2.44772 9.44765 2 9.99994 2H13.9999ZM10.9999 4H12.9999V7H10.9999V4Z"
                  fill="currentColor"></path>
              </svg></div>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>
<style scoped>
.header {
  width: 100%;
}

.header__container {
  display: flex;
  height: 38px;
}

.header__container-item {
  flex-grow: 1;
}

.header__list {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: transparent;
  box-sizing: border-box;
  color: var(--text-gray-color);
  position: relative;
  transition: opacity .3s ease;
}

.header__list-item {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  margin-right: 16px;
  padding: 3px 0;
  border-radius: 5px;
  z-index: 1;
}

.non-active:hover::before {
  display: none;
}

.non-active:hover::after {
  display: none;
}

/* Тексты псевдоэлементов */
#habits:hover::before {
  content: "Привычки      Ctrl + Shift + H";
}

#search:hover::before {
  content: "Поиск     Ctrl + Shift + F";
}

#date:hover::before {
  content: "Переход к дате";
}

#filter:hover::before {
  content: "Фильтр задач";
}

#tags:hover::before {
  content: "Теги";
}

/* #break:hover::before {
  content: "Перерыв";
}

#zoom:hover::before {
  content: "Кратность";
} */

#notification:hover::before {
  content: "Уведомления";
}

#pomodoro:hover::before {
  content: "Помодоро     Alt + Shift + P";
}

.header__list-item--active {
  color: var(--icon-side-bar-color);
}
</style>