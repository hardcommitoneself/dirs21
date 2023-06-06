import { defineStore } from "pinia"

export const useAppStore = defineStore("app", {
  state: () => ({
    langs: ["EN", "DE", "CH", "ES", "DN"],
    lang: "EN",
    currencies: ["USD", "AUD", "EUR", "CAD"],
    currency: "USD",
  }),
  actions: {
    setLang(lang) {
      this.lang = lang
    },
    setCurrency(currency) {
      this.currency = currency
    },
  },
})
