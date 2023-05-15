<template>
  <nav>
    <div>
      <router-link @click="check($event)" to="/"><i class="fa-solid fa-house"></i></router-link>
      <span class="text-menu" v-if="show == '/'">Home</span>
    </div>
    <div>
      <router-link @click="check($event)" to="/about"><i class="fa-solid fa-user"></i></router-link>
      <span class="text-menu" v-if="show == '/about'">About</span>
    </div>
    <div>
      <router-link @click="check($event)" to="/portfolio/all"><i class="fa-sharp fa-solid fa-briefcase"></i></router-link>
      <span class="text-menu" v-if="show == '/portfolio/all'">Portfolio</span>
    </div>
    <div>
      <router-link @click="check($event)" to="/blogs"><i class="fa-brands fa-blogger-b"></i></router-link>
      <span class="text-menu" v-if="show == '/blogs'">blog</span>
    </div>
    <div>
      <router-link @click="check($event)" to="/contact"><i class="fa-solid fa-phone"></i></router-link>
      <span class="text-menu" v-if="show == '/contact'">contact</span>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');
*:not(i) {
  font-family: 'Cabin', sans-serif !important;
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
  right: -10px;
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
@media screen and (min-width: 768px) {
  .text-menu {
    display: none;
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
    margin-top: 30px;
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