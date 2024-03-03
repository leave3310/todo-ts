<script setup lang="ts">
import EffectWrap from "@/views/layouts/EffectWrap.vue";
</script>

<template>
  <div class="flex h-dvh flex-col">
    <main class="mx-auto flex w-full max-w-container flex-1 flex-col">
      <router-view />
    </main>
    <EffectWrap />
  </div>
</template>
