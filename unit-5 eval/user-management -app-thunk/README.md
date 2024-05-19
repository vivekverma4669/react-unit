# React Redux Library management With Authentication

<h2 style="color:#215dc8">
Maximum Marks: 20
</h2>

```
✅ Should be able to make a submission: - 1 Mark
✅ Should Have Initial Redux Store Structure for Authentication: - 1 Mark
✅ Should Have Initial Redux Store Structure for Books: - 1 Mark
✅ Should update Books state in-store when books load on the dashboard: - 1 Mark
✅ Should show the LOGO and `Login` option inside navbar while user is not authenticated: - 1 Mark
✅ Should show loading indicator while API request is in progress: - 2 Marks
✅ Should show all the books on the dashboard page: - 1 Mark
✅ Should update authReducer accordingly after login: - 3 Marks
✅ Should show LOGO, `Add New Book` and Logout button and token inside navbar if user is authenticated: - 3 Marks
✅ Should have protected route `/addbook` : - 1 Mark
✅ Should add a new book: - 3 Marks
✅ Should logged out user on clicking 'Logout' button": - 2 Mark

```

<h2 style="color:red">
Installation Instructions:
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Please make sure you do not push package-lock.json

```
// install node_modules
npm install --engine-strict

// run locally
npm run start

//to start the JSON-server

npm run server
```

- **_Note_**:

1. Make sure that the JSON server is up and running at port 8080.
2. There is a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it.
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server base url.
4. Use <span style="color:red">Axios</span> for API requests.
5. Use <span style="color:red">onSubmit</span> event to submit the forms.

<h2 style="color:#215dc8">
Folder Structure (Important Files):
</h2>

```
src
├── App.css
├── App.js
├── Components
|  ├── BookCard.jsx
|  ├── Loading.jsx
|  └── Navbar.jsx
├── Pages
|  ├── AddBook.jsx
|  ├── Dashboard.jsx
|  ├── login.css
|  └── Login.jsx
├── Redux
|  ├── AuthReducer
|  |  ├── action.js
|  |  ├── actionTypes.js
|  |  └── reducer.js
|  ├── BookReducer
|  |  ├── action.js
|  |  ├── actionTypes.js
|  |  └── reducer.js
|  └── store.js
└── Routes
   ├── AllRoutes.jsx
   └── PrivateRoute.jsx
```

<h2 style="color:#215dc8">
Problem Statement:
</h2>

- Develop an application called `React Redux Library management` that enables users to access a collection of books on the dashboard. Users should have the ability see see the books and add new book, but only if they are logged in.

<h2 style="color:#215dc8">
I. Redux:
</h2>

- Create a Redux store and include the <span style="color:red">thunk</span> middleware.
- Implement separate reducers for authentication <span style="color:red">authReducer</span> and Books <span style="color:red">booksReducer</span>.
- Utilize the <span style="color:red">combineReducers</span> function to combine the reducers.
- Move all API requests to the `action.js` file.
- Functions and types are already given for You also can use any action types & function names of your choice.
- Utilize the `useSelector` hook to access the Redux store state and extract specific data from it.
- Utilize the `useDispatch` hook to dispatch actions to the Redux store.
- Set the initial state for `authReducer` as follows:

```json
{
  "token": "",
  "isAuth": false,
  "loading": false,
  "error": null,
  "success": false
}
```

- Set the initial state for `booksReducer` as follows:

```json
{
  "books": [],
  "loading": false,
  "error": null,
  "success": false
}
```

<h2 style="color:#215dc8">
II. Routes:
</h2>

Implement the following routes inside `AllRoutes.jsx`

```json
/                   - Dashboard.jsx
/login              - Login.jsx
/addbook            - AddBook.jsx(private route)
```

- The `/addbook`  route should be protected.
- If the user is not authenticated it should redirect to the `/login` route
- Create All Routes inside <span style="color:red">AllRoutes.jsx</span>
- Implement Private routes functionality inside <span style="color:red">PrivateRoutes.jsx</span>

<h2 style="color:#215dc8">
III. Components:
</h2>

<h3 style="color:#215dc8">
A. App.js
</h3>

- In the App component, render the `Navbar.jsx` component.
- Render the `AllRoutes.jsx` component below the Navbar component.

<h3 style="color:#215dc8">
B. Navbar.jsx
</h3>

The Navbar component is responsible for rendering a navigation bar with various options based on the user's authentication status.

- The navigation bar displays the following tags:

  - A `div` with `id="logo"` on click it should navigate to (`/`).
  - Depending on the authentication status (`isAuth`), the following options are rendered:

    - If the user is authenticated:

      - A Add New Book `button` with ` id="addnewBtn"`on click it should redirect to `/addbook` route (text content should be `Add New Book`).
      - A logout `button` with `id="logoutBtn"`, which triggers the function for logout when clicked.
      - On clicking the logout button reset `authReducer` to the initial value.
      - A `h5` tag with `data-testid="user-token"` which shows the authentication `token`.

    - If the user is not authenticated:

      - A login `button` with `id="loginBtn"`on click it should redirect to `/login` route (text content should be `Login`).

