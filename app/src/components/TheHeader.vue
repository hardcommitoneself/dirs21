<script setup>
import { useRoute } from "vue-router"
import AppLogo from "@/components/app/AppLogo.vue"
import AppGlobalSearch from "@/components/app/AppGlobalSearch.vue"
import AppLangCurrency from "@/components/app/AppLangCurrency.vue"
import BaseIconButton from "@/components/base/BaseIconButton.vue"
import SVGPlus from "@/components/svg/SVGPlus.vue"

const route = useRoute()
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
      <div class="flex items-center space-x-4">
        <router-link
          v-if="!route.path.includes('create')"
          to="/dishes/create"
          class="animate-bounce"
        >
          <BaseIconButton bg="bg-teal-500" ring="ring-teal-500/50">
            <SVGPlus />
          </BaseIconButton>
        </router-link>
        <AppLangCurrency />
      </div>
    </div>
  </header>
</template>
