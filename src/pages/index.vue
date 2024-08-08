<template>
  <div class="index">
    <div class="container pt-5 pb-5">
      <h1 class="mb-5">CURAMA</h1>
      <div class="row">
        <div
          v-for="module of displayModules"
          :key="`module-${module.name}`"
          class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6"
        >
          <div
            class="card text-white bg-transparent mb-4 cursor-pointer"
            @click="goTo(module.name)"
          >
            <div class="card-body pl-0">
              <h5 class="card-title">{{ module.title }}</h5>
              <p class="card-text">{{ module.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import modules from "@/config/modules";

const router = useRouter();

// eslint-disable-next-line no-unused-vars
const displayModules = computed(() => modules);

const goTo = (name) => {
  router.push({
    name,
  });
};
</script>

<style></style>
