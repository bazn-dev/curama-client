<template>
  <div class="classes-view-edit">
    <div class="d-flex justify-content-between">
      <h3>{{ titleForm }}</h3>
      <div class="d-flex">
        <span class="material-symbols-outlined btn-icon" @click="close"
          >close</span
        >
      </div>
    </div>
    <div class="mb-3">
      <input
        v-model="title"
        type="text"
        class="form-control"
        placeholder="name@example.com"
      />
    </div>
    <div class="mb-3">
      <input
        v-model="name"
        type="text"
        class="form-control"
        placeholder="name@example.com"
      />
    </div>
    <div class="mb-3">
      <textarea v-model="description" class="form-control" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <textarea v-model="model" class="form-control" rows="3"></textarea>
    </div>
    <div class="d-flex justify-content-end">
      <button class="btn" @click="save">{{ titleForm }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";

const props = defineProps({
  type: String,
  data: Object,
});

const emits = defineEmits(["add", "edit", "close"]);

const title = ref("");
const name = ref("");
const description = ref("");
const model = ref("");

const titleForm = computed(
  () => props.type.charAt(0).toUpperCase() + props.type.slice(1),
);

onBeforeMount(() => {
  if (props.type === "edit") {
    title.value = props.data.title;
    name.value = props.data.name;
    description.value = props.data.description;
    model.value = JSON.stringify(props.data.model);
  } else {
    title.value = "";
    name.value = "";
    description.value = "";
    model.value = "";
  }
});

const save = () => {
  emits(props.type, {
    _id: props.data._id ?? null,
    title: title.value,
    name: name.value,
    description: description.value,
    model: JSON.parse(model.value),
  });
};

const close = () => {
  emits("close");
};
</script>

<style></style>
