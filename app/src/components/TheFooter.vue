<template>
  <!-- footer -->
  <footer
    class="fixed bottom-0 flex items-center justify-between w-screen h-12 px-10 mx-auto text-sm border-t max-w-screen-2xl"
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
  </footer>
</template>

<script>
import AppCopyright from "./app/AppCopyright.vue"
import SVGGlobal from "./svg/SVGGlobal.vue"

export default {
  components: {
    AppCopyright,
    SVGGlobal,
  },
}
</script>
