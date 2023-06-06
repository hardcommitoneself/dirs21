<script setup>
import { computed } from "vue"
import { storeToRefs } from "pinia"
import DishList from "@/components/dish/DishList.vue"
import DishListItem from "@/components/dish/DishListItem.vue"
import BaseLoading from "@/components/base/BaseLoading.vue"
import BaseModal from "@/components/base/BaseModal.vue"
import BaseButton from "@/components/base/BaseButton.vue"
import { useDishStore } from "../../store"

const dishStore = useDishStore()

const { dishes, loading, currentDeleteDishId } = storeToRefs(dishStore)

const openDeleteModal = computed(() => currentDeleteDishId.value !== null)
</script>

<template>
  <!-- dishes list view -->
  <div class="p-5">
    <BaseLoading v-if="loading" />
    <DishList v-else>
      <DishListItem v-for="dish in dishes" :key="dish._id" :dish="dish" />
    </DishList>
  </div>

  <!-- delete confirmation modal -->
  <BaseModal title="Are you sure?" :open="openDeleteModal">
    <div class="flex items-center justify-center space-x-4">
      <BaseButton @click="dishStore.deleteDish()">Delete</BaseButton>
      <BaseButton @click="dishStore.setCurrentDeleteDishId(null)"
        >Cancel</BaseButton
      >
    </div>
  </BaseModal>
</template>
