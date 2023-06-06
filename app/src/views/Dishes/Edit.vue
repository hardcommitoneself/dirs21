<script setup>
import { storeToRefs } from "pinia"
import { useRoute } from "vue-router"
import DishEditForm from "../../components/dish/DishEditForm.vue"
import BaseLoading from "../../components/base/BaseLoading.vue"
import { useDishStore } from "../../store"
import { onMounted } from "vue"

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
