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

/**
 * Get dish by id
 */
export const findOne = async (id) => {
  try {
    const response = await axios.get(`/dishes/${id}`)

    return response.data.data
  } catch (error) {
    throw error
  }
}

/**
 * Update dish
 */
export const updateDish = async (payload) => {
  try {
    const response = await axios.put("/dishes", payload)

    return response.data.data
  } catch (error) {
    throw error
  }
}

/**
 * Delete dish
 */
export const deleteOne = async (id) => {
  try {
    const response = await axios.delete(`/dishes/${id}`)

    return response.data
  } catch (error) {
    throw error
  }
}
