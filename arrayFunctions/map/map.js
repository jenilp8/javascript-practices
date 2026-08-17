import { products } from "../arrayFunction.js";
import { convertToStars } from "../arrayFunction.js";

// Return an array of just the product name's.

const listOfProductName = products.map((productItem) => {
    return productItem.name;
});
console.log(listOfProductName);


// Return each product with a new displayPrice field like "$25.50"

const newDisplayPrice = products.map((product) => {
    return ({ ...product, displayPrice: "$25.50" })
});
console.log(newDisplayPrice);


// Apply a 20% discount and return new objects with a salePrice field.

const newProducts = products.map((product) => {
    return ({ ...product, salePrice: product.price - product.price * 0.20 });
});

console.log(newProducts);


// Return an array of { name, inStock: true/false } based on stock > 0

const availableStock = products.map((product) => {
    if (product.stock > 0) {
        return ({ name: product.name, inStock: true });
    }

    return ({ name: product.name, inStock: false });
})

console.log(availableStock);


// Return each product's name converted to a URL slug (lowercase, spaces → -)

const urlSlug = products.map((product) => {
    return product.name.toLowerCase().trim().replace(/[\s_]+/g, '-');
})
console.log(urlSlug);


// Return each product with a ratingStars field, e.g. 4.2 → "★★★" (rounded down).

const productRating = products.map((product) => {
    return ({ ...product, ratingStars: convertToStars(product.rating) });
})

console.log(productRating);


// Return an array of short summary strings: "Wireless Mouse - $25.50 (Electronics)".

const productSummary = products.map((product) => {
  return product.name.trim()
    .concat(" - $")
    .concat(product.price.toFixed(2))
    .concat(" (")
    .concat(product.category)
    .concat(")");
});

console.log(productSummary);


// Return each product with an added taxIncludedPrice (assume 8% tax).

const taxProduct = products.map((product) => {
    return ({...product, taxIncludedPrice : product.price + product.price * 0.08});
});

console.log(taxProduct);


// Return an array of { id, category } pairs only (for building a filter dropdown).

const dropDownParameter = products.map((product) => {
    return ({id: product.id, category : product.category});
});

console.log(dropDownParameter);