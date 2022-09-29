import { faker } from "@faker-js/faker";

export const generateMany = (prodCount) => {
  const prods = [];
  for (let i = 0; i < prodCount; i++) {
    prods.push({
      title: faker.commerce.product(),
      price: faker.commerce.price(),
      thumbnail: faker.image.imageUrl(400, 400, undefined, true),
    });
  }
  return prods;
};
