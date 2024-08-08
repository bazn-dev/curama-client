<template>
  <div class="admin-layout">
    <div class="admin-layout__sidebar pt-5 pb-5">
      <div class="admin-layout__sidebar-logo px-2 cursor-pointer">
        <i class="material-icons">admin_panel_settings</i>
      </div>
      <div class="admin-layout__sidebar-list mt-5">
        <div
          v-for="menuItem of sidebarMenuItems"
          :key="`admin-sidebar-menu-item-${menuItem.name}`"
          class="admin-layout__sidebar-item px-2 mb-5 cursor-pointer"
          @click="goTo(menuItem.route)"
        >
          <span class="material-symbols-outlined">{{ menuItem.icon }}</span>
        </div>
      </div>
    </div>
    <div class="admin-layout__body pt-5 pb-5 px-5">
      <div class="w-100">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import sidebar from "@/config/admin/sidebar";

const router = useRouter();

// eslint-disable-next-line no-unused-vars
const sidebarMenuItems = computed(() => sidebar);

const goTo = (name) => {
  router.push({
    name,
  });
};
</script>

<style lang="scss">
.admin-layout {
  &__sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__body {
    width: calc(100% - 60px);
    margin-left: 60px;
  }
}
</style>
