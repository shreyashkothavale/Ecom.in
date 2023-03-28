import React from "react";

const images = [
  {
    men: [],
    women: [],
  },
];

for (let i = 1; i <= 25; i++) {
  images[0].men.push(require(`../assets/Men_${i}.jpg`));
}

for (let i = 1; i <= 8; i++) {
  images[0].women.push(require(`../assets/women_${i}.jpg`));
}

const ProductData = [
  {
    id: 1,
    name: "Textured Blazer",
    category: "men",
    isNew: 1,
    imgData: { img: [images[0].men[0]] },
    price: "4000",
  },
  {
    id: 2,
    name: "Jacket",
    category: "women",
    isNew: 1,
    imgData: { img: [images[0].women[0]] },
    price: "199",
  },
  {
    id: 3,
    name: "Solid Men Jacket",
    category: "men",
    isNew: 0,
    imgData: { img: [images[0].men[1]] },
    price: "699",
  },
  {
    id: 4,
    name: "Jacket",
    category: "women",
    isNew: 0,
    imgData: { img: [[images[0].women[1]]] },
    price: "750",
  },
  {
    id: 5,
    name: "Regular Fit Gray T-shirt",
    category: "men",
    isNew: 0,
    imgData: { img: [images[0].men[2], images[0].men[3], images[0].men[4]] },
    price: "265",
  },
  {
    id: 6,
    name: "Jacket",
    category: "women",
    isNew: 0,
    imgData: { img: [images[0].women[3]] },
    price: "325",
  },
  {
    id: 7,
    name: "Jacket",
    category: "women",
    isNew: 1,
    imgData: { img: [images[0].women[4]] },
    price: "325",
  },
  {
    id: 8,
    name: "Jacket",
    category: "men",
    isNew: 1,
    imgData: { img: [images[0].men[5], images[0].men[6]] },
    price: "325",
  },
  {
    id: 9,
    name: "Regular Fit T-shirt",
    category: "men",
    isNew: 1,
    imgData: { img: [images[0].men[7], images[0].men[8], images[0].men[9]] },
    price: "285",
  },
  {
    id: 10,
    name: "Black Solid Regular Fit Jacket",
    category: "men",
    isNew: 1,
    imgData: { img: [images[0].men[10], images[0].men[11]] },
    price: "3200",
  },
  {
    id: 11,
    name: "Regular Fit Black T-shirt",
    category: "men",
    isNew: 1,
    imgData: { img: [images[0].men[12], images[0].men[14], images[0].men[16]] },
    price: "650",
  },
  {
    id: 12,
    name: "Regular Fit Green T-shirt",
    category: "men",
    isNew: 1,
    imgData: { img: [images[0].men[13], images[0].men[15], images[0].men[17]] },
    price: "285",
  },
  {
    id: 13,
    name: "Regular Fit T-shirt",
    category: "men",
    isNew: 1,
    imgData: { img: [images[0].men[18], images[0].men[20], images[0].men[21]] },
    price: "325",
  },
  {
    id: 14,
    name: "Jacket",
    category: "men",
    isNew: 1,
    imgData: { img: [images[0].men[22], images[0].men[23]] },
    price: "4200",
  },
  {
    id: 15,
    name: "Sweat Shirt",
    category: "men",
    isNew: 1,
    imgData: { img: [images[0].men[24]] },
    price: "750",
  },
  {
    id: 16,
    name: "Jacket",
    category: "women",
    isNew: 1,
    imgData: { img: [images[0].women[5]] },
    price: "325",
  },
  {
    id: 17,
    name: "Jacket",
    category: "women",
    isNew: 1,
    imgData: { img: [images[0].women[6]] },
    price: "325",
  },
  {
    id: 18,
    name: "Jacket",
    category: "women",
    isNew: 1,
    imgData: { img: [images[0].women[7]] },
    price: "325",
  },
];

export default ProductData;
