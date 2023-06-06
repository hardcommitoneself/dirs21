<script setup>
import { onMounted } from "vue"
import { useRoute } from "vue-router"
import { storeToRefs } from "pinia"
import { useDishStore } from "@/store"
import DishEditForm from "@/components/dish/DishEditForm.vue"
import BaseLoading from "@/components/base/BaseLoading.vue"

const route = useRoute()
const dishStore = useDishStore()

const { dish, loading } = storeToRefs(dishStore)

onMounted(async () => {
  await dishStore.getDish(route.params.id)
})
</script>

<template>
  <BaseLoading v-if="loading" />
  <DishEditForm v-else :is-editing="true" :dish="dish" />
</template>
