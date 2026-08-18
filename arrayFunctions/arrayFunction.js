export const products = [
  { id: 1, name: "Wireless Mouse", price: 25.5, category: "Electronics", stock: 120, rating: 4.2 },
  { id: 2, name: "Yoga Mat", price: 18, category: "Fitness", stock: 0, rating: 4.7 },
  { id: 3, name: "Desk Lamp", price: 34.99, category: "Home", stock: 45, rating: 3.9 },
  { id: 4, name: "Water Bottle", price: 12, category: "Fitness", stock: 300, rating: 4.5 },
  { id: 5, name: "Bluetooth Speaker", price: 59.99, category: "Electronics", stock: 12, rating: 4.0 },
  { id: 6, name: "Smart Watch", price: 69.99, category: "Electronics", stock: 12, rating: 0 }
];


const users = [
  { id: 1, name: "Asha", age: 29, role: "admin", active: true, country: "IN", verified: true },
  { id: 2, name: "Ravi", age: 17, role: "member", active: false, country: "IN", verified: false },
  { id: 3, name: "Meera", age: 34, role: "editor", active: true, country: "US", verified: true },
  { id: 4, name: "Kabir", age: 22, role: "member", active: true, country: "UK", verified: false },
  { id: 5, name: "Sara", age: 41, role: "admin", active: false, country: "US", verified: true }
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


export function checkStockStatus(stock) {
    if(stock == 0) {
        return "Out Of Stock";
    } else if(stock < 15) {
        return "Low Stock";
    } else {
        return "In Stock";
    }
}