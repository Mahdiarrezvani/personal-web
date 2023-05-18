<template>
  <div class="main">
    <div class="said-bar">
      <p class="title-main"><span></span>در تماس باشید</p>
      <div>
        <p class="title">خجالتی نباش!</p>
        <p class="description">
          با خیال راحت با من در تماس باشید. من همیشه آماده بحث در مورد پروژه های
          جدید، ایده های خلاقانه یا فرصت هایی هستم تا بخشی از چشم اندازهای شما
          باشم.
        </p>
      </div>
      <div class="contacts-me" v-for="(contact, index) in contactsMe" :key="index">
        <span class="icon"><i v-html="contact.icon"></i></span>
        <div>
          <span class="title-form">{{ contact.title }}</span>
          <span class="text-form">{{ contact.text }}</span>
        </div>
      </div>
    </div>
    <form action="#" class="form">
      <input type="text" class="name" placeholder="نام" />
      <input type="email" class="email" placeholder="ایمیل" />
      <input type="text" class="subject" placeholder="موضوع" />
      <input type="text" class="message" placeholder="پیام" />
      <button class="submit">ارسال پیام</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let contactsMe = ref([
  {
    icon: '<i class="fa-solid fa-location-dot"></i>',
    title: 'نقطه آدرس',
    text: 'ایران,نیشابور,خیابان نور,پلاک 286'
  },
  {
    icon: '<i class="fa-solid fa-envelope"></i>',
    title: 'به من ایمیل بزنید',
    text: 'Email@gmail.con'
  },
  {
    icon: '<i class="fa-solid fa-phone"></i>',
    title: 'با من تماس بگیر',
    text: '+98 921 481 1234'
  }
])
;('')
</script>

<style scoped>
.main {
  direction: rtl;
}
.title-main {
  text-align: start;
}
.title-main span {
  width: 150px;
}
.title-main span::after {
  left: -2px;
}
.title {
  font-size: 27px;
  font-weight: bold;
}
.description {
  font-size: 18px;
  margin: 20px 0;
  color: #555;
}
.contacts-me {
  display: flex;
  margin: 20px 0;
}
.contacts-me div span {
  display: block;
  margin-right: 13px;
}
.icon {
  font-size: 27px;
}
.title-form {
  font-size: 20px;
  text-transform: uppercase;
}
.text-form {
  margin-top: 10px;
  color: #555;
}
.form input {
  padding-right: 10px;
  color: rgb(150, 150, 150);
  font-size: 14px;
  width: 98%;
  background-color: rgb(20, 20, 20);
  border: none;
  border-radius: 7px;
  height: 50px;
  margin: 10px 0;
}
.message {
  padding-bottom: 100px;
}
.submit {
  background-image: linear-gradient(
    -70deg,
    transparent 12%,
    var(--color-tem) 12%,
    var(--color-tem) 88%,
    transparent 88%,
    transparent 100%
  );
  margin: 40px 0 60px;
  font-size: 16px;
  text-transform: uppercase;
  padding: 12px 35px;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
@media screen and (min-width: 768px) {
  .name {
    width: 47% !important;
    display: inline-block;
  }
  .email {
    display: inline-block;
    width: 47% !important;
    margin-right: 2.5% !important;
  }
}
@media screen and (min-width: 1200px) {
  .main {
    display: flex;
  }
  .said-bar {
    width: 27%;
    margin-right: 50px;
  }
  .description {
    margin-left: 50px;
    line-height: 21px;
  }
  .contacts-me {
    margin: 40px 0;
  }
  .icon {
    font-size: 33px;
  }
  .text-form {
    font-size: 17px;
  }
  .form {
    margin-top: 150px;
    width: 63%;
  }
  .form input {
    height: 60px;
  }
  .message {
    padding-bottom: 180px;
  }
  .submit {
    margin: 20px 0;
    font-size: 17px;
    font-weight: bold;
    padding: 15px 43px;
  }
}
</style>
