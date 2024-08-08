<template>
  <div class="admin-classes">
    <h2 class="mb-5">Classes</h2>
    <div class="row">
      <div class="col-10">
        <classes-view-edit
          v-if="displayEditForm"
          :type="typeEditForm"
          :data="active"
          @add="addItem"
          @edit="editItem"
          @close="hideEditForm"
        />
        <classes-view-read
          v-else
          :data="active"
          @edit="showEditForm"
          @delete="deleteItem"
        />
      </div>
      <div class="col-2">
        <classes-list
          :list="classes"
          :active="active"
          @setActive="setActive"
          @add="showAddForm"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount, watch } from "vue";
import { useStore } from "vuex";
import {
  getClasses as getClassesApi,
  addClass as addClassApi,
  editClass as editClassApi,
  deleteClass as deleteClassApi,
} from "@/services/admin";

import ClassesList from "@/components/admin/classes/ClassesList";
import ClassesViewRead from "@/components/admin/classes/ClassesViewRead";
import ClassesViewEdit from "@/components/admin/classes/ClassesViewEdit";

const store = useStore();

const active = ref();
const typeEditForm = ref("");
const displayEditForm = ref(false);

const classes = computed(() => store.getters["adminClasses/classes"]);

watch(classes, () => {
  if (classes.value.length) {
    active.value = classes.value[0];
  }
});

onBeforeMount(async () => {
  await getClassesApi();
});

const setActive = (data) => {
  active.value = data;
};

const showAddForm = () => {
  typeEditForm.value = "add";
  displayEditForm.value = true;
};

const showEditForm = () => {
  typeEditForm.value = "edit";
  displayEditForm.value = true;
};

const hideEditForm = () => {
  typeEditForm.value = "";
  displayEditForm.value = false;
};

const addItem = async (data) => {
  await addClassApi(data);
  await getClassesApi();
  hideEditForm();
};

const editItem = async (data) => {
  const res = await editClassApi(data);
  console.log(res);
  await getClassesApi();
  hideEditForm();
};

const deleteItem = async (id) => {
  await deleteClassApi(id);
  await getClassesApi();
};
</script>

<style></style>
