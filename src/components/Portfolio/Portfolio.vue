<template>
  <div class="main">
    <p class="title-main"><span></span>portfolio</p>
    <div class="container-portfolio">
      <nav>
        <router-link to="/portfolio/all">all</router-link>
        <router-link to="/portfolio/logo">logo</router-link>
        <router-link to="/portfolio/video">video</router-link>
        <router-link to="/portfolio/graphicDesign">graphic design</router-link>
      </nav>
      <div class="ShowPortfolio">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style>
/* // !! */
.image-container {
  width: 100%;
  height: 250px;
  margin-top: 20px;
  border-radius: 10px;
}
.image-container img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
@media screen and (min-width: 576px) {
  .image-container {
    width: 46%;
    display: inline-block;
    margin-left: 20px;
  }
}
@media screen and (min-width: 1200px) {
  .image-container {
    width: 31%;
    display: inline-block;
    margin-left: 20px;
  }
}
</style>
<style scoped>
/* // !! */
.title-main span {
  width: 150px;
}
.title-main span::after {
  right: -3px;
}
nav {
  display: none;
  text-align: center;
  margin-bottom: 50px;
}
nav a {
  text-transform: uppercase;
  margin-right: 50px;
  color: white;
  text-decoration: none;
  font-size: 23px;
  padding-bottom: 7px;
}
nav a.router-link-exact-active {
  border-bottom: 1px solid var(--color-tem);
}
@media screen and (min-width: 1200px) {
  .main {
    padding: 50px;
    background-color: #040404;
  }
  .title-main {
    text-align: start;
  }
  nav {
    display: block;
  }
}
</style>