<template>
  <!-- dishes list view -->
  <div class="p-5">
    <BaseLoading v-if="loading" />
    <DishList v-else>
      <DishListItem v-for="dish in dishes" :key="dish.id" :dish="dish" />
    </DishList>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import DishList from "@/components/dish/DishList.vue"
import DishListItem from "@/components/dish/DishListItem.vue"
import BaseLoading from "@/components/base/BaseLoading.vue"
import { useDishStore } from "../../store"

const dishStore = useDishStore()

const { dishes, loading } = storeToRefs(dishStore)
</script>
