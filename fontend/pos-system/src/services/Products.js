import { faker } from "@faker-js/faker"

const products = [];

for (let i = 0; i < 100; i++) {
    const product = { id: i, name: faker.commerce.productName(), quantity: Math.floor((Math.random() * 100) % 100), buying: faker.commerce.price(), selling: faker.commerce.price() };

    products.push(product);
}



function productList() {
    return products;

}


export { productList };