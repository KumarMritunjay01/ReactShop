// Project Idea : Product Store with Cart + API + API Integration
// Project Name :- ReactShop (Simple E-commerce)

# Features

1. Product Listing Page
   -> Fetch Product from a fake API like "https://fakestoreapi.com"
   -> Show products title , image , price , etc

2. Cart System
   -> Add to cart buttton
   -> Show number of item in cart
   -> Cart Page to View and remove products

3. Filter / Search
   -> Search by product name
   -> Filter by category (optional)

4. Product Detail page
   -> Click on product page -> show details info

5. Global state using Redux toolkit
   -> Product list
   -> Cart items
   -> Loading and error handling

6. Use Redux-Thunk for API Call
   -> fetchProducts() , fetchProductById(id)

# Tools/Libraries to Use

1. React -> for (UI)
2. Redux Toolkit -> Global state
3. Redux Thunk Middleware -> Async API Calls
4. React Router -> Routing (Home , Cart , Products Detail)
5. Axios or Fetch -> API Call
6. TailwindCss / CSS -> Styling

# Suggested Folder Structure

src/
│
├── app/
│ └── store.js
│
├── features/
│ ├── products/
│ │ ├── productSlice.js
│ │ └── ProductList.jsx
│ ├── cart/
│ │ ├── cartSlice.js
│ │ └── Cart.jsx
│
├── components/
│ ├── Navbar.jsx
│ └── Loader.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── ProductDetail.jsx
│ └── CartPage.jsx
│
└── App.jsx

# Bonus Feature Ideas (Optional)

    -> Login (with dummy credentials or firebase)
    -> Dark Mode toggle
    -> pagination or infinite scroll
    -> Order summary / total price calculation

# Why is this project useful
    -> Covers all core React concepts
    -> Help you to master Redux + Thunk with real API
    -> Give you a portfolio-worthly project
    -> Shows understanding of full component structure , logic , and state management