<template>
  <!-- header -->
  <header
    class="fixed top-0 flex items-center justify-between w-screen h-20 px-10 mx-auto bg-white border-b max-w-screen-2xl"
  >
    <!-- logo -->
    <AppLogo />
    <!-- global search -->
    <AppGlobalSearch />
    <!-- language & currency -->
    <AppLangCurrency />
  </header>
</template>

<script setup>
import AppLogo from "./app/AppLogo.vue"
import AppGlobalSearch from "./app/AppGlobalSearch.vue"
import AppLangCurrency from "./app/AppLangCurrency.vue"
</script>
