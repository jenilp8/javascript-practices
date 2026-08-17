export const products = [
  { id: 1, name: "Wireless Mouse", price: 25.5, category: "Electronics", stock: 120, rating: 4.2 },
  { id: 2, name: "Yoga Mat", price: 18, category: "Fitness", stock: 0, rating: 4.7 },
  { id: 3, name: "Desk Lamp", price: 34.99, category: "Home", stock: 45, rating: 3.9 },
  { id: 4, name: "Water Bottle", price: 12, category: "Fitness", stock: 300, rating: 4.5 },
  { id: 5, name: "Bluetooth Speaker", price: 59.99, category: "Electronics", stock: 12, rating: 4.0 },
  { id: 6, name: "Smart Watch", price: 69.99, category: "Electronics", stock: 12, rating: 0 }
];

export function convertToStars(rating) {
    if (rating >= 1 && rating <= 1.9) {
        return "★";
    } else if (rating >= 2 && rating <= 2.9) {
        return "★★";
    } else if (rating >= 3 && rating <= 3.9) {
        return "★★★";
    } else if (rating >= 4 && rating <= 4.9) {
        return "★★★★";
    } else if (rating == 5) {
        return "★★★★★";
    } else {
        return "";
    }
}