<script setup>
import BaseIconButton from "@/components/base/BaseIconButton.vue"
import SVGXMark from "@/components/svg/SVGXMark.vue"

const props = defineProps(["title", "open", "closeModal"])
</script>

<template>
  <div
    :class="[
      'fixed top-0 left-0 items-center w-screen h-screen p-10 bg-black/50',
      open ? 'block z-[80]' : 'hidden',
    ]"
  >
    <div class="flex flex-col max-w-3xl mx-auto bg-white rounded-xl">
      <!-- header -->
      <div class="flex items-center justify-between h-16 px-5 border-b">
        <!-- close icon -->
        <BaseIconButton
          bg="bg-gray-100 !text-black"
          ring="ring-gray-100/50"
          @click="closeModal()"
        >
          <SVGXMark />
        </BaseIconButton>

        <!-- title -->
        <span class="text-lg">{{ title }}</span>

        <!-- space -->
        <span></span>
      </div>

      <!-- body -->
      <div class="p-10">
        <slot />
      </div>
    </div>
  </div>
</template>
