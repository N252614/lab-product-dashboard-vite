# Product Dashboard Manager

## Overview

This is a React-based **Product Dashboard** that displays a list of products, allows filtering by availability, and supports dynamic removal of items. The app is styled using **CSS Modules** and **Material UI**, and includes automated tests written with **Jest** and **React Testing Library**.

---

## Features

- Display a list of products with name, price, and availability
- Apply conditional styling for out-of-stock items
- Remove individual products using a "Remove" button
- All core features are covered by automated tests

---

## Tech Stack

- **React** (with Vite)
- **CSS Modules**
- **Material UI**
- **Jest** & **React Testing Library**

---

## Project Structure
lab-product-dashboard-vite/
├── public/
├── src/
│   ├── tests/            # Contains automated test file
│   │   └── indexTest.test.jsx
│   ├── assets/               # Static assets (like icons)
│   ├── components/           # React components
│   │   ├── ProductCard.jsx
│   │   └── ProductList.jsx
│   ├── styles/               # CSS Modules
│   │   └── ProductCard.module.css
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Vite entry file
│   └── setup.js              # Test setup
├── index.html
├── package.json
├── vite.config.js
└── README.md
## Getting Started

To run the app locally:

```bash
npm install
npm run dev
```
---

## Running Tests

To run the automated tests:

```bash
npm run test
```
---

## Styling

- Components are styled using **CSS Modules**
- Out-of-stock products are highlighted with a soft red background
- Global styles are kept minimal to maintain modularity

---

## Functionality

- Product list displays name, price, and availability
- Items marked "Out of stock" have conditional styling
- Clicking the **"Remove"** button deletes the product from the list
- All features are verified by automated tests using **Jest** and **React Testing Library**

---

## Author

Created by **Nataliia Katina**  
Flatiron School — Product Dashboard Lab

---

## License

This project is intended for **educational purposes only**.
