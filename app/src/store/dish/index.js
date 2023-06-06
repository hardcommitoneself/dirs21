import { defineStore } from "pinia"
import { findAll, deleteOne } from "@/services"

export const useDishStore = defineStore("dish", {
  state: () => ({
    dishes: [],
    currentDeleteDishId: null,
    loading: false,
    error: null,
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
        this.error = error
      }
    },
    /**
     * Delete dish
     */
    async deleteDish() {
      try {
        this.loading = true

        const response = await deleteOne(this.currentDeleteDishId)

        if (response.message === "Dish deleted") {
          const dishIndex = this.dishes.findIndex(
            (dish) => dish._id === this.currentDeleteDishId
          )

          this.dishes.splice(dishIndex, 1)
          this.currentDeleteDishId = null
        }
        this.loading = false
      } catch (error) {
        this.loading = false
        this.error = error
      }
    },
    /**
     * Set current deletion dish id
     */
    setCurrentDeleteDishId(id) {
      this.currentDeleteDishId = id
    },
  },
})
