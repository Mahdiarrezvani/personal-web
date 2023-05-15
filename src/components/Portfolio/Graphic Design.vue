<template>
  <div class="image-container" v-for="(graphicDesign, index) in portfolios.graphicDesign" :key="index">
    <img :src="graphicDesign" />
  </div>
</template>

<script setup>
import { portfolios } from "../../mixins.js";
</script>
<style scoped></style>