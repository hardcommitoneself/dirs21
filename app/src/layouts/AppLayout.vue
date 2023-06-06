<template>
  <TheHeader />
  <slot />
  <TheFooter />
</template>

<script>
import TheFooter from "../components/TheFooter.vue"
import TheHeader from "../components/TheHeader.vue"

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
