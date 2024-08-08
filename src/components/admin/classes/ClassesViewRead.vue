<template>
  <div v-if="data" class="classes-view-read">
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
    <code>{{ data.model }}</code>
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
