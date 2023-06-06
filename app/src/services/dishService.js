import axios from "./utils/axios"

/**
 * Get all dishes
 */
export const findAll = async () => {
  try {
    const response = await axios.get("/dishes")

    return response.data.data
  } catch (error) {
    throw error
  }
}
