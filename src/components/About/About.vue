<template>
  <div class="main">
    <div class="about-container">
      <p class="title-main"><span></span>about</p>
      <div class="container-info">
        <p class="information" v-for="(info, index) in informationes" :key="index">
          <span v-html="info.icon" class="icon"></span>
          <span class="specifiation">{{ info.label }}:</span>
          <span class="info">{{ info.info }}</span>
        </p>
      </div>
      <div class="things-i-did-container">
        <div class="things-i-did" v-for="(info, index) in thingsIDid" :key="index">
          <p class="things-i-did-icon"><i v-html="info.icon"></i></p>
          <p class="number">{{ info.number }}</p>
          <p class="text">{{ info.text }}</p>
        </div>
      </div>
    </div>
    <div class="title">my skills</div>
    <p class="border"></p>
    <div class="skills-container">
      <div class="skill" v-for="(skill, index) in skills" :key="index">
        <label>{{ skill.label }}</label>
        <div>
          <span class="show-percentage"><span :style="`transform: translate(-${skill.range}%)`"></span></span>
          <span class="percentage">{{ skill.percentage }}%</span>
        </div>
      </div>
    </div>
    <div class="title">experince & education</div>
    <p class="border"></p>
    <div class="educations-contaiiner">
      <div class="education" v-for="(education, index) in educations" :key="index">
        <span class="icon" v-html="education.icon"></span>
        <span class="border-column"></span>
        <div class="container-texts">
          <p class="title-education">{{ education.title }}</p>
          <p class="text-education">{{ education.text }}</p>
          <span>{{ education.btn }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let informationes = ref([
  {
    label: 'birthday',
    icon: `<i class="icon fa-sharp fa-solid fa-gift"></i>`,
    info: '00 , 00 , 0000'
  },
  {
    label: 'age',
    icon: `<i class="icon fa-sharp fa-solid fa-calendar"></i>`,
    info: '20'
  },
  {
    label: 'location',
    icon: '<i class="icon fa-solid fa-location-dot"></i>',
    info: '44 place, pisno,USA'
  },
  {
    label: 'interests',
    icon: `<i class="icon fa-sharp fa-solid fa-gamepad"></i>`,
    info: 'playstation, reading'
  },
  {
    label: 'study',
    icon: `<i class="icon fa-sharp fa-solid fa-book"></i>`,
    info: 'univercity of chicago'
  },
  {
    label: 'degree',
    icon: `<i class="icon fa-sharp fa-solid fa-graduation-cap"></i>`,
    info: 'master'
  },
  {
    label: 'mail',
    icon: '<i class="icon fa-solid fa-at"></i>',
    info: 'example@gmail.com'
  },
  {
    label: 'phone',
    icon: '<i class="icon fa-solid fa-phone"></i>',
    info: '+77 022 177 05 05'
  }
]);
let thingsIDid = ref([
  {
    icon: '<i class="fa-solid fa-heart"></i>',
    number: '555',
    text: 'happy clients'
  },
  {
    icon: '<i class="fa-solid fa-chart-column"></i>',
    number: '222',
    text: 'projects finished'
  },
  {
    icon: '<i class="fa-solid fa-arrow-down"></i>',
    number: '444',
    text: 'fils downlaoded'
  },
  {
    icon: '<i class="fa-solid fa-code"></i>',
    number: '777',
    text: 'lines of code'
  }
]);
let skills = ref([
  { label: 'javascript', percentage: 80, range: '' },
  { label: 'html', percentage: 90, range: '' },
  { label: 'css', percentage: 90, range: '' },
  { label: 'php', percentage: 65, range: '' },
  { label: 'wordpress', percentage: 50, range: '' },
  { label: 'reacct', percentage: 25, range: '' }
]);
let educations = ref([
  {
    title: 'WEB DEVELOPER',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.',
    icon: '<i class="fa-solid fa-code"></i>',
    btn: '2018-present'
  },
  {
    title: 'ENGINEERING DEGREE',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.',
    icon: '<span class="iconify" data-icon="material-symbols:engineering"></span>',
    btn: '2018-present'
  },
  {
    title: 'JS DEVELOPER',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.',
    icon: 'JS',
    btn: '2018-present'
  },
  {
    title: 'MASTER DEGREE',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.',
    icon: '<span class="iconify" data-icon="eos-icons:master"></span>',
    btn: '2018-present'
  },
  {
    title: 'CONSULTANT',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.',
    icon: '<i class="fa-solid fa-code"></i>',
    btn: '2018-present'
  },
  {
    title: 'BACHELOR DEGREE',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea numquam nostrumquaerat in rerum ullam earum dolore, enim quod reprehenderit eligendimolestiae sit quasi architecto quis aperiam dolor iure illum.',
    icon: '<span class="iconify" data-icon="icon-park-solid:bachelor-cap-one"></span>',
    btn: '2018-present'
  }
]);
skills.value.forEach(function (skill) {
  skill.range = 100 - skill.percentage
})
</script>

<style scoped>
.specifiation {
  margin: 0 10px 0 7px;
}
.title-main span {
  width: 90px;
}
.information {
  font-size: 17px;
  margin-top: 30px;
}
.info {
  color: #777;
}
.things-i-did-container {
  margin: 50px 0;
  display: grid;
  grid-template-rows: repeat(1fr, 3);
}
.things-i-did {
  margin: 40px 10px;
  text-align: center;
  font-size: 27px;
}
.things-i-did:nth-child(even) {
  grid-row: 2/3;
}
.things-i-did-icon {
  font-size: 30px;
}
.number {
  color: var(--color-tem);
  margin: 7px 0;
}
.text {
  font-size: 22px;
}
.title {
  background-color: #040404;
  display: inline-block;
  font-size: 25px;
  margin-left: 25px;
  z-index: 1;
  transform: translateY(14px);
  padding: 0 15px;
}
.border {
  margin-bottom: 40px;
  height: 1px;
  width: 98%;
  background-color: #333;
}
.skill {
  margin: 30px 0;
  text-transform: uppercase;
}
.skill div {
  display: flex;
  margin: 15px 30px 0 0;
}
.show-percentage {
  display: flex;
  margin-right: 12px;
  width: 100%;
  height: 13px;
  border-radius: 5px;
  background-color: #222;
  overflow: hidden;
}
.show-percentage span {
  content: '';
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background-color: var(--color-tem);
}
.education {
  position: relative;
  margin: 55px 0;
  display: flex;
}
.education .icon {
  position: absolute;
  text-align: center;
  line-height: 58px;
  height: 55px;
  width: 55px;
  background-color: var(--color-tem);
  border-radius: 50%;
  font-size: 23px;
  color: black;
  font-weight: bold;
  left: -11px;
  z-index: 1;
}
.border-column {
  width: 2px;
  height: 130px;
  transform: translate(-24px, 47px);
  background-color: #333;
  margin-left: 40px;
}
.container-texts {
  margin: 10px 0 0 12px;
}
.title-education {
  font-size: 23px;
  font-weight: bold;
}
.text-education {
  margin: 15px 0 27px;
  color: #777;
}
.container-texts span {
  background-color: #222;
  padding: 10px 20px;
  text-transform: uppercase;
  color: #888;
  font-size: 14px;
  border-radius: 7px;
}
@media screen and (max-width: 360px) {
  .title {
    font-size: 23px;
    padding: 0;
  }
}
/* @media screen and (min-width: 576px) {} */
@media screen and (min-width: 768px) {
  .title-main {
    text-align: start;
    margin-bottom: 50px;
  }
  .container-info {
    display: grid;
    grid-template-columns: repeat(1fr, 3);
  }
  .information {
    font-size: 18px;
    margin-top: 23px;
  }
  .information:nth-child(even) {
    grid-column: 2/3;
  }
  .things-i-did-container {
    display: flex;
    justify-content: space-around;
  }
  .things-i-did-icon {
    font-size: 37px;
  }
  .skills-container {
    display: grid;
    grid-template-columns: repeat(1fr, 3);
  }
  .skill:nth-child(even) {
    grid-column: 2/3;
    margin-right: 0;
  }
  .skill {
    margin-right: 70px;
  }
}
@media screen and (min-width: 992px) {
  .educations-contaiiner {
    display: grid;
    grid-template-columns: repeat(1fr, 3);
  }
  .education:nth-child(even) {
    grid-column: 2/3;
    margin-left: 50px;
  }
  .education {
    margin: 50px 0;
  }
  .container-info {
    width: 70%;
  }
}
@media screen and (min-width: 1200px) {
  .main {
    padding-right: 13%;
    padding: 70px 13% 0 30px;
  }
  .container-info {
    width: 60%;
  }
}
</style>