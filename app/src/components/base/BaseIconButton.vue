<script setup>
const props = defineProps(["bg", "ring"])
</script>

<template>
  <div
    :class="[
      'flex transition items-center justify-center w-8 h-8 text-white rounded-full cursor-pointer hover:ring-[12px]',
      bg ?? 'bg-orange-500',
      ring ?? 'ring-orange-500/50',
    ]"
  >
    <slot />
  </div>
</template>
