<script setup>
import { storeToRefs } from "pinia"
import BaseIconButton from "../base/BaseIconButton.vue"
import SVGDelete from "../svg/SVGDelete.vue"
import SVGEdit from "../svg/SVGEdit.vue"
import { useAppStore, useDishStore } from "../../store"

const appStore = useAppStore()
const dishStore = useDishStore()

const { currency } = storeToRefs(appStore)

const props = defineProps(["dish"])
</script>

<template>
  <div class="flex flex-col">
    <!-- top -->
    <div
      class="relative w-full h-full overflow-hidden shadow-inner cursor-pointer rounded-xl group"
    >
      <img
        :src="dish.images.md"
        :alt="dish.name"
        class="w-full transition group-hover:scale-110"
      />

      <!-- actions -->
      <div
        class="absolute top-0 left-0 flex items-center justify-center w-full h-full space-x-4 transition opacity-0 group-hover:opacity-100 group-hover:bg-black/50"
      >
        <BaseIconButton bg="bg-green-500" ring="ring-green-500/50">
          <SVGEdit />
        </BaseIconButton>

        <BaseIconButton
          bg="bg-red-500"
          ring="ring-red-500/50"
          @click="dishStore.setCurrentDeleteDishId(dish._id)"
        >
          <SVGDelete />
        </BaseIconButton>
      </div>

      <!-- sold out -->
      <div
        class="absolute px-3 font-bold text-white -rotate-45 -translate-x-6 bg-orange-500 left-3 top-6"
        v-if="dish.stock === 0"
      >
        <span>SOLD OUT</span>
      </div>
    </div>

    <!-- detail -->
    <div class="flex flex-col mt-3 space-y-1">
      <div class="flex items-center justify-between">
        <!-- name -->
        <span class="font-bold">{{ dish.name }}</span>
        <!-- stock -->
        <span>{{ dish.stock }}</span>
      </div>
      <!-- description -->
      <p class="text-gray-700 truncate">{{ dish.description }}</p>
      <div class="flex items-center justify-between">
        <!-- price -->
        <span class="text-lg font-bold">${{ dish.price }} {{ currency }}</span>
        <!-- ready in -->
        <span>Delivered in {{ dish.readyIn }}m</span>
      </div>
    </div>
  </div>
</template>
