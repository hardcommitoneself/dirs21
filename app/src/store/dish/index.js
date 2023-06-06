import { defineStore } from "pinia"
import { findAll, findOne, updateDish, createOne, deleteOne } from "@/services"

export const useDishStore = defineStore("dish", {
  state: () => ({
    dish: null,
    dishes: [],
    currentDeleteDishId: null,
    openDeleteModal: false,
    loading: false,
    error: null,
    search: "",
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
     * Get dish by id
     */
    async getDish(id) {
      try {
        this.loading = true

        const dish = await findOne(id)

        this.dish = dish
        this.loading = false
      } catch (error) {
        this.dish = null
        this.loading = false
        this.error = error
      }
    },
    /**
     * Create new dish
     */
    async createOne(payload) {
      try {
        this.loading = true

        const dish = await createOne(payload)

        this.dishes.push(dish)
        this.loading = false
      } catch (error) {
        this.loading = false
        this.error = error
      }
    },
    /**
     * Update dish
     */
    async updateDish(payload) {
      try {
        this.loading = true

        const dish = await updateDish(payload)

        const dishIndex = this.dishes.findIndex(
          (dish) => dish._id === payload._id
        )

        this.dishes[dishIndex] = dish
        this.loading = false
      } catch (error) {
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
        }
        this.currentDeleteDishId = null
        this.openDeleteModal = false
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
      this.openDeleteModal = true
    },
    /**
     * Close delete modal
     */
    closeDeleteModal() {
      this.openDeleteModal = false
    },
  },
  getters: {
    searchResultDishes: (state) =>
      state.dishes.filter((dish) =>
        dish.name?.toLowerCase().includes(state.search.toLocaleLowerCase())
      ),

    total: (state) =>
      state.dishes.filter((dish) =>
        dish.name?.toLowerCase().includes(state.search.toLocaleLowerCase())
      ).length,
  },
})
