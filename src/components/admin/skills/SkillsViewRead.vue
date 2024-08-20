<template>
  <div v-if="data" class="skills-view-read">
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
    <div>{{ data.status }}</div>
    <div>{{ data.api }}</div>
    <div>{{ data.method }}</div>
    <p>{{ data.description }}</p>

    <h5>Parameters</h5>
    <div>{{ data.parameters }}</div>
    <!--    <table class="table table-borderless">-->
    <!--      <thead>-->
    <!--        <tr>-->
    <!--          <th scope="col">Parameter</th>-->
    <!--          <th scope="col">Type</th>-->
    <!--        </tr>-->
    <!--      </thead>-->
    <!--      <tbody>-->
    <!--        <tr v-for="key in Object.keys(data.model)" :key="`key-${key}`">-->
    <!--          <td>{{ key }}</td>-->
    <!--          <td>{{ data.model[key] }}</td>-->
    <!--        </tr>-->
    <!--      </tbody>-->
    <!--    </table>-->

    <h5>Example response</h5>
    <code>{{ data.response }}</code>
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
