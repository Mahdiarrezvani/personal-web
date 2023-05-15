<template>
  <Shair />
  <div class="main">
    <div class="left">
      <div class="bgColor">
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
      </div>
    </div>
    <div class="right">
      <!--// ! عکس پروفایل -->
      <img src="" alt="" class="image-mobile" />
      <!--  -->
      <div class="container-texts">
        <p class="full-name color-text"><span class="border"></span>i'm mahdiar rezvani</p>
        <p class="job">web developer</p>
        <p class="description">
          Hi! My name is <span class="color-text">Mahdiar Rezvani</span>. I am
          Developer, and I'm very passionate and dedicated to my work. With 18
          years experience as a professional Web Developer, i have acquired
          skils and knowledge necessary to make your project a success.
        </p>
        <div class="container-download">
          <button class="download">Download CV</button>
        </div>
        <p class="work-with-me">Are you interested working with me? <a href="#">Let's started now</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Shair from './Shair&Tem.vue'
</script>

<style scoped>
.main {
  height: 100vh;
  padding: 0 !important;
}
.color-text {
  color: var(--color-tem);
}
.left {
  display: none;
}
.image-mobile {
  display: block;
  margin: auto;
  width: 200px;
  height: 200px;
  background-color: var(--color-tem);
  border-radius: 50%;
  margin-bottom: 30px;
}
.container-texts {
  text-align: center;
  margin: 0 35px;
}
.full-name {
  font-size: 25px;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
}
.border {
  position: absolute;
  width: 280px;
  height: 6px;
  bottom: -10px;
  background-image: linear-gradient(
    -35deg,
    transparent 4%,
    var(--color-tem) 4%,
    var(--color-tem) 96%,
    transparent 96%,
    transparent 100%
  );
}
.border::after {
  content: '';
  position: absolute;
  width: 11px;
  height: 100%;
  right: -5px;
  background-image: linear-gradient(
    -35deg,
    transparent 35%,
    var(--color-tem) 35%,
    var(--color-tem) 65%,
    transparent 65%,
    transparent 100%
  );
}
.job {
  font-weight: bold;
  margin: 30px 0;
  font-size: 22px;
}
.description {
  font-size: 18px;
  color: #888;
}
.download {
  background-image: linear-gradient(
    -65deg,
    transparent 12%,
    var(--color-tem) 12%,
    var(--color-tem) 88%,
    transparent 88%,
    transparent 100%
  );
  margin: 40px 0 60px;
  font-size: 17px;
  padding: 15px 60px;
  background-color: transparent;
  border: none;
  position: relative;
  cursor: pointer;
}
.work-with-me {
  font-size: 17px;
}
.work-with-me a {
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  display: block;
  text-decoration: none;
  color: var(--color-tem);
}
@media screen and (max-width: 360px) {
  .container-texts {
    margin: 0;
  }
  .border {
    width: 260px;
  }
  .description {
    font-size: 15px;
    margin: 0 30px;
  }
}
@media screen and (min-width: 768px) {
  .main {
    padding-top: 50px !important;
  }
  .container-texts {
    margin: 0 150px;
  }
}
@media screen and (min-width: 1200px) {
  .main {
    display: flex;
    padding-top: 0 !important;
  }
  .left {
    display: block;
    width: 45%;
    height: 100%;
    overflow: hidden;
  }
  .bgColor {
    transform: translate(-90px, -55px) rotate(-8.5deg);
    width: 100%;
    height: 100%;
  }
  .bgColor div {
    display: inline-block;
    height: 120%;
  }
  .div1 {
    width: 87%;
    background-color: var(--color-tem);
  }
  .div2 {
    width: 6.5%;
    background-color: var(--color-tem);
    opacity: 0.6;
  }
  .div3 {
    width: 5.5%;
    background-color: var(--color-tem);
    opacity: 0.4;
  }
  .right {
    width: 56%;
    display: block;
  }
  .image-mobile {
    display: none;
  }
  .container-texts {
    margin: 80px 370px 0 0;
    text-align: start;
  }
  .full-name {
    font-size: 30px;
  }
  .job {
    font-size: 26px;
  }
  .download {
    padding: 13px 50px;
  }
  .work-with-me {
    position: absolute;
    bottom: 180px;
  }
  .work-with-me a {
    font-size: 17px;
    display: inline-block;
  }
}
</style>