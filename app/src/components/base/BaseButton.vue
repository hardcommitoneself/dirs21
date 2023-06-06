<script setup>
const props = defineProps(["bg"])
</script>

<template>
  <div
    :class="[
      'inline-flex items-center justify-center h-12 text-white rounded-md transition px-4 cursor-pointer',
      bg ?? 'bg-black/90',
    ]"
  >
    <slot />
  </div>
</template>
