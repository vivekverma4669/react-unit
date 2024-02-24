/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
// const data = [
// 	{
// 		submission_link: "http://localhost:3000",
// 		id: "manish-local",
// 		json_server_link: `http://localhost:8080/`,
// 	},
// ];
import booksData from "../fixtures/books.json";

let categorysortedData = [
	{
		id: 1,
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		isbn: "9780061120084",
		category: "Classic",
		publication_date: "1960-07-11",
	},
	{
		id: 4,
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		isbn: "9780743273565",
		category: "Classic",
		publication_date: "1925-04-10",
	},
	{
		id: 13,
		title: "The Adventures of Huckleberry Finn",
		author: "Mark Twain",
		isbn: "9780486280615",
		category: "Classic",
		publication_date: "1884-12-10",
	},
	{
		id: 14,
		title: "The Picture of Dorian Gray",
		author: "Oscar Wilde",
		isbn: "9780141439570",
		category: "Classic",
		publication_date: "1890-07-01",
	},
	{
		id: 6,
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		isbn: "9780316769488",
		category: "Coming of age",
		publication_date: "1951-07-16",
	},
	{
		id: 2,
		title: "1984",
		author: "George Orwell",
		isbn: "9780451524935",
		category: "Dystopian",
		publication_date: "1949-06-08",
	},
	{
		id: 3,
		title: "Brave New World",
		author: "Aldous Huxley",
		isbn: "9780060850524",
		category: "Dystopian",
		publication_date: "1932-01-01",
	},
	{
		id: 15,
		title: "The Odyssey",
		author: "Homer",
		isbn: "9780140268867",
		category: "Epic poem",
		publication_date: "1890-07-01",
	},
	{
		id: 7,
		title: "The Lord of the Rings",
		author: "J.R.R. Tolkien",
		isbn: "9780544003415",
		category: "Fantasy",
		publication_date: "1954-07-29",
	},
	{
		id: 8,
		title: "Harry Potter and the Philosopher's Stone",
		author: "J.K. Rowling",
		isbn: "9780590353403",
		category: "Fantasy",
		publication_date: "1997-06-26",
	},
	{
		id: 10,
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		isbn: "9780547928227",
		category: "Fantasy",
		publication_date: "1937-09-21",
	},
	{
		id: 11,
		title: "The Da Vinci Code",
		author: "Dan Brown",
		isbn: "9780307474278",
		category: "Mystery",
		publication_date: "2003-03-18",
	},
	{
		id: 12,
		title: "The Girl with the Dragon Tattoo",
		author: "Stieg Larsson",
		isbn: "9780307269751",
		category: "Mystery",
		publication_date: "2005-08-23",
	},
	{
		id: 9,
		title: "Animal Farm",
		author: "George Orwell",
		isbn: "9780451526342",
		category: "Political satire",
		publication_date: "1945-08-17",
	},
	{
		id: 5,
		title: "Pride and Prejudice",
		author: "Jane Austen",
		isbn: "9780141439518",
		category: "Romance",
		publication_date: "1813-01-28",
	},
];
let titleSortedData = [
	{
		id: 2,
		title: "1984",
		author: "George Orwell",
		isbn: "9780451524935",
		category: "Dystopian",
		publication_date: "1949-06-08",
	},
	{
		id: 9,
		title: "Animal Farm",
		author: "George Orwell",
		isbn: "9780451526342",
		category: "Political satire",
		publication_date: "1945-08-17",
	},
	{
		id: 3,
		title: "Brave New World",
		author: "Aldous Huxley",
		isbn: "9780060850524",
		category: "Dystopian",
		publication_date: "1932-01-01",
	},
	{
		id: 8,
		title: "Harry Potter and the Philosopher's Stone",
		author: "J.K. Rowling",
		isbn: "9780590353403",
		category: "Fantasy",
		publication_date: "1997-06-26",
	},
	{
		id: 5,
		title: "Pride and Prejudice",
		author: "Jane Austen",
		isbn: "9780141439518",
		category: "Romance",
		publication_date: "1813-01-28",
	},
	{
		id: 13,
		title: "The Adventures of Huckleberry Finn",
		author: "Mark Twain",
		isbn: "9780486280615",
		category: "Classic",
		publication_date: "1884-12-10",
	},
	{
		id: 6,
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		isbn: "9780316769488",
		category: "Coming of age",
		publication_date: "1951-07-16",
	},
	{
		id: 11,
		title: "The Da Vinci Code",
		author: "Dan Brown",
		isbn: "9780307474278",
		category: "Mystery",
		publication_date: "2003-03-18",
	},
	{
		id: 12,
		title: "The Girl with the Dragon Tattoo",
		author: "Stieg Larsson",
		isbn: "9780307269751",
		category: "Mystery",
		publication_date: "2005-08-23",
	},
	{
		id: 4,
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		isbn: "9780743273565",
		category: "Classic",
		publication_date: "1925-04-10",
	},
	{
		id: 10,
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		isbn: "9780547928227",
		category: "Fantasy",
		publication_date: "1937-09-21",
	},
	{
		id: 7,
		title: "The Lord of the Rings",
		author: "J.R.R. Tolkien",
		isbn: "9780544003415",
		category: "Fantasy",
		publication_date: "1954-07-29",
	},
	{
		id: 15,
		title: "The Odyssey",
		author: "Homer",
		isbn: "9780140268867",
		category: "Epic poem",
		publication_date: "1890-07-01",
	},
	{
		id: 14,
		title: "The Picture of Dorian Gray",
		author: "Oscar Wilde",
		isbn: "9780141439570",
		category: "Classic",
		publication_date: "1890-07-01",
	},
	{
		id: 1,
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		isbn: "9780061120084",
		category: "Classic",
		publication_date: "1960-07-11",
	},
];

