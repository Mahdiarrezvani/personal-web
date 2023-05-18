<template>
  <div class="main">
    <p class="title-main"><span></span>وبلاگ ها</p>
    <div class="blogs-container">
      <div class="blog" v-for="(blog, index) in blogs" :key="index">
        <img src="@/assets/blog/image1.png" v-if="index == 0" />
        <img src="@/assets/blog/image2.png" v-else-if="index == 1" />
        <img src="@/assets/blog/image3.png" v-else-if="index == 2" />
        <img src="@/assets/blog/image4.png" v-else-if="index == 3"  />
        <img src="@/assets/blog/image5.png" v-else-if="index == 4" />
        <img src="@/assets/blog/image6.png" v-else-if="index == 5" />
        <p class="title">{{ blog.title }}</p>
        <p class="text">{{ blog.text }}</p>
        <div>
          <span class="person"><i class="icon fa-solid fa-user"></i>{{ blog.person }}</span>
          <span class="date"><i class="icon fa-sharp fa-solid fa-calendar"></i>{{ blog.date }}</span>
          <span class="work"><i class="icon fa-solid fa-user"></i>{{ blog.work }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { blogs } from '../../mixins.js'
</script>

<style scoped>
.title-main span {
  width: 70px;
}
.blogs-container {
  direction: rtl;
}
.blog img {
  width: 100%;
  height: 220px;
  border-radius: 10px;
  margin-top: 35px;
}
.title {
  margin: 7px 0;
  font-size: 25px;
}
.text {
  color: #777;
  margin-bottom: 15px;
  font-size: 17px;
  line-height: 30px;
}
.blog span {
  margin-right: 18px;
  font-size: 15px;
}
i {
  margin-left: 6px;
}
@media screen and (min-width: 576px) {
  .main {
    padding: 25px 100px;
  }
}
@media screen and (min-width: 768px) {
  .blogs-container {
    margin-right: 50px;
  }
  .main {
    padding: 25px;
  }
  .title-main {
    text-align: start;
    margin-bottom: 50px;
  }
  .blog {
    width: 45%;
    display: inline-block;
    margin: 0 13px;
  }
}
@media screen and (min-width: 1200px) {
  .blog {
    width: 30.8%;
  }
}
</style>