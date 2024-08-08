<template>
  <div class="classes-list">
    <ul v-if="list.length > 0" class="list-group list-group-flush">
      <li
        v-for="item of list"
        :key="`item-${item.name}`"
        class="list-group-item cursor-pointer"
        :class="{ active: active?.name === item.name }"
        @click="setActive(item)"
      >
        {{ item.title }}
      </li>
    </ul>
    <button class="btn" @click="add">Add</button>
  </div>
</template>

<script setup>
defineProps({
  list: Array,
  active: Object,
});

const emits = defineEmits(["setActive"]);

const setActive = (data) => {
  emits("setActive", data);
};

const add = () => {
  emits("add");
};
</script>

<style></style>
