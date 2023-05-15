<template>
  <div class="container-page404">
    <p class="back-history" @click="backHistory"><i class="fa-solid fa-arrow-left-long"></i></p>
    <p class="title">mockup project</p>
    <div>
      <p>X project website</p>
      <p>X client: person</p>
      <p>X langages: HTML,CSS,JAVASCRIPT,VUE website</p>
      <p>X preview: www.person.ir</p>
    </div>
    <img src="@/assets/404.png" />
  </div>
</template>
<script setup>
function backHistory () {
  history.back()
}
</script>
<style scoped>
.container-page404 {
  padding: 40px 20px;
  text-transform: capitalize;
  position: relative;
  text-align: center;
  color: #fff;
}
.back-history {
  position: absolute;
  cursor: pointer;
  font-size: 22px;
}
.title {
  color: var(--color-tem);
  font-size: 20px;
  font-weight: bold;
}
.container-page404 div {
  text-align: start;
  line-height: 30px;
  font-size: 14px;
  margin: 25px 0 15px;
}
img {
  width: 100%;
  height: 227px;
}
@media screen and (min-width: 768px) {
  img {
    width: 100%;
    height: 100%;
  }
}
@media screen and (min-width: 1200px) {
  .container-page404 {
    width: 900px;
    margin: 0 auto;
  }
  .back-history {
    left: -100px;
  }
  .title {
    font-size: 40px;
  }
  img {
    height: 100%;
  }
  .container-page404 div {
    font-size: 17px;
    margin: 60px 0 25px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: start;
    grid-gap: 30px;
  }
}
</style>