<template>
  <nav>
    <div class="menu-btn"><router-link @click="check($event)" to="/"><i class="fa-solid fa-house"></i><span class="menu-text">صحفه اصلی</span></router-link></div>
    <div class="menu-btn"><router-link @click="check($event)" to="/about"><i class="fa-solid fa-user"></i><span class="menu-text">درباره من</span></router-link></div>
    <div class="menu-btn"><router-link @click="check($event)" to="/portfolio/all"><i class="fa-sharp fa-solid fa-briefcase"></i><span class="menu-text">نمونه کارها</span></router-link></div>
    <div class="menu-btn"><router-link @click="check($event)" to="/blogs"><i class="fa-brands fa-blogger-b"></i><span class="menu-text">وبلاگ</span></router-link></div>
    <div class="menu-btn"><router-link @click="check($event)" to="/contact"><i class="fa-solid fa-phone"></i><span class="menu-text">تماس با ما</span></router-link></div>
  </nav>
  <router-view />
</template>
<script setup>
import { provide, ref } from 'vue'
// Set Color Tem template
let getColorTem = ref(localStorage.getItem('color-tem'))
function setColor () {
  getColorTem.value = localStorage.getItem('color-tem')
}
provide('setColor', setColor)
let show = ref(location.pathname)
function check (event) {
  show.value = event.target.pathname
}
</script>
<style>
/* // ! CSS all */
@import url('https://v1.fontapi.ir/css/Samim');
*:not(i) {
  font-family: Samim, sans-serif;
  --color-tem: v-bind(getColorTem);
  margin: 0;
  padding: 0;
}
.icon {
  color: var(--color-tem);
}
body {
  background-color: #040404;
}
.main {
  padding: 25px 25px 100px;
  color: white;
  text-transform: capitalize;
}
.title-main {
  direction: rtl;
  text-transform: uppercase;
  color: var(--color-tem);
  font-size: 27px;
  font-weight: bold;
  position: relative;
  text-align: center;
  margin-bottom: 70px;
}
.title-main span {
  position: absolute;
  bottom: -10px;
  width: 100%;
  height: 6px;
  background-image: linear-gradient(
    -35deg,
    transparent 8%,
    var(--color-tem) 8%,
    var(--color-tem) 92%,
    transparent 92%,
    transparent 100%
  );
}
.title-main span::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -8px;
  width: 12px;
  height: 100%;
  background-color: var(--color-tem);
  clip-path: polygon(65% 0, 100% 0, 33% 100%, 0 100%);
}
@media screen and (min-width: 768px) {
  .main {
    padding: 35px 100px 100px 30px !important;
  }
}
</style>

<style scoped>
.text-menu {
  display: block;
}
.menu-btn {
  position: relative;
}
.menu-text {
  display: none;
}
nav {
  position: fixed;
  background-color: #040404;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  z-index: 1;
}
nav div {
  width: 57px;
  height: 57px;
  line-height: 57px;
  text-align: center;
}
nav div a {
  position: relative;
  display: inline-block;
  color: white;
  font-size: 22px;
  text-decoration: none;
  width: 100%;
  border-radius: 50%;
  transition: 0.3s all linear;
}
nav a.router-link-exact-active {
  background-color: var(--color-tem);
  color: black;
  transform: scale(1.14);
}
span {
  transform: translateY(-110px);
  font-size: 19px;
  color: var(--color-tem);
}
nav a::after {
  content: '';
  position: absolute;
  width: 140%;
  height: 140%;
  border-radius: 50px;
  transition: 0.4s all linear;
  top: 90px;
  left: -10px;
}
nav a.router-link-exact-active::after {
  background-color: var(--color-tem);
  top: 62px;
}
nav a.router-link-exact-active span {
  color: var(--color-tem);
    top: 155px;
}
@media screen and (min-width: 768px) {
  .text-menu {
    display: none;
  }
  .menu-text {
    display: block;
    width: 100px;
    left: -25px;
    position: absolute;
    top: 145px;
    font-size: 15px;
    color: #fff;
  }
  nav {
    right: 0;
    top: 220px;
    width: 90px;
    height: 100%;
    flex-direction: column;
    justify-content: start;
  }
  nav div {
    margin-top: 40px;
  }
  nav div a {
    font-size: 25px;
  }
  nav a::after {
    left: 100px;
    top: -10px;
  }
  nav a.router-link-exact-active::after {
    background-color: var(--color-tem);
    left: 70px;
    top: -10px;
  }
}
</style>