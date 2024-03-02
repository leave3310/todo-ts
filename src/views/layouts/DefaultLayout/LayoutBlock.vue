<script setup lang="ts">
import HeaderBlock from "@/views/layouts/DefaultLayout/HeaderBlock.vue";
import EffectWrap from "@/views/layouts/EffectWrap.vue";
</script>

<template>
  <div class="flex h-dvh flex-col">
    <HeaderBlock />
    <main class="flex flex-1">
      <router-view />
    </main>
    <EffectWrap />
  </div>
</template>
