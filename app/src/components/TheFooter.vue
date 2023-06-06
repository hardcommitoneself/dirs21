<script setup>
import AppCopyright from "@/components/app/AppCopyright.vue"
import SVGGlobal from "@/components/svg/SVGGlobal.vue"
</script>

<template>
  <!-- footer -->
  <footer class="fixed bottom-0 w-screen h-12 px-10 bg-white border-t">
    <div
      class="flex items-center justify-between h-full mx-auto text-sm max-w-screen-2xl"
    >
      <AppCopyright />

      <div class="flex items-center space-x-4">
        <!-- current lang -->
        <span class="flex items-center space-x-1">
          <SVGGlobal /> <span>EN</span>
        </span>
        <!-- current currency -->
        <span> USD </span>
      </div>
    </div>
  </footer>
</template>
