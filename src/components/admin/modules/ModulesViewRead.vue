<template>
  <div v-if="data" class="modules-view-read">
    <div class="d-flex justify-content-between">
      <h3>{{ data.title }}</h3>
      <div class="d-flex">
        <span class="material-symbols-outlined btn-icon" @click="edit"
          >edit</span
        >
        <span class="material-symbols-outlined btn-icon" @click="deleteItem"
          >delete</span
        >
      </div>
    </div>
    <div>{{ data.name }}</div>
    <p>{{ data.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});

const emits = defineEmits(["edit"]);

const edit = () => {
  emits("edit");
};

const deleteItem = () => {
  emits("delete", props.data._id);
};
</script>

<style></style>
