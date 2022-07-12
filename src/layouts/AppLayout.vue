<script setup lang="ts">
  import AppLayoutDefault from './AppLayoutDefault.vue'
  import { watch, ref, markRaw } from 'vue'
  import { useRoute } from 'vue-router'

  const layout = ref()
  const route = useRoute()
  watch(
    () => route.meta?.layout as string | undefined,
    async meta => {
      try {
        const component = meta && await import(/* @vite-ignore */ `./${meta}.vue`)
        layout.value = markRaw(component?.default || AppLayoutDefault)
      } catch (e) {
        layout.value = markRaw(AppLayoutDefault)
      }
    },
  )
</script>

<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<style>

</style>