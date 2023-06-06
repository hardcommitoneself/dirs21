<template>
  <!-- header -->
  <header
    class="flex items-center justify-between h-20 px-10 border-b max-w-screen-2xl"
  >
    <!-- logo -->
    <AppLogo />
    <!-- global search -->
    <AppGlobalSearch />
    <!-- language & currency -->
    <AppLangCurrency />
  </header>
</template>

<script>
import AppLogo from "./app/AppLogo.vue"
import AppGlobalSearch from "./app/AppGlobalSearch.vue"
import AppLangCurrency from "./app/AppLangCurrency.vue"

export default {
  components: {
    AppLogo,
    AppGlobalSearch,
    AppLangCurrency,
  },
}
</script>
