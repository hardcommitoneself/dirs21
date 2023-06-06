<template>
  <!-- dishes list view -->
  <div class="p-5">
    <DishList>
      <DishListItem v-for="dish in dishes" :key="dish.id" :dish="dish" />
    </DishList>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import DishList from "@/components/dish/DishList.vue"
import DishListItem from "@/components/dish/DishListItem.vue"
import { useDishStore } from "../../store"

const dishStore = useDishStore()

const { dishes } = storeToRefs(dishStore)
</script>
