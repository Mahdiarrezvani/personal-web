<template>
  <div class="image-container" v-for="(logo, index) in portfolios.logo" :key="index">
    <img :src="logo" />
  </div>
  <div class="image-container" v-for="(video, index) in portfolios.video" :key="index">
    <img :src="video" />
  </div>
  <div class="image-container" v-for="(graphicDesign, index) in portfolios.graphicDesign" :key="index">
    <img :src="graphicDesign" />
  </div>
  <link rel="stylesheet" href="../../assets/style-portfolio/style.css" />
</template>

<script setup>
import { portfolios } from "../../mixins.js";
</script>
<style scoped></style>