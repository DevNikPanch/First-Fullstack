<script setup lang="ts">
const navItems: string[] = ['Скачать', 'Веб-версия', 'Тарифы', 'Возможности', 'База знаний', 'Журнал PROВРЕМЯ', '🔥 Учебник']

const showBurgerContent = (): void => {
  const burgerMenu = document.getElementById('burger-menu');
  const overlay = document.getElementById('menu');
  burgerMenu?.classList.toggle("close");
  overlay?.classList.toggle("overlay");
}

</script>

<template>
  <header class="header">
    <div class="header__container">
      <div id="burger-menu" @click="showBurgerContent">
        <span></span>
      </div>

      <div id="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
#burger-menu {
  cursor: pointer;
  height: 40px;
  width: 40px;
  overflow: visible;
  position: relative;
  z-index: 5;
}

#burger-menu span,
#burger-menu span:before,
#burger-menu span:after {
  background: #fff;
  display: block;
  height: 4px;
  opacity: 1;
  position: absolute;
  transition: 0.3s ease-in-out;
  border-radius: 4px;
}

#burger-menu span:before,
#burger-menu span:after {
  content: "";
}

#burger-menu span {
  right: 0px;
  top: 13px;
  width: 24px;
  height: 2px;
}

#burger-menu span:before {
  left: 0px;
  top: -10px;
  width: 24px;
  height: 2px;
}

#burger-menu span:after {
  left: 0px;
  top: 10px;
  width: 24px;
  height: 2px;
}

#burger-menu.close span {
  transform: rotate(-45deg);
  top: 13px;
  width: 27px;
  background-color: #ffbe2f;
}

#burger-menu.close span:before {
  top: 0px;
  transform: rotate(90deg);
  width: 27px;
  background-color: #ffbe2f;
}

#burger-menu.close span:after {
  top: 0px;
  left: 0;
  transform: rotate(90deg);
  opacity: 0;
  width: 0;
}

#menu {
  z-index: 1;
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  height: 0;
  visibility: hidden;
  opacity: 0;
  text-align: center;
  padding-top: 20px;
  transition: all 0.3s ease-in-out;

}

#menu.overlay {
  visibility: visible;
  opacity: 1;
  padding-top: 100px;
  background: rgba(0, 0, 0, 0.5);
}

#menu li {
  list-style: none;
}

#menu a {
  color: #fff;
  display: block;
  font-size: 32px;
  margin-bottom: 30px;
  text-decoration: none;
}
</style>
