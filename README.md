# Simple Product Display API

**Description**
    1. Display all the products.
    2. Display all the unique categories.
    3. Display all the available(inStock)    products.
    4. Display all the products in frontend in a clean way

**Technologies**
   Node.js +  Express backend
   Static frontend

## Project Structure
    productapi_adhil/
        node_modules/
        public/ 
            index.html
        .gitignore
        package-lock.json
        package.json
        server.js
        README.md

## API Documentation
    ` GET '/products' ` 
        Returns all the products.

    `GET '/products/categories'`
        Returns all the unique categories.

    `GET '/products/instock'`
        Returns all the products that are in stock.

## Installation & Setup Instructions
   `git clone <this_repo_url>`
   `npm install`
   `node server.js`
    Frontend: Inside the public folder.

**Github repo:** https://github.com/murasys00/product-catalog-api.git

**Author**
    Muhammed Adhil