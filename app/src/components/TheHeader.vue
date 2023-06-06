<script setup>
import AppLogo from "@/components/app/AppLogo.vue"
import AppGlobalSearch from "@/components/app/AppGlobalSearch.vue"
import AppLangCurrency from "@/components/app/AppLangCurrency.vue"
</script>

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