<h3 style="color:#215dc8">
C. Dashboard.jsx
</h3>

The Dashboard component is responsible for fetching and displaying a list of books in a container.

- Use the `useEffect` hook to dispatch action when the component is `mounted`. This action retrieves the books from the server.
- Check if the `loading` property of the `booksReducer` state is `true`. If so, display a loading indicator with attribute `data-testid="loading-indicator"` (which is already given in <span style="color:red">Loading.jsx</span> and import it into Dashboard.jsx).
- Render the books by mapping over the `books` array in the `booksReducer`.
- Each book card <span style="color:red">(BookCard.jsx)</span> is rendered with the given structure inside the parent div given with the className `book_card`:

  - An img of book (already provided no need to do anything).
  - A `h3` tag with `className="book-name"` shows the book title here.
  - A `h4` tag with `className="book-author"` shows the book author here.
 
<figure>
<img src="https://i.imgur.com/eCh7ICq.png"  style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b> Loading</b></figcaption>
</figure>
<figure>
<img src="https://i.imgur.com/wtX2fqN.png"  style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig .1 - Dashboard Page (not Authenticated)</b></figcaption>
</figure>
<figure>
<img src="https://i.imgur.com/gLHJMzL.png"  style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig .2 - Dashboard Page (Authenticated)</b></figcaption>
</figure>


<h3 style="color:#215dc8">
D. Login.jsx
</h3>

The Login component is responsible for rendering a login form and handling user authentication.

- The login form is already provided in the boilerplate you just have to implement the functionality.
- It Renders a div container with `id="login-page"` and  login form inside.

  - Renders an HTML form tag that includes two input fields:
  - One for the `email`. The onChange event updates the email field in the form data.
  - One for the `password`. The onChange event updates the password field in the form data.
  - On submitting form dispatch login action and make a `POST` request to `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login` endpoint with the user email and password.
  - on successful login the user `token` should be stored inside `authReducer` key `token` along with the updated value of `isAuth` should be `true`, value of `error` should be `null`, value of `success` should be `true`.

  - if any error occurs during login the `error` state should be changed with the error message other state values are remain the same.
  - after successful login redirect to the user to (`/`) endpoint (`Dashboard.jsx`)

  ```json
  //login credentials for API
  {
    "email":"bruce@wayne.com",
    "password":"gotham123"
  }

  // for more details of login details please visit

  "https://peerabduljabbar.notion.site/Login-User-d0297e2e8f034e0981d1262d2217d745"

  ```

<figure>
<img src="https://i.imgur.com/6PwiPOn.png"  style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig .3 - Login Page</b></figcaption>
</figure>



<h3 style="color:#215dc8">
E. AddBook.jsx
</h3>

The AddBook component is responsible for adding new book details.

- The AddBook form is already provided in the boilerplate you just have to implement the functionality.

- It Renders a div container with `data-testid="add-new-page"` an AddBook form with `data-testid="addbook-form"` inside which includes five input fields:

- One input tag with `data-testid="book-title"` for the `title`. The onChange event updates the `title` field in the form data.

- One input tag with `data-testid="book-author"` for the `author`. The onChange event updates the `author` field in the form data.
- One input tag with `data-testid="book-published_year"` for the `published_year`. The onChange event updates the `published_year` field in the form data.
- One input tag with `data-testid="book-genre"` for the `genre`. The onChange event updates the `genre` field in the form data.

- One input tag with `data-testid="book-isbn"` for the `isbn`. The onChange event updates the `isbn` field in the form data.

- on submitting the form make a `POST` request to `/books` with the form data.

```json
// form data includes these fields
{
  "title": "",
  "author": "",
  "published_year": "",
  "genre": "",
  "isbn": ""
}
```

- Once a book is added successfully, dispatch the received book data from the successful request to update the state within the `booksReducer`. Ensure that the `error` state is set to `null` and the `success` state is set to `true`.

- after moving to the `Dashboard.jsx` the new book details should be there.

<figure>
<img src="https://i.imgur.com/bxP8TYE.png"  style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Fig .5 - Add New Book Page</b></figcaption>
</figure>

<h2 style="color:#215dc8">
Tested on cp.masaischool.com
</h2>

<figure>
  <img src="https://i.imgur.com/iRA3VrA.png" alt="df" style="border: 1px solid gray; border-radius: 5px;" width="100%"/>
  <figcaption align = "center"><b>Fig .6 - Tested</b></figcaption>
</figure>

<h2 style="color:red">
General Instructions:
</h2>

- Do not remove `data-cy=’xxx` or `data-testid=xxx` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the JSON file.

- Ensure that the GitHub link is correct. Share the link from where the package.json exists

<h2 style="color:red">
General guidelines:
</h2>

- The system on cp.masaischool.com may take between 1-20 minutes to respond
- So we request you to read the problem carefully and debug it before itself.
