<script setup>
import { storeToRefs } from "pinia"
import { useDishStore } from "@/store"
import DishList from "@/components/dish/DishList.vue"
import DishListItem from "@/components/dish/DishListItem.vue"
import BaseLoading from "@/components/base/BaseLoading.vue"
import BaseModal from "@/components/base/BaseModal.vue"
import BaseButton from "@/components/base/BaseButton.vue"

const dishStore = useDishStore()

const { loading, openDeleteModal, searchResultDishes, total } =
  storeToRefs(dishStore)
</script>

<template>
  <!-- dishes list view -->
  <div class="p-5">
    <BaseLoading v-if="loading" />
    <DishList v-else>
      <DishListItem
        v-for="dish in searchResultDishes"
        :key="dish._id"
        :dish="dish"
      />
    </DishList>
    <div v-if="total == 0" class="flex items-center justify-center">
      No Dishes...
    </div>
  </div>

  <!-- delete confirmation modal -->
  <BaseModal
    title="Are you sure?"
    :open="openDeleteModal"
    :close-modal="dishStore.closeDeleteModal"
  >
    <div class="flex items-center justify-center space-x-4">
      <BaseButton @click="dishStore.deleteDish()">Delete</BaseButton>
      <BaseButton @click="dishStore.closeDeleteModal()">Cancel</BaseButton>
    </div>
  </BaseModal>
</template>
