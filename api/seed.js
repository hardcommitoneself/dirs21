const { uuid } = require("uuidv4");
const { faker } = require("@faker-js/faker");

const randomDish = () => {
  return {
    _id: uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    category: {
      starter: faker.helpers.multiple(faker.commerce.productName, {
        count: faker.number.int(3),
      }),
      main: faker.helpers.multiple(faker.commerce.productName, {
        count: faker.number.int(5),
      }),
      dessert: faker.helpers.multiple(faker.commerce.productName, {
        count: faker.number.int(2),
      }),
      beverage: faker.helpers.multiple(faker.commerce.productName, {
        count: faker.number.int(2),
      }),
    },
    images: {
      lg: faker.image.urlLoremFlickr({
        category: "food",
        width: 560,
        height: 560,
      }),
      md: faker.image.urlLoremFlickr({
        category: "food",
        width: 240,
        height: 240,
      }),
      sm: faker.image.urlLoremFlickr({
        category: "food",
        width: 128,
        height: 128,
      }),
    },
    stock: faker.number.int(10),
    active: true,
    readyIn: faker.number.int(50),
    _Created: new Date(),
    _Changed: null,
  };
};

exports.dishes = faker.helpers.multiple(randomDish, {
  count: faker.number.int(100),
});
