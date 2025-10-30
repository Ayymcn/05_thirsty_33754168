# The Book & Bottle - Dynamic EJS Web App

A dynamic web application built with Node.js, Express.js, and the EJS templating engine. This project demonstrates how to build a server-rendered website, separate application logic from presentation (using a `views` directory), and handle complex form submissions with both `GET` and `POST` methods.

## Technologies Used

* **Node.js** - To run the JavaScript server-side environment.
* **Express.js** - A web application framework for Node.js, used for:
    * Creating and managing the server.
    * Handling HTTP requests (`GET` and `POST`).
    * Implementing the routing logic and serving static files (CSS).
    * Parsing form data using the `express.urlencoded` middleware.
* **EJS (Embedded JavaScript)** - A templating engine used to dynamically generate HTML pages on the server. This allows for injecting data (like shop names, product lists, or locations) directly into the view files.
* **HTML & CSS** - For structuring and styling the content of the web pages.

## Features

This web application includes the following routes and features:

* **Dynamic Templating**: Uses `res.render()` to serve all pages from a `views/` directory. The `shopName` is dynamically injected into all pages.
* **Dynamic Data Injection**:
    * `/`: The home page, which dynamically builds a product list by looping over a `productCategories` array.
    * `/about`: An "About Us" page that dynamically displays a list of shop locations by looping over an array of `locations` objects.
* **Static File Serving**: Serves a custom stylesheet (`style.css`) from a `public/` directory to all pages.
* **Form Handling**:
    * `/search`: A page with a `GET` form for searching, which passes data to the URL as query parameters.
    * `/register`: A page with a `POST` form for user registration.
    * `/registered`: The route that handles the `POST` data from the registration form and displays a confirmation.
    * `/survey`: A page with a complex `POST` form that dynamically generates its radio button options from the `productCategories` array.
    * `/submit-survey`: The route that handles the survey submission, processes the data (including checkbox logic), and renders a "tidy" summary on the `survey-result.ejs` page.
* **Persistent Navigation**: A navigation bar is present on all pages for consistent user experience.

## How to Install and Run Locally

To get this project running on your local machine, follow these steps.

### 1. Clone the repository

```bash
git clone <your-github-repo-url>
cd 05_thirsty_33754168
```

### 2. Install dependencies

This project uses dependencies (Express, EJS) listed in `package.json`. These must be installed via npm.

```bash
npm install
```

### 3. Run the server

```bash
node index.js
```

You should see a message in your terminal confirming that the server is running on port 8000.

### 4. Open your browser

Visit `http://localhost:8000` to see the home page. You can then navigate to the other pages like `/about`, `/search`, `/register`, and `/survey`.

## Deployment to a Server (VM)

To run this application on a production server:

1.  Clone the repository and `cd` into the project directory as shown above.
2.  Run `npm install` to install the dependencies on the server.
3.  Use `forever` to start the application in the background.

```bash
forever start index.js
```
