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
        <p class="full-name color-text">
          <span class="border"></span>من مهدیار رضوانی هستم
        </p>
        <p class="job">برنامه نویس وب</p>
        <p class="description">
          سلام! من <span class="color-text">مهدیار رضوانی</span> هستم. من یک
          توسعه دهنده وب هستم و بسیار مشتاق و متعهد به کارم هستم. با 20 سال
          تجربه به عنوان یک توسعه دهنده وب حرفه ای، مهارت ها و دانش لازم برای
          موفقیت پروژه شما را به دست آورده ام.
        </p>
        <div class="container-download">
          <button class="download">دانلود رزومه</button>
        </div>
        <p class="work-with-me">
          آیا شما علاقه من به همکاری با من هستید؟
          <a href="#">بیایید اکنون شروع کنیم</a>
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
  line-height: 30px;
}
.full-name {
  font-size: 25px;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 10px;
}
.border {
  position: absolute;
  width: 220px;
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
  left: -5px;
  background-image: linear-gradient(
    -40deg,
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
  font-size: 20px;
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
  font-size: 19px;
  padding: 15px 60px;
  background-color: transparent;
  border: none;
  position: relative;
  cursor: pointer;
}
.work-with-me {
  font-size: 20px;
}
.work-with-me a {
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  display: block;
  text-decoration: none;
  color: var(--color-tem);
}
@media screen and (min-width: 360px) {
  .container-texts {
    margin: 0;
  }
  .description {
    font-size: 17px;
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
    direction: rtl;
    width: 56%;
    display: block;
  }
  .image-mobile {
    display: none;
  }
  .container-texts {
    margin: 80px 370px 0 0;
    width: 450px;
    text-align: start;
  }
  .full-name {
    font-size: 37px;
  }
  .border {
    width: 280px;
  }
  .job {
    font-size: 30px;
  }
  .download {
    padding: 13px 50px;
  }
  .work-with-me {
    position: absolute;
    bottom: 180px;
  }
  .work-with-me a {
    display: inline-block;
  }
}
</style>