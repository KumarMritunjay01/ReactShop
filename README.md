# 🛒 ReactShop - Simple E-commerce Product Store

A simple e-commerce product store built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This project showcases a cart system, product detail view, search/filter functionality, API integration, and global state management.

#  Features

## 🛍 Product Listing Page
- Fetch products from [FakeStore API](https://fakestoreapi.com)
- Show product title, image, price, and other details

### 🛒 Cart System
- Add items to cart
- Show total number of items in the navbar
- Cart page to view and remove items

### 🔍 Filter / Search
- Search products by name
- Filter by category

### 📄 Product Detail Page
- Click any product to view detailed information

### 🧠 Global State (Redux Toolkit)
- Centralized state for:
  - Product list
  - Cart items
  - Loading and error states

### 🌐 API Integration
- Async calls using Redux Thunk and native Fetch API:
  - `fetchProducts()`
  - `fetchProductById(id)`

### 🌗 Other Features
- Dark/Light mode toggle
- Order summary with total price calculation
- Fully responsive layout

---

## 🔧 Tech Stack

| Technology      | Purpose                     |
|------------------|------------------------------|
| React            | UI Components                |
| Redux Toolkit    | State Management             |
| Redux Thunk      | Middleware for API Calls     |
| Fetch API        | Product Data Fetching        |
| React Router     | Routing Pages                |
| Tailwind CSS     | Styling & Responsive Design  |
