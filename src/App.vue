<template>
  <main-layout>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <div class="background"></div>
  </main-layout>
</template>

<script setup>
import MainLayout from "@/layouts/index";
</script>

<style lang="scss">
@import "assets/styles/global.scss";
@import "assets/styles/variables.scss";
@import "assets/styles/overrides.scss";
</style>
