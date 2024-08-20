<template>
  <div class="admin-modules">
    <h2 class="mb-5">Modules</h2>
    <div class="row">
      <div class="col-10">
        <modules-view-edit
          v-if="displayEditForm"
          :type="typeEditForm"
          :data="active"
          @add="addItem"
          @edit="editItem"
          @close="hideEditForm"
        />
        <modules-view-read
          v-else
          :data="active"
          @edit="showEditForm"
          @delete="deleteItem"
        />
      </div>
      <div class="col-2">
        <modules-list
          :list="modules"
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
  getModules as getModulesApi,
  addModule as addModuleApi,
  editModule as editModuleApi,
  deleteModule as deleteModuleApi,
} from "@/services/admin";

import ModulesList from "@/components/admin/modules/ModulesList";
import ModulesViewRead from "@/components/admin/modules/ModulesViewRead";
import ModulesViewEdit from "@/components/admin/modules/ModulesViewEdit";

const store = useStore();

const active = ref();
const typeEditForm = ref("");
const displayEditForm = ref(false);

const modules = computed(() => store.getters["adminModules/modules"]);

watch(modules, () => {
  if (modules.value.length) {
    active.value = modules.value[0];
  }
});

onBeforeMount(async () => {
  await getModulesApi();
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
  await addModuleApi(data);
  await getModulesApi();
  hideEditForm();
};

const editItem = async (data) => {
  const res = await editModuleApi(data);
  console.log(res);
  await getModulesApi();
  hideEditForm();
};

const deleteItem = async (id) => {
  await deleteModuleApi(id);
  await getModulesApi();
};
</script>

<style></style>
