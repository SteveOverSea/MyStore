# MyStore

This is the capstone project of Udacity's Full Stack JavaScript Nanodegree.
It showcases basic Angular usage in the example of a web-store. 

It features following functionality:

- Shows a list of products (either from provided .json or API connection)
- Shows a product details view when clicked on product
- Add products to cart, remove them there and checkout the order
  
Additional functionality if you connect this project to the previous Nanodegree API project [Storefront Backend](https://github.com/SteveOverSea/Storefront-Backend). 

- Login as a user and have access to a userpage to show your orders
- Create a new user, if the credentials don't find an existing one
- Login as admin to remove or add products to the store

## Configuration without Backend

### Prerequisites

- Node.js
- AngularJS

### Instructions

1. Download the files in this repository
2. cd into the directory
3. ```npm install```
4. ```ng serve```
5. The project will be served on default on ```localhost:4200```

## Configuration with [Storefront Backend](https://github.com/SteveOverSea/Storefront-Backend)

### Prerequisites

- Node.js
- AngularJS
- PostgreSQL

### Instructions

1. Download [My Store](https://github.com/SteveOverSea/MyStore) and [Storefront Backend](https://github.com/SteveOverSea/Storefront-Backend)
2. Follow the database and API configuration steps from the [README](https://github.com/SteveOverSea/Storefront-Backend/blob/master/README.md)
   - You don't have to run any test commands or setup a TestDB name
3. cd into the MyStore directory and ```npm install```
4. In the MyStore project look into ```src/environments/environment.ts``` and check if the ``àpi_host`` is one same port/url the API server is running (default: localhost:3000)
   - also note that in this file there are also the credentials for the admin user for the web store
5. Build the project with ```ng build```
6. In the .env from the API also fill in the variable ```PROJECT_PATH``` which should be a string of the absolute path to the created dist directory for the app ```"<your path>/dist/my-store"```
7. Run ```db-migrate up``` and ```npm run start``` on the API server
8. Go to ```localhost:3000```and enjoy the project!

## Project Preview

Store Homepage

![Store Homepage](https://i.ibb.co/XXvLZx6/Screenshot-2021-05-24-at-13-22-24.png)

Product Detail View

![Product Detail View](https://i.ibb.co/6D1z65d/Screenshot-2021-05-24-at-13-22-48.png)

Cart

![Cart](https://i.ibb.co/9WwwTPP/Screenshot-2021-05-24-at-13-23-07.png)

Login

![Login](https://i.ibb.co/TYpdzvL/Screenshot-2021-05-24-at-13-23-54.png)

Order Confirmation

![Order Confirmation](https://i.ibb.co/qpb07dQ/Screenshot-2021-05-24-at-13-24-37.png)

Userpage

![Userpage](https://i.ibb.co/b2yXJFt/Screenshot-2021-05-24-at-13-24-56.png)

Admin View

![Admin View](https://i.ibb.co/VDP5S61/Screenshot-2021-05-24-at-13-25-12.png)

Add a Product

![Add a Product](https://i.ibb.co/r6bhybD/Screenshot-2021-05-24-at-13-25-21.png)
