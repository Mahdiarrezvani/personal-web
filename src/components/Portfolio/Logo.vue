<template>
  <div class="image-container" v-for="(logo, index) in portfolios.logo" :key="index">
    <img :src="logo" />
  </div>
</template>

<script setup>
import { portfolios } from "../../mixins.js";
</script>
<style scoped></style>