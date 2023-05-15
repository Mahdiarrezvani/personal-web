<template>
  <div class="box-colors">
    <span class="close-box-colors" @click="closeBoxColor"><i class="fa-solid fa-xmark"></i></span>
    <p class="color-tem" @click="sendColor" style="background-color: red"></p>
    <p class="color-tem" @click="sendColor" style="background-color: yellow"></p>
    <p class="color-tem" @click="sendColor" style="background-color: #a5df00"></p>
    <p class="color-tem" @click="sendColor" style="background-color: orange"></p>
    <p class="color-tem" @click="sendColor" style="background-color: #ff4e6c"></p>
    <p class="color-tem" @click="sendColor" style="background-color: #3accfd"></p>
  </div>
  <div class="container">
    <div class="tem-container">
      <!-- //! Icons Tem -->
      <!-- // ?!* از این ایکن ها هم میتونی استفاده کنید -->
      <!-- <p class="tem" @click="choesTem"><i class="fa-solid fa-paintbrush"></i></p>
      <p class="tem" @click="choesTem"><i class="fa-solid fa-palette"></i></p>
      <p class="tem" @click="choesTem"><i class="fa-solid fa-brush"></i></p> -->
      <p class="tem-icon" @click="choesTem"><i class="fa-solid fa-paint-roller"></i></p>
    </div>
    <div class="container-shair">
      <p class="shair-icon" @click="openShair"><i class="fa-sharp fa-solid fa-share-nodes"></i></p>
      <div class="social-media">
        <p class="faceBook"><a href="#"><i class="fa-brands fa-facebook-f"></i></a></p>
        <p class="telegram"><a href="#"><i class="fa-regular fa-paper-plane"></i></a></p>
        <p class="instagram"><a href="#"><i class="fa-brands fa-instagram"></i></a></p>
        <p class="twitter"><a href="#"><i class="fa-brands fa-twitter"></i></a></p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { inject, onMounted, provide, ref } from 'vue'
