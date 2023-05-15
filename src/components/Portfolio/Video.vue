<template>
  <div class="image-container" v-for="(video, index) in portfolios.video" :key="index">
    <img :src="video" />
  </div>
</template>

<script setup>
import { portfolios } from "../../mixins.js";
</script>
<style scoped></style>