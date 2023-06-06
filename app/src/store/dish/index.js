import { defineStore } from "pinia"
import { findAll } from "@/services"

export const useDishStore = defineStore("dish", {
  state: () => ({
    dishes: [],
    loading: false,
  }),
  actions: {
    /**
     * Get all dishes
     */
    async getDishes() {
      try {
        this.loading = true

        const dishes = await findAll()

        this.dishes = dishes
        this.loading = false
      } catch (error) {
        this.dishes = []
        this.loading = false
      }
    },
  },
})
