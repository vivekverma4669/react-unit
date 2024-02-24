# React Product Listing with Auth

### Max marks - 20 marks

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package-lock.json to GitHub

### Test cases

```
✅ able to make the submission - 1 (default)
✅ App loads correctly  - 1 mark
✅ Render pagination component - 2 marks
✅ Private Route component redirects the user to login when visiting /dashboard page- 1 mark
✅ Values in context are correctly mapped - 1 mark
✅ Login page works correctly with API - 2 marks
✅ Login page works correctly when API is mocked  - 2 marks
✅ ProductList Components exist - 2 marks
✅ Home page works correctly - 2 marks
✅ Sort Buttons are present - 1 mark
✅ Sorting works correctly - 2 marks
✅ Sort and pagination should work together - 3 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

```
// install npm packages
npm install --engine-strict

// start application locally
npm run start

// test locally
npm run test
```

## Description

- You need to create an application that lists products from an API.
- Users should be able to log in to access the dashboard, apply pagination, and sort the results in either high-to-low or low-to-high order based on the price.

## Folder Structure

```
src
├── App.css
├── App.js
├── Components
|  ├── Loader.jsx
|  ├── Pagination.jsx
|  ├── PrivateRoute.jsx
|  ├── ProductItem.jsx
|  └── ProductList.jsx
├── Context
|  └── AuthContext.jsx
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
├── Routes
|  ├── AllRoutes.jsx
|  ├── Dashboard.jsx
|  ├── Home.jsx
|  └── Login.jsx
├── setupTests.js
└── __tests__
   └── app.test.js

```

## Requirements

- API details( use `Fetch`)
- `Base URL`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
- query params:
  - `page`: A number representing the page number
  - `limit`: A number representing the total number of results per page(fixed at 10)
  - `sort`: value should be `price`
  - `order`: order the products in ascending or descending manner, based on the price field (`asc` for ascending order, `desc` for descending order)
- Response
  - `data`: array of products.
  - `totalPages`: A number representing no of pages.
- By default when the user loads the page, the user should be shown a set of products:

  - Page 1
  - 10 per page
  - Sorted in low-to-high order of price of the product
  - Example URL: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=10&order=asc&sort=price`

- You cannot use JSON server
- Use useEffect to retrieve the product data from the API.

## Pages

### 1. Home.jsx

- It contains links to other routes: login and dashboard routes.

  ![](https://i.imgur.com/pTeapBt.png)

### 2. Login.jsx

- A user should be able to login from here
- There is a form already made for you
- You need to complete it by using the following API

  ```
  HTTP Method: POST
  API Endpoint: https://reqres.in/api/login (console response for better understanding)
  API Documentation: https://reqres.in/
  ```

- You need to maintain the authentication state in context API

  ```
  token - should be null by default
  isAuth - should be false by default
  ```

- When a user clicks on submit, the button should be disabled.
- Once logged in, a user is redirected to `/dashboard` route

  ![](https://i.imgur.com/s25iL8O.png)

### 3. Dashboard.jsx

- All the filters for pagination, sorting, and products will be present here
- Once logged in, a user sees this page
- You should have a Logout button `data-testid="logout-btn"`
- Once you click on it, you should be logged out
- There is an element with `data-testid="user-token"`
- You need to display the user token here.
  #### Sorting
- There is a div with `data-testid ='sort-container'`
- There are two buttons `Sort high to low` and `Sort low to high` in the above div
- These two buttons have the following `data-testid='high-to-low'` and `data-testid='low-to-high'`
- By default, it should be in low to high order.
- If low to high is the order, then the button `Sort low to high` should be disabled
- If high to low is the order, then the button `Sort high to low` should be disabled
- When clicking, the order of the elements should change
- This should also work even if you are on pages 2,3 etc
- When the API request is in progress, use the `Loader.jsx` component which is supposed to show a loading indicator
- Display the results using the `ProductList.jsx` and `ProductItem.jsx` components, passing the data from the API response.
- The pagination component should be shown below this inside the container with `data-testid="pagination-container"`.

![](https://i.imgur.com/QlTKM67.png)

## Components

### 1. AllRoutes.jsx

- It should contain all the routes for your application:

```
/ - Home
/login - Login Page
/dashboard - Dashboard (Private)
```

### 2. PrivateRoute.jsx

- Shows the child component if a user is authenticated.
- Otherwise, moves the user to the login page.

### 3. Loader.jsx

- A loading indicator which will be shown when API requests(Fetching products) is in progress.

### 4. ProductList.jsx

- Accepts a property called `products`, which is the array of product data retrieved from the API.
- Map through this and transform it into components with `ProductItems.jsx`.

### 5. ProductItem.jsx

- A component to display information about a single product.
- Accepts the following props:

  - `title`: The title of the product.
    - It should be added under the element with `data-testid="product-title"`.
  - `price`: The price of the product.
    - It should be added under the element with `data-testid="product-price"` as `₹ 500`, for example (spaces are important!).
  - `category`: The category that the product belongs to.
    - It should be added under the element with `data-testid="product-category"`.
  - `image`: The image URL of the product.
    - It should be added under the element with `data-testid="product-image"`.
      The image element should also accept the `alt` attribute and set it to the `title`.

### 6. Pagination.jsx

- Accepts the following properties:

  - `current`: A number representing the current page.
  - `onChange`: A callback which will be give the new page number (page) => {}).
  - `totalPage`: A number representing the total pages present in the products.

- By default, the Prev button with `data-testid="prev-page"` should be disabled.
- The Next button with `data-testid="next-page"` should be disabled if you are on the last page.
- The current page should be shown in the button with `data-testid="current-page"`.
- The total pages should be shown in the component, under the element with `data-testid="total-pages"`.
- Clicking should make a new request and show the results in the UI.
- On click of any button, the new page number will be sent to the onChange callback.

## Context

### AuthContext.jsx

- Manage auth context here.
- The `AuthContext` and the `Provider` should be created here.
- Users should be able to pass the states for authentication:

  ```
  isAuth - default value: false
  token - default value: null
  ```

- Handle `loginUser` and `logoutUser` in AuthContext only:
- `loginUser` - A function to set isAuth to true and token to the corresponding token.
- `logoutUser` - A function to set isAuth to false and token back to null.
- The values should be passed down in the AuthContextProvider as value is `{ authState: state, loginUser, logoutUser }`.
- authState should contain isAuth and token.

#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to a low score.
- Also make sure to cross-check all the spellings and Cases of Texts.

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- So we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
