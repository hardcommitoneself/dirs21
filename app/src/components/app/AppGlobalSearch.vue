<script setup>
import { useDishStore } from "@/store"
import SVGSearch from "@/components/svg/SVGSearch.vue"

const dishStore = useDishStore()
</script>

<template>
  <div
    class="relative flex items-center h-12 border lg:min-w-[384px] rounded-full shadow pl-4 pr-12"
  >
    <input
      v-model="dishStore.search"
      class="w-full text-sm outline-none h-9"
      placeholder="I'm craving..."
    />

    <!-- search icon -->
    <div
      class="absolute top-0 right-0 flex items-center justify-center w-12 h-12"
    >
      <div
        class="flex items-center justify-center w-8 h-8 text-white bg-orange-500 rounded-full"
      >
        <SVGSearch />
      </div>
    </div>
  </div>
</template>
