<template>
  <!-- header -->
  <header
    class="fixed top-0 z-50 w-screen h-20 px-10 bg-white border-b shadow-md"
  >
    <div
      class="flex items-center justify-between h-full mx-auto max-w-screen-2xl"
    >
      <!-- logo -->
      <AppLogo />
      <!-- global search -->
      <AppGlobalSearch />
      <!-- language & currency -->
      <AppLangCurrency />
    </div>
  </header>
</template>

<script setup>
import AppLogo from "./app/AppLogo.vue"
import AppGlobalSearch from "./app/AppGlobalSearch.vue"
import AppLangCurrency from "./app/AppLangCurrency.vue"
</script>
