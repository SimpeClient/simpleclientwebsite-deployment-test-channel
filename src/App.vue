<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
</script>

<template>
  <Header></Header>
  <RouterView />
</template>

<style scoped>
Header {
  margin-bottom: 70px;
}
</style>
