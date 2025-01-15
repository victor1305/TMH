import { Product, User } from "./types";

export const getProducts = async (): Promise<Product[]> => {
  return [
    { id: '1', name: 'Laptop', price: 1200 },
    { id: '2', name: 'Smartphone', price: 800 },
    { id: '3', name: 'Tablet', price: 600 },
    { id: '4', name: 'Smartwatch', price: 250 },
    { id: '5', name: 'Wireless Headphones', price: 150 },
    { id: '6', name: 'Gaming Console', price: 500 },
    { id: '7', name: 'Bluetooth Speaker', price: 100 },
    { id: '8', name: 'External Hard Drive', price: 120 },
    { id: '9', name: '4K Monitor', price: 400 },
    { id: '10', name: 'Mechanical Keyboard', price: 90 },
    { id: '11', name: 'Ergonomic Mouse', price: 70 },
    { id: '12', name: 'Webcam', price: 60 },
    { id: '13', name: 'Portable Charger', price: 50 },
    { id: '14', name: 'Drone', price: 1000 },
    { id: '15', name: 'Digital Camera', price: 800 },
    { id: '16', name: 'VR Headset', price: 350 },
    { id: '17', name: 'Smart Thermostat', price: 200 },
    { id: '18', name: 'Air Purifier', price: 150 },
    { id: '19', name: 'Fitness Tracker', price: 100 },
    { id: '20', name: 'Electric Scooter', price: 600 },
  ];
}

export const getUserData = async (): Promise<User> => {
  return {
    name: "Víctor Sánchez",
    email: "sanchezlealvictor@gmail.com",
    avatar:
      "/avatar.jpg",
  };
}