# React-Fetch & Filter-Books

## Submission Instructions [Please note]

## Maximum Marks - 20

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Should be able to make GET request  - 3 marks
 ✅ Loading.... text should be visible when the API request is made - 2 marks
 ✅ Should display all books on the homepage - 3 marks
 ✅ Able to filter data based on Category -1 - 2 marks
 ✅ Able to filter data based on Category -2 - 2 marks
 ✅ Able to sort the data in ascending order - 2 marks
 ✅ Able to sort the data in descending order - 2 marks
 ✅ searching functionality is working as expected and on clearing the search input all results are visible  - 3 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,

  - `npm install --engine-strict`
  - `npm start`
  - `npm run server` -> to start the json-server

- **_Note_**:

1. Make sure that the json-server is up and running at port `8080`
2. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it and restart the react server
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server URL where ever you use `http://localhost:8080`
4. Use only fetch.<br>
5. **Add the loading indicator as mentioned in the boilerplate. (Hint:- The select tags should exist on the DOM when you are showing the loading indicator)**

### Not following the above instructions will lead your test cases to fail

## Problem Statement

## Understanding Component Structure

- Components
  - Booklist
  - Book
- App.js

**Note** - `Make sure you use only the given components and don't create new files and folders. Changing the component name, and structures might result in giving you zero marks.`

## Understanding Data Structure

- db.json (go through db.json file to understand the data structure)

**Note** - `Make sure you use only the given data and don't create new data. Changing data might result in giving you zero marks`

## Problem statement

Create a react book inventory application, where users can see the listed books. Users should be able to filter the books by selecting the category. Users can also sort the list of books in ascending or descending order by title, author, category, and publication data. (the sort, filter and search can work independently, working together is not needed in this application)

### App

- This component will have a `BookList` component rendered into it.

### Booklist
- use only `Fetch` to make API call
- on load get all the book details with a GET request to `/books` endpoint (make sure to use the env variable and do not hard code 8080 port)
- display the details of the book in cards with a nice UI
- use `Book.jsx` component to render the card details.
- use `Loading...` whenever the API request is made.

### The UI when the API request is made.
![](https://i.imgur.com/1fN1ikK.png)

### The UI after a successful API request

![](https://i.imgur.com/fBSMAP8.png)

- This component also has 3 drop down and an input field
- The first dropdown with `className ="filter-by-category"` will have all the categories selected
- on selecting a category send the respective query params (?category) and display the results.
- if the category is `all` get all the details (no query param only `/books`)

#### category `Dystopian` is selected (use query param `category`)

![](https://i.imgur.com/faREY81.png)

- the second and third dropdown elements are to sort the books by selecting a category and the order (asc/desc)

### Sort by `category` and order by `asc` (use query params `_sort` and `_order`) you can sort by title, author, and publication date also

![](https://i.imgur.com/j6IyqaE.png)

### sort by `category` and order by `desc` (use query params `_sort` and `_order`) you can sort by title, author, and publication date also. (should select both sort and order to get filtered results)

![](https://i.imgur.com/PNHzAxh.png)

- This component has an input field on changing the search keyword the call should happen with the respective search query params (the search should not be case sensitive ex., we should be  able to get results for Garewell or garewell)

### search by george name (use `q` query params)

![](https://i.imgur.com/EerOz1Q.png)

Note: 
To perform the above operations, you need to use query parameters to make a request to the JSON server and get the filtered data based on the search query.
- It's mandatory not to perform sorting in the app and instead, use query parameters to sort the data on the server-side.
- refer to json server documentation for query params:- [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

### Book

- This component displays the following details for each book in the library: title, author, ISBN, category, and publication date.

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this is used by testing tools to test your code, and removal of this will lead to a low score.
3. Make sure you use only the given components and don't create new files and folders as changing the component name, or structures might result in giving you zero marks
4. Make sure you use only the given data and don't create new data, as changing data might result in giving you zero marks.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
