<script setup>
import { storeToRefs } from "pinia"
import DishList from "@/components/dish/DishList.vue"
import DishListItem from "@/components/dish/DishListItem.vue"
import BaseLoading from "@/components/base/BaseLoading.vue"
import BaseModal from "@/components/base/BaseModal.vue"
import BaseButton from "@/components/base/BaseButton.vue"
import { useDishStore } from "../../store"

const dishStore = useDishStore()

const { dishes, loading, openDeleteModal } = storeToRefs(dishStore)
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
