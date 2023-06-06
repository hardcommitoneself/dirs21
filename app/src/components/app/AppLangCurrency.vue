<template>
  <div
    class="flex w-4 h-4 transition rounded-full cursor-pointer ring-gray-200 hover:ring-[12px]"
  >
    <SVGGlobal />
  </div>
</template>

<script>
import SVGGlobal from "../svg/SVGGlobal.vue"

export default {
  components: {
    SVGGlobal,
  },
}
</script>
