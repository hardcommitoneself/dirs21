<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import BaseButton from "@/components/base/BaseButton.vue"
import { useDishStore } from "../../store"

const props = defineProps(["isEditing", "dish"])

const router = useRouter()
const dishEditForm = ref(null)
const dishStore = useDishStore()

const data = computed(() =>
  props.dish === null
    ? null
    : {
        name: props.dish.name,
        description: props.dish.description,
        price: props.dish.price,
        starter: props.dish.category.starter.join(),
        main: props.dish.category.main.join(),
        dessert: props.dish.category.dessert.join(),
        beverage: props.dish.category.beverage.join(),
        time: props.dish.time,
        day: props.dish.day,
        stock: props.dish.stock,
        readyIn: props.dish.readyIn,
      }
)

const castNumber = (node) => {
  node.hook.input((value, next) => next(Number(value)))
}

const handleClickSubmit = () => {
  const node = dishEditForm.value.node
  node.submit()
}

const onSubmit = async (data) => {
  const payload = {
    name: data.name,
    description: data.description,
    price: data.price,
    category: {
      starter: data.starter.length ? data.starter.split(",") : [],
      main: data.main.length ? data.main.split(",") : [],
      dessert: data.dessert.length ? data.dessert.split(",") : [],
      beverage: data.beverage.length ? data.beverage.split(",") : [],
    },
    images: props.dish.images,
    time: data.time,
    day: data.day,
    stock: data.stock,
    active: props.dish.active,
    readyIn: data.readyIn,
    _Created: props.dish._Created,
    _Changed: props.dish._Changed,
  }

  if (props.isEditing) {
    payload._id = props.dish._id
  }

  await dishStore.updateDish(payload)
  router.push("/dishes")
}
</script>

<template>
  <FormKit
    type="form"
    id="dishEditForm"
    name="dishEditForm"
    ref="dishEditForm"
    :value="data"
    :submit-label="isEditing ? 'Save' : 'Create'"
    @submit="onSubmit"
    :actions="false"
  >
    <div class="flex flex-col items-center max-w-2xl p-10 mx-auto space-y-4">
      <!-- title -->
      <h3 class="text-3xl font-bold">
        {{ isEditing ? "Edit" : "Create new" }} Dish
      </h3>
      <div class="flex flex-col space-y-4 w-96">
        <FormKit
          type="text"
          label="Name"
          name="name"
          placeholder="Type dish name..."
          value=""
          help="Dish name"
          validation="required"
        />

        <FormKit
          type="textarea"
          label="Description"
          name="description"
          placeholder="Type dish description..."
          value=""
          help="Dish description"
          validation="required"
        />

        <FormKit
          type="number"
          label="Price"
          name="price"
          placeholder="Type dish price..."
          value=""
          help="Dish price"
          validation="required"
          :plugins="[castNumber]"
        />

        <div class="flex flex-col pl-4 space-y-2">
          <h3 class="-ml-4 font-bold">Category</h3>
          <FormKit
            type="text"
            label="Starter"
            name="starter"
            placeholder="Please split categories with coma..."
            help="Starter category"
          />
          <FormKit
            type="text"
            label="Main"
            name="main"
            placeholder="Please split categories with coma..."
            help="Main category"
          />
          <FormKit
            type="text"
            label="Dessert"
            name="dessert"
            placeholder="Please split categories with coma..."
            help="Dessert category"
          />
          <FormKit
            type="text"
            label="Beverage"
            name="beverage"
            placeholder="Please split categories with coma..."
            help="Beverage category"
          />
        </div>

        <div class="grid items-center grid-cols-2 space-x-1">
          <FormKit
            type="select"
            label="Time"
            name="time"
            help="Available time"
            :options="['Breakfast', 'Lunch', 'Dinner']"
          />
          <FormKit
            type="select"
            label="Day"
            name="day"
            help="Available day"
            :options="['Weekdays', 'Weekends']"
          />
        </div>

        <FormKit
          type="number"
          label="Stock"
          name="stock"
          placeholder="Type stock amount..."
          help="Stock"
          validation="required"
          :plugins="[castNumber]"
        />

        <FormKit
          type="number"
          label="Ready In"
          name="readyIn"
          placeholder="Type ready time in minute..."
          help="Ready in?"
          validation="required"
          :plugins="[castNumber]"
        />

        <div class="flex justify-end space-x-4">
          <BaseButton @click="handleClickSubmit">
            {{ isEditing ? "Save" : "Edit" }}
          </BaseButton>

          <BaseButton> Cancel</BaseButton>
        </div>
      </div>
    </div>
  </FormKit>
</template>
