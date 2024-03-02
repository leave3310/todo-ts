<script setup lang="ts">
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from "flowbite-vue";
</script>

<template>
  <header>
    <fwb-navbar>
      <template #logo>
        <div class="text-xl text-red-400">TODO</div>
      </template>
      <template #default="{ isShowMenu }">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <fwb-navbar-link is-active link="#"> Logout </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
    </fwb-navbar>
  </header>
</template>
