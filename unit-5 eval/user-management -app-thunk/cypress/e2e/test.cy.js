/* eslint-disable no-undef */
import data from "../../submissionData.json"; // do not create this file

import books from "../fixtures/db.json";

// const data = [{ submission_link: "http://localhost:3000", id: "Shanti" }];

const getAuthStore = (win) => win.store.getState().authReducer;
const getBooksStore = (win) => win.store.getState().booksReducer;

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Redux Library management With Auth", () => {
    let acc_score = 1;

    before(() => {
      cy.writeFile("db.json", books, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
    beforeEach(() => {
      cy.visit(url);
      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`Should Have Initial Redux Store Structure for Authentication`, () => {
      cy.window()
        .then(getAuthStore)
        .should("deep.equal", {
          token: "",
          isAuth: false,
          loading: false,
          error: null,
          success: false,
        })
        .then(() => {
          acc_score += 1;
        });
    }); //1

    it(`Should Have Initial Redux Store Structure for Books`, () => {
      cy.window()
        .then(getBooksStore)
        .should("deep.equal", {
          books: [],
          loading: false,
          error: null,
          success: false,
        })
        .then(() => {
          acc_score += 1;
        });
    }); //1

    it(`Should update Books state in store when books loads on the dashboard`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/books").as("data");

      cy.window().then(getBooksStore).its("books").should("have.length", 0);
      cy.wait("@data");
      cy.wait(1000);

      cy.window().then(getBooksStore).its("books").should("have.length", 20);
      cy.then(() => (acc_score += 1));
    }); //1

    it("Should show the LOGO and `Login` option inside navbar while user is not authenticated", () => {
      cy.get("#loginBtn").should("exist");

      cy.get('[data-testid="user-token"]').should("not.exist");
      cy.get("#logoutBtn").should("not.exist");
      cy.get("#addnewBtn").should("not.exist");

      cy.then(() => (acc_score += 1));
    }); //1

    it("Should show loading indicator while API request is in progress", () => {
      cy.intercept("GET", "**/books", (req) => {
        req.on("response", (res) => {
          res.setDelay(1000);
        });
      }).as("data");

      cy.visit(url);
      cy.wait(100)

      cy.get('[data-testid="loading-indicator"]').should("exist");
      cy.window().then(getBooksStore).its("loading").should("equal", true);
      cy.wait("@data").then(() => {
        cy.get('[data-testid="loading-indicator"]').should("not.exist");
        cy.window().then(getBooksStore).its("loading").should("equal", false);
        cy.get("#dashBoard").should("exist");
      });

      cy.then(() => (acc_score += 2));
    }); //2

    it(`Should show all the books on the dashboard page`, () => {
      cy.get('[data-testid="all-books"]').children().should("have.length", 20);
      cy.get(".book_card").should("have.length", 20);

      cy.get(".book_card").each((el, index) => {
        cy.get(".book-name")
          .eq(index)
          .should("contain", books.books[index].title);
        cy.get(".book-author")
          .eq(index)
          .should("contain", books.books[index].author);
      });

      cy.then(() => (acc_score += 1));
    }); //1

    it(`Should update authReducer accordingly after login`, () => {
      cy.window().then(getAuthStore).its("isAuth").should("equal", false);
      cy.window().then(getAuthStore).its("token").should("equal", "");

      cy.intercept(
        "POST",
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login"
      ).as("login");

      cy.visit(`${url}login`);
      cy.get('input[type="email"]').clear().type("bruce@wayne.com");
      cy.get('input[type="password"]').clear().type("spsanchore");
      cy.get("form").submit();

      cy.wait("@login");
      cy.wait(1000);

      cy.window().then(getAuthStore).its("isAuth").should("equal", false);
      cy.window().then(getAuthStore).its("token").should("equal", "");
      cy.window().then(getAuthStore).its("error").should("not.to.be.null");
      cy.window().then(getAuthStore).its("success").should("equal", false);

      // trying with correct email and password
      cy.get('input[type="email"]').clear().type("bruce@wayne.com");
      cy.get('input[type="password"]').clear().type("gotham123");
      cy.get("form").submit();

      cy.wait("@login");
      cy.wait(1000);

      cy.window().then(getAuthStore).its("isAuth").should("equal", true);
      cy.window()
        .then(getAuthStore)
        .its("token")
        .should("equal", "r0bINJoKeRGoTham911");
      cy.window().then(getAuthStore).its("error").should("to.be.null");
      cy.window().then(getAuthStore).its("success").should("equal", true);
      cy.then(() => (acc_score += 3));
    }); //3

    it("Should show LOGO, `Add New Book` and Logout button and token inside navbar if user is authenticated", () => {
      cy.intercept(
        "POST",
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login"
      ).as("login");
      cy.visit(`${url}login`);
      cy.get('input[type="email"]').clear().type("bruce@wayne.com");
      cy.get('input[type="password"]').clear().type("gotham123");
      cy.get("form").submit();

      cy.wait("@login");
      cy.wait(1000);

      cy.window().then(getAuthStore).its("isAuth").should("equal", true);

      cy.get("#loginBtn").should("not.exist");

      cy.get('[data-testid="user-token"]').should("exist");
      cy.get("#logoutBtn").should("exist");
      cy.get("#addnewBtn").should("exist");

      cy.then(() => (acc_score += 3));
    }); //3

    it("Should have protected route `/addbook` ", () => {
      cy.visit(url + "addbook");
      cy.wait(100);
      cy.url().then((currentURL) => {
        expect(currentURL).to.equal(url + "login");
      });

      cy.then(() => (acc_score += 1));
    }); //1

    it(`Should add a new book`, () => {
      cy.visit(url);
      cy.intercept("GET", "/books").as("data");
      cy.intercept("POST", "/books").as("postData");
      cy.intercept(
        "POST",
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login"
      ).as("login");

      cy.wait("@data");
      cy.visit(url + "addbook");

      cy.wait(100);
      cy.url().then((currentURL) => {
        expect(currentURL).to.equal(url + "login");
      });

      cy.get('input[type="email"]').type("bruce@wayne.com");
      cy.get('input[type="password"]').type("gotham123");
      cy.get("form").submit();

      cy.wait("@login");
      cy.wait(500);
      cy.get("#addnewBtn").click();
      cy.url().then((currentURL) => {
        expect(currentURL).to.equal(url + "addbook");
      });

      cy.get('[data-testid="book-title"]').clear().type("War and Peace");
      cy.get('[data-testid="book-author"]').clear().type("Leo Tolstoy");
      cy.get('[data-testid="book-published_year"]').clear().type("1867");
      cy.get('[data-testid="book-genre"]').clear().type("Literary");
      cy.get('[data-testid="book-isbn"]').clear().type("458-1-50048-050-8");

      cy.get("form").submit();

      cy.wait("@postData");
      cy.wait(1000);

      cy.window().then(getBooksStore).its("books").should("have.length", 21);

      cy.window().then(getBooksStore).its("success").should("equal", true);

      cy.visit(url);

      cy.wait("@data");

      cy.get('[data-testid="all-books"]').children().should("have.length", 21);
      cy.get(".book_card").should("have.length", 21);

      cy.get(".book-name").eq(20).should("contain", "War and Peace");
      cy.get(".book-author").eq(20).should("contain", "Leo Tolstoy");

      cy.then(() => (acc_score += 3));
    }); //3

    it("Should logged out user on clicking 'Logout' button", () => {
      cy.intercept("GET", "/books").as("data");
      cy.intercept(
        "POST",
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login"
      ).as("login");

      // cy.wait("@data");
      cy.wait(5000);

      cy.get("#loginBtn").should("exist");

      cy.get('[data-testid="user-token"]').should("not.exist");
      cy.get("#logoutBtn").should("not.exist");
      cy.get("#addnewBtn").should("not.exist");

      cy.get("#loginBtn").click();

      cy.window().then(getAuthStore).should("deep.equal", {
        token: "",
        isAuth: false,
        loading: false,
        error: null,
        success: false,
      });
      cy.get("#dashBoard").should("not.exist");

      cy.get('input[type="email"]').type("bruce@wayne.com");
      cy.get('input[type="password"]').type("gotham123");
      cy.get("form").submit();

      cy.wait("@login");
      cy.wait(500);

      cy.get("#loginBtn").should("not.exist");

      cy.get('[data-testid="user-token"]').should("exist");
      cy.get("#logoutBtn").should("exist");
      cy.get("#addnewBtn").should("exist");
      cy.window().then(getAuthStore).should("deep.equal", {
        token: "r0bINJoKeRGoTham911",
        isAuth: true,
        loading: false,
        error: null,
        success: true,
      });

      cy.get("#logoutBtn").click();
      cy.wait(200);

      cy.get("#loginBtn").should("exist");

      cy.get('[data-testid="user-token"]').should("not.exist");
      cy.get("#logoutBtn").should("not.exist");
      cy.get("#addnewBtn").should("not.exist");

      cy.window().then(getAuthStore).should("deep.equal", {
        token: "",
        isAuth: false,
        loading: false,
        error: null,
        success: false,
      });

      cy.then(() => (acc_score += 2));
    }); //2

    after(() => {
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      // console.log(result);
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
