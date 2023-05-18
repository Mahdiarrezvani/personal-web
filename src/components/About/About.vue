<template>
  <div class="main">
    <div class="about-container">
      <p class="title-main"><span></span>درباره من</p>
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
    <div class="title"><span>مهارت های من</span></div>
    <p class="border"></p>
    <div class="skills-container">
      <div class="skill" v-for="(skill, index) in skills" :key="index">
        <label>{{ skill.label }}</label>
        <div>
          <span class="show-percentage"><span :style="`transform: translate(${skill.range}%)`"></span></span>
          <span class="percentage">{{ skill.percentage }}%</span>
        </div>
      </div>
    </div>
    <div class="title"><span>تجربه و آموزش</span></div>
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
    label: 'تاریخ تولد',
    icon: `<i class="icon fa-sharp fa-solid fa-gift"></i>`,
    info: '1383.12.26'
  },
  {
    label: 'سن',
    icon: `<i class="icon fa-sharp fa-solid fa-calendar"></i>`,
    info: '18'
  },
  {
    label: 'آدرس',
    icon: '<i class="icon fa-solid fa-location-dot"></i>',
    info: 'ایران,نیشابور,شهرک بهداری'
  },
  {
    label: 'سرگرمی',
    icon: `<i class="icon fa-sharp fa-solid fa-gamepad"></i>`,
    info: 'پلی استیشن , مطالعه'
  },
  {
    label: 'دانشگاه',
    icon: `<i class="icon fa-sharp fa-solid fa-book"></i>`,
    info: 'دانشکده فنی مشهد'
  },
  {
    label: 'سطح',
    icon: `<i class="icon fa-sharp fa-solid fa-graduation-cap"></i>`,
    info: 'استاد'
  },
  {
    label: 'ایمیل',
    icon: '<i class="icon fa-solid fa-at"></i>',
    info: 'mahdiarrezvani59@gmail.com'
  },
  {
    label: 'شماره موبایل',
    icon: '<i class="icon fa-solid fa-phone"></i>',
    info: '+98 921 481 1234'
  }
])
let thingsIDid = ref([
  {
    icon: '<i class="fa-solid fa-heart"></i>',
    number: '555',
    text: 'مشتریان خوشحال'
  },
  {
    icon: '<i class="fa-solid fa-chart-column"></i>',
    number: '222',
    text: 'پروژه های تموم شده'
  },
  {
    icon: '<i class="fa-solid fa-arrow-down"></i>',
    number: '444',
    text: 'فایل های دانلود شده'
  },
  {
    icon: '<i class="fa-solid fa-code"></i>',
    number: '+99999',
    text: 'خطوط کد'
  }
])
let skills = ref([
  { label: 'javascript', percentage: 80, range: '' },
  { label: 'html', percentage: 90, range: '' },
  { label: 'css', percentage: 90, range: '' },
  { label: 'php', percentage: 65, range: '' },
  { label: 'wordpress', percentage: 50, range: '' },
  { label: 'reacct', percentage: 25, range: '' }
])
let educations = ref([
  {
    title: 'توسعه وب',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون است.',
    icon: '<i class="fa-solid fa-code"></i>',
    btn: '2018-الان'
  },
  {
    title: 'مدرک مهندسی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون است.',
    icon: '<span class="iconify" data-icon="material-symbols:engineering"></span>',
    btn: '2018-الان'
  },
  {
    title: 'کارشناس ارشد',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون است.',
    icon: 'JS',
    btn: '2018-الان'
  },
  {
    title: 'توسعه دهنده js',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون است.',
    icon: '<span class="iconify" data-icon="eos-icons:master"></span>',
    btn: '2018-الان'
  },
  {
    title: 'مدرک لیسانس',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون است.',
    icon: '<i class="fa-solid fa-code"></i>',
    btn: '2018-الان'
  },
  {
    title: 'مشاور',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون است.',
    icon: '<span class="iconify" data-icon="icon-park-solid:bachelor-cap-one"></span>',
    btn: '2018-الان'
  }
])
skills.value.forEach(function (skill) {
  skill.range = 100 - skill.percentage
})
</script>

<style scoped>
.main {
  margin: 0 10px;
}
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
.container-info {
  direction: rtl;
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
  position: relative;
  width: 100%;
  transform: translateY(14px);
  height: 30px;
}
.title span {
  right: 0;
  position: absolute;
  font-size: 27px;
  background-color: #040404;
  padding-left: 16px;
  height: 100%;
}
.border {
  margin-bottom: 40px;
  height: 1px;
  width: 98%;
  background-color: #333;
}
.skill {
  text-transform: uppercase;
  margin: 30px 0;
  direction: rtl;
}
.skill div {
  display: flex;
  margin: 15px 0 0;
}
.show-percentage {
  display: flex;
  margin-left: 12px;
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
.educations-contaiiner {
  direction: rtl;
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
  right: 13px;
  z-index: 1;
}
.border-column {
  width: 5px;
  height: 130px;
  transform: translate(40px, 47px);
  background-color: #333;
  margin-right: 80px;
}
.container-texts {
  margin: 10px 0 0 12px;
}
.title-education {
  font-size: 25px;
  font-weight: bold;
}
.text-education {
  margin: 15px 0 27px;
  color: #777;
  line-height: 30px;
  font-size: 18px;
}
.container-texts span {
  background-color: #222;
  padding: 10px 20px;
  text-transform: uppercase;
  color: #888;
  font-size: 16px;
  border-radius: 7px;
}
@media screen and (min-width: 360px) {
  .title {
    font-size: 23px;
    padding: 0;
  }
}
@media screen and (min-width: 768px) {
  .main {
    margin: 0 25px;
  }
  .border-column {
    width: 2px;
  }
  .title-main {
    text-align: start;
    margin-bottom: 50px;
  }
  .container-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    justify-content: space-between;
  }
  .things-i-did-icon {
    font-size: 37px;
  }
  .skills-container {
    display: grid;
  }
  .skill:nth-child(even) {
    grid-column: 2/3;
    margin-left: 60px;
  }
}
@media screen and (min-width: 992px) {
  .educations-contaiiner {
    display: grid;
  }
  .text-education {
    width: 80%;
  }
  .education:nth-child(even) {
    grid-column: 2/3;
    margin-left: 50px;
  }
}
@media screen and (min-width: 1200px) {
  .skill:nth-child(even) {
    margin-left: 120px;
  }
}
</style>