Cypress.on("uncaught:exception", (err, runnable) => {
	return false;
});

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
	describe("react fetch and filter books", function () {
		let acc_score = 1;

		beforeEach(() => {
			if (url.charAt(url.length - 1) != "/") {
				url = url + "/";
			}
		});
		it(`Should be able to make GET request `, () => {
			cy.intercept("GET", "**/books", { fixture: "books.json" }).as("getbooks");
			cy.visit(url);
			cy.wait("@getbooks").then((res) => {
				console.log(res, "res");
				expect(res.response.body.length).to.be.equal(15);
				expect(res.response.statusCode).to.be.equal(200);
			});

			cy.then(() => {
				acc_score += 3;
			});
		});
		it(`Loading.... text should be visible when the API request is made `, () => {
			cy.intercept("GET", "**/books", {
				fixture: "books.json",
				delay: 2000,
			}).as("getbooks");
			cy.visit(url);

			cy.get(".loading-text").should("be.visible");
			cy.wait("@getbooks");
			cy.get(".loading-text").should("not.exist");

			cy.then(() => {
				acc_score += 2;
			});
		});

		it(`Should display all books on homepage as cards`, () => {
			cy.intercept("GET", "**/books").as("getbooks");
			cy.visit(url);
			cy.wait("@getbooks");
			cy.get(".book").should("have.length", booksData.length);
			booksData.forEach((ele, ind) => {
				cy.get(`.book:nth-child(${ind + 1}) h2`).should("contain", ele.title);
				cy.get(`.book:nth-child(${ind + 1}) p`)
					.eq(0)
					.should("contain", ele.author);
				cy.get(`.book:nth-child(${ind + 1}) p`)
					.eq(1)
					.should("contain", ele.isbn);
				cy.get(`.book:nth-child(${ind + 1}) p`)
					.eq(2)
					.should("contain", ele.category);
				cy.get(`.book:nth-child(${ind + 1}) p`)
					.eq(3)
					.should("contain", ele.publication_date);
			});
			cy.then(() => {
				acc_score += 3;
			});
		});

		it(`Able to filter data based on Category - 1`, () => {
			cy.intercept("GET", "**/books").as("getbooks");
			cy.intercept("GET", "**/books?**").as("getCatbooksfiltered");
			cy.visit(url);
			cy.wait("@getbooks");
			// cy.intercept("GET", "**/books?**").as("getCatbooks");
			let arr = ["Classic", "Dystopian", "Romance", "Coming of age"];
			for (let i = 0; i < arr.length; i = i + 2) {
				let filterOption = arr[i];
				let filterData = booksData.filter((ele) => {
					return ele.category === filterOption;
				});
				cy.get(".filter-by-category").should("be.visible").select(arr[i]);
				cy.wait("@getCatbooksfiltered");
				filterData.forEach((ele, ind) => {
					cy.get(`.book:nth-child(${ind + 1}) h2`).should("contain", ele.title);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(0)
						.should("contain", ele.author);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(1)
						.should("contain", ele.isbn);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(2)
						.should("contain", ele.category);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(3)
						.should("contain", ele.publication_date);
				});
			}
			cy.then(() => {
				acc_score += 2;
			});
		});

		it(`Able to filter data based on Category - 2`, () => {
			cy.intercept("GET", "**/books").as("getbooks");
			cy.intercept("GET", "**/books?**").as("getCatbooksfiltered");
			cy.visit(url);
			cy.wait("@getbooks");
			// cy.intercept("GET", "**/books?**").as("getCatbooks");
			let arr = ["Fantasy", "Political satire", "Mystery", "Epic poem"];
			for (let i = 0; i < arr.length; i = i + 2) {
				let filterOption = arr[i];
				let filterData = booksData.filter((ele) => {
					return ele.category === filterOption;
				});
				cy.get(".filter-by-category").should("be.visible").select(arr[i]);
				cy.wait("@getCatbooksfiltered");
				filterData.forEach((ele, ind) => {
					cy.get(`.book:nth-child(${ind + 1}) h2`).should("contain", ele.title);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(0)
						.should("contain", ele.author);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(1)
						.should("contain", ele.isbn);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(2)
						.should("contain", ele.category);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(3)
						.should("contain", ele.publication_date);
				});
			}
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("Able to sort the data in ascending order", () => {
			cy.intercept("GET", "**/books").as("getbooks");
			cy.intercept("GET", "**/books?**").as("getCatbookssorted");
			cy.visit(url);
			cy.wait("@getbooks");
			let sortOptions = ["title", "category"];
			cy.get(".sort-by").should("be.visible").select("category");
			cy.get(".order").should("be.visible").select("asc");
			cy.wait("@getCatbookssorted");
			categorysortedData.forEach((ele, ind) => {
				//checking random elements as some times taking more time in one test case
				if (ind % 4 === 0) {
					cy.get(`.book:nth-child(${ind + 1}) h2`).should("contain", ele.title);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(0)
						.should("contain", ele.author);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(1)
						.should("contain", ele.isbn);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(2)
						.should("contain", ele.category);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(3)
						.should("contain", ele.publication_date);
				}
			});
			cy.visit(url);
			cy.wait("@getbooks").then(()=>{
				cy.get(".sort-by").should("be.visible").select("title");
			cy.get(".order").should("be.visible").select("asc");
			cy.wait("@getCatbookssorted");
			titleSortedData.forEach((ele, ind) => {
				//checking random elements as some times taking more time in one test case
				if (ind % 3 === 1) {
					cy.get(`.book:nth-child(${ind + 1}) h2`).should("contain", ele.title);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(0)
						.should("contain", ele.author);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(1)
						.should("contain", ele.isbn);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(2)
						.should("contain", ele.category);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(3)
						.should("contain", ele.publication_date);
				}
			});

			})
			
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("Able to sort the data in descending order", () => {
			cy.intercept("GET", "**/books").as("getbooks");
			cy.intercept("GET", "**/books?**").as("getCatbookssorted");
			cy.visit(url);
			cy.wait("@getbooks");
			let sortOptions = ["title", "category"];
			cy.get(".sort-by").should("be.visible").select("category");
			cy.get(".order").should("be.visible").select("desc");
			cy.wait("@getCatbookssorted");
			categorysortedData.sort((a, b) => {
				if (a.category > b.category) {
					return -1;
				} else if (a.category < b.category) {
					return 1;
				} else {
					return 0;
				}
			});
			categorysortedData.forEach((ele, ind) => {
				//checking random elements as some times taking more time in one test case
				if (ind % 4 === 0) {
					cy.get(`.book:nth-child(${ind + 1}) h2`).should("contain", ele.title);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(0)
						.should("contain", ele.author);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(1)
						.should("contain", ele.isbn);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(2)
						.should("contain", ele.category);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(3)
						.should("contain", ele.publication_date);
				}
			});
			cy.visit(url);
			cy.get(".sort-by").should("be.visible").select("title");
			cy.get(".order").should("be.visible").select("desc");
			cy.wait("@getCatbookssorted");
			titleSortedData.sort((a, b) => {
				if (a.title > b.title) {
					return -1;
				} else if (a.title < b.title) {
					return 1;
				} else {
					return 0;
				}
			});
			titleSortedData.forEach((ele, ind) => {
				//checking random elements as some times taking more time in one test case
				if (ind % 3 === 1) {
					cy.get(`.book:nth-child(${ind + 1}) h2`).should("contain", ele.title);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(0)
						.should("contain", ele.author);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(1)
						.should("contain", ele.isbn);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(2)
						.should("contain", ele.category);
					cy.get(`.book:nth-child(${ind + 1}) p`)
						.eq(3)
						.should("contain", ele.publication_date);
				}
			});

			cy.then(() => {
				acc_score += 2;
			});
		});

		it("searching functionality is working as expected and on clearing the search input all results are visible", () => {
      cy.intercept("GET", "**/books").as("getbooks");
      cy.visit(url);
      cy.wait("@getbooks");
      let searchquery = [
        "The Odyssey",
        "1932-01-01",
        "Homer",
        "dys",
        "97804515",
      ];
      let searchresults = [
        [
          {
            id: 15,
            title: "The Odyssey",
            author: "Homer",
            isbn: "9780140268867",
            category: "Epic poem",
            publication_date: "1890-07-01",
          },
        ],
        [
          {
            id: 3,
            title: "Brave New World",
            author: "Aldous Huxley",
            isbn: "9780060850524",
            category: "Dystopian",
            publication_date: "1932-01-01",
          },
        ],
        [
          {
            id: 15,
            title: "The Odyssey",
            author: "Homer",
            isbn: "9780140268867",
            category: "Epic poem",
            publication_date: "1890-07-01",
          },
        ],
        [
          {
            id: 2,
            title: "1984",
            author: "George Orwell",
            isbn: "9780451524935",
            category: "Dystopian",
            publication_date: "1949-06-08",
          },
          {
            id: 3,
            title: "Brave New World",
            author: "Aldous Huxley",
            isbn: "9780060850524",
            category: "Dystopian",
            publication_date: "1932-01-01",
          },
          {
            id: 15,
            title: "The Odyssey",
            author: "Homer",
            isbn: "9780140268867",
            category: "Epic poem",
            publication_date: "1890-07-01",
          },
        ],
        [
          {
            id: 2,
            title: "1984",
            author: "George Orwell",
            isbn: "9780451524935",
            category: "Dystopian",
            publication_date: "1949-06-08",
          },
          {
            id: 9,
            title: "Animal Farm",
            author: "George Orwell",
            isbn: "9780451526342",
            category: "Political satire",
            publication_date: "1945-08-17",
          },
        ],
      ];
      cy.intercept("GET", "**/books?**").as("getsearchedbooks");
      for (let i = 0; i < searchquery.length; i = i + 2) {
        cy.get("input").clear().type(searchquery[i]);
        cy.wait("@getsearchedbooks").then(() => {
          cy.wait(1500).then(() => {
            searchresults[i].forEach((ele, ind) => {
              cy.get(`.book:nth-child(${ind + 1}) h2`).should(
                "contain",
                ele.title
              );
              cy.get(`.book:nth-child(${ind + 1}) p`)
                .eq(0)
                .should("contain", ele.author);
              cy.get(`.book:nth-child(${ind + 1}) p`)
                .eq(1)
                .should("contain", ele.isbn);
              cy.get(`.book:nth-child(${ind + 1}) p`)
                .eq(2)
                .should("contain", ele.category);
              cy.get(`.book:nth-child(${ind + 1}) p`)
                .eq(3)
                .should("contain", ele.publication_date);
            });
          });
        });
      }
      cy.get("input").clear();
      cy.wait("@getsearchedbooks").then(() => {
        cy.get(".book").should("have.length", booksData.length);
      });
      cy.then(() => {
        acc_score += 3;
      });
    });
		
		it(`generate score`, () => {
			console.log("final score:", acc_score);
			////////////// this should not be changed
			let result = {
				id,
				marks: Math.ceil(acc_score),
			};
			result = JSON.stringify(result);
			cy.writeFile("results.json", `\n${result},`, (err) => {
				if (err) {
					console.error(err);
				}
			});
			//////////////////
		});
	});
});