let isShair = ref(true)
let socialMedia = null
let telegram = null
let instagram = null
let faceBook = null
let twitter = null
let boxColors = null
let temColorElem = null
let setColor = inject('setColor')
onMounted(() => {
  temColorElem = document.querySelectorAll('.color-tem')
  boxColors = document.querySelector('.box-colors')
  socialMedia = document.querySelector('.social-media')
  telegram = document.querySelector('.telegram')
  instagram = document.querySelector('.instagram')
  faceBook = document.querySelector('.faceBook')
  twitter = document.querySelector('.twitter')
  // ! Tem Color Add To localStorage
  temColorElem.forEach(element => {
    element.addEventListener('click', function (e) {
      let choesColor = e.target.style.backgroundColor
      localStorage.setItem('color-tem', choesColor)
      setColor()
      closeBoxColor()
    })
  })
})
function openShair () {
  if (isShair.value) {
    isShair.value = false
    socialMedia.style.display = 'block'
    removeClass("close")
    addClass("open")
  } else {
    isShair.value = true
    removeClass("open")
    addClass("close")
  }
}
function addClass(type){
  telegram.classList.add(`${type}-telegram`)
  instagram.classList.add(`${type}-instagram`)
  faceBook.classList.add(`${type}-faceBook`)
  twitter.classList.add(`${type}-twitter`)
}
function removeClass(type){
  telegram.classList.remove(`${type}-telegram`)
  instagram.classList.remove(`${type}-instagram`)
  faceBook.classList.remove(`${type}-faceBook`)
  twitter.classList.remove(`${type}-twitter`)
}
function choesTem () {
  boxColors.style.display = 'flex'
}
function closeBoxColor () {
  boxColors.style.display = 'none'
}
</script>
<style scoped>
.container {
  position: relative;
  padding: 23px;
  display: flex;
  justify-content: space-between;
}
.container p {
  --size: 50px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  font-weight: bold;
  text-align: center;
  line-height: var(--size);
  font-size: 25px;
  color: aliceblue;
  background-color: black;
  cursor: pointer;
}
.box-colors {
  display: none;
  background-color: black;
  opacity: 0.8;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  z-index: 1;
  width: 300px;
  height: 120px;
  justify-content: space-around;
  border-radius: 7px;
  align-items: center;
}
.close-box-colors {
  color: white;
  position: absolute;
  right: -5px;
  top: 5px;
  font-size: 20px;
  cursor: pointer;
}
.box-colors p {
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.shair-icon {
  position: relative;
  color: var(--color-tem) !important;
  z-index: 1;
}
.social-media {
  display: none;
  position: absolute;
  top: 23px;
  z-index: -1;
}
.social-media p {
  background-color: rgba(50, 50, 50, 0.65);
  position: absolute;
}
.social-media p a {
  color: #fff;
  text-decoration: none;
}
/* // !Open Shair Animation */
.open-faceBook {
  animation: openFacebookMobile 0.5s linear forwards;
}
.open-telegram {
  position: absolute;
  animation: openTelegramMobile 0.5s linear forwards;
  animation-delay: 0.5s;
}
.open-instagram {
  animation: openInstagramMobile 0.5s linear forwards;
  animation-delay: 1s;
}
.open-twitter {
  animation: openTwiterMobile 0.5s linear forwards;
  animation-delay: 1.5s;
}
@keyframes openFacebookMobile {
  from {
    opacity: 0;
    top: 0;
  }
  to {
    opacity: 1;
    top: 55px;
  }
}
@keyframes openTelegramMobile {
  from {
    opacity: 0;
    top: 55px;
  }
  to {
    opacity: 1;
    top: 110px;
  }
}
@keyframes openInstagramMobile {
  from {
    opacity: 0;
    top: 110px;
  }
  to {
    opacity: 1;
    top: 165px;
  }
}
@keyframes openTwiterMobile {
  from {
    opacity: 0;
    top: 165px;
  }
  to {
    opacity: 1;
    top: 220px;
  }
}
/* //! Close Shair Animation */
.close-faceBook {
  top: 55px;
  animation: closeFacebookMobile 0.5s linear forwards;
  animation-delay: 1.5s;
}
.close-telegram {
  top: 110px;
  animation: closeTelegramMobile 0.5s linear forwards;
  animation-delay: 1s;
}
.close-instagram {
  top: 165px;
  animation: closeInstagramMobile 0.5s linear forwards;
  animation-delay: 0.5s;
}
.close-twitter {
  top: 220px;
  animation: closeTwiterMobile 0.5s linear forwards;
}
@keyframes closeFacebookMobile {
  from {
    opacity: 1;
    top: 55px;
  }
  to {
    opacity: 0;
    top: 0;
  }
}
@keyframes closeTelegramMobile {
  from {
    opacity: 1;
    top: 110px;
  }
  to {
    opacity: 0;
    top: 55px;
  }
}
@keyframes closeInstagramMobile {
  from {
    opacity: 1;
    top: 165px;
  }
  to {
    opacity: 0;
    top: 110px;
  }
}
@keyframes closeTwiterMobile {
  from {
    opacity: 1;
    top: 220px;
  }
  to {
    opacity: 0;
    top: 165px;
  }
}
@media screen and (min-width: 768px) {
  .box-colors {
    width: 450px;
  }
  .container {
    padding: 0;
    position: fixed;
    right: 40px;
    top: 35px;
    flex-direction: column;
  }
  .container p {
    --size: 53px;
    width: var(--size);
    height: var(--size);
    line-height: var(--size);
  }
  .shair-icon {
    margin-top: 18px;
  }
  .social-media {
    top: 71px;
    right: 53px;
  }
  /* // !Open Shair Animation */
  .open-faceBook {
    animation: openFacebook 0.5s linear forwards;
  }
  .open-telegram {
    animation: openTelegram 0.5s linear forwards;
    animation-delay: 0.5s;
  }
  .open-instagram {
    animation: openInstagram 0.5s linear forwards;
    animation-delay: 1s;
  }
  .open-twitter {
    animation: openTwiter 0.5s linear forwards;
    animation-delay: 1.5s;
  }
  @keyframes openFacebook {
    from {
      top: 0;
      right: 0;
    }
    to {
      opacity: 1;
      top: 0;
      right: 25px;
    }
  }
  @keyframes openTelegram {
    from {
      top: 0;
      right: 25px;
    }
    to {
      opacity: 1;
      top: 30px;
      right: 80px;
    }
  }
  @keyframes openInstagram {
    from {
      top: 30px;
      right: 80px;
    }
    to {
      opacity: 1;
      top: 65px;
      right: 25px;
    }
  }
  @keyframes openTwiter {
    from {
      top: 65px;
      right: 25px;
    }
    to {
      opacity: 1;
      top: 95px;
      right: 80px;
    }
  }
  /* //! Close Shair Animation */
  .close-faceBook {
    top: 0;
    right: 25px;
    animation: closeFacebook 0.5s linear forwards;
    animation-delay: 1.5s;
  }
  .close-telegram {
    top: 30px;
    right: 80px;
    animation: closeTelegram 0.5s linear forwards;
    animation-delay: 1s;
  }
  .close-instagram {
    top: 65px;
    right: 25px;
    animation: closeInstagram 0.5s linear forwards;
    animation-delay: 0.5s;
  }
  .close-twitter {
    top: 95px;
    right: 80px;
    animation: closeTwiter 0.5s linear forwards;
  }
  @keyframes closeFacebook {
    from {
      opacity: 1;
      top: 0;
      right: 25px;
    }
    to {
      opacity: 0;
      top: 0;
      right: 0;
    }
  }
  @keyframes closeTelegram {
    from {
      opacity: 1;
      top: 30px;
      right: 80px;
    }
    to {
      opacity: 0;
      top: 0;
      right: 25px;
    }
  }
  @keyframes closeInstagram {
    from {
      opacity: 1;
      top: 65px;
      right: 25px;
    }
    to {
      opacity: 0;
      top: 30px;
      right: 80px;
    }
  }
  @keyframes closeTwiter {
    from {
      opacity: 1;
      top: 95px;
      right: 80px;
    }
    to {
      opacity: 0;
      top: 65px;
      right: 25px;
    }
  }
}
</style>