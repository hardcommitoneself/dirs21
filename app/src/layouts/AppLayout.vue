<template>
  <TheHeader />
  <div class="mt-20 mb-12">
    <slot />
  </div>
  <TheFooter />
</template>

<script setup>
import TheFooter from "../components/TheFooter.vue"
import TheHeader from "../components/TheHeader.vue"
import { useDishStore } from "../store"

const dishStore = useDishStore()

// get all dishes
dishStore.getDishes()
</script>
