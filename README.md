# Rangbazaar

Rangbazaar is an e-commerce application built using React, TypeScript, and Vite. It allows users to browse and purchase a variety of products online. This README provides an overview of the project setup, available scripts, and dependencies.

## Project Setup

To get started with Rangbazaar, follow these steps:

1. Clone the repository: `git clone https://github.com/reazs/rangbazar.git`
2. Navigate to the project directory: `cd rangbazaar`
3. Install the dependencies: `npm install`
4. Node.js
5. MongoDB
#  Configuration
Create a .env file in the backend directory and add the following environment variables:
    PORT=3000
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
## Usage
Start the MongoDB server.
cd server
Start the backend server:
node app.js
## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Runs the development server with hot-reloading using Vite.
- `npm run build`: Builds the project for production using TypeScript and Vite.
- `npm run lint`: Lints the source code using ESLint.
- `npm run preview`: Serves the production build locally for preview.
# API Endpoints
The backend server exposes the following API endpoints:

POST /api/auth/signup - User registration

POST /api/auth/login - User login

GET /api/products - Get all products

GET /api/products/:id - Get a specific product

POST /api/cart - Add a product to the shopping cart

GET /api/cart - Get the contents of the shopping cart

PUT /api/cart/:id - Update the quantity of a product in the shopping cart

DELETE /api/cart/:id - Remove a product from the shopping cart

POST /api/orders - Place an order

# Project Demo
![home_page](https://github.com/reazs/rangbazar/assets/91802731/9125edb9-4123-45e5-9ff7-c503777458f8)

![shop_page](https://github.com/reazs/rangbazar/assets/91802731/c51b05a4-61fc-48cd-9522-5caa3bd06596)

![shopping](https://github.com/reazs/rangbazar/assets/91802731/917a8a36-05be-4f60-86e9-330039875452)

![user_page](https://github.com/reazs/rangbazar/assets/91802731/feeaf5b6-8952-4a5c-81bc-3c7369313a30)

![review](https://github.com/reazs/rangbazar/assets/91802731/8fd12297-1bdc-41b4-b852-65bbd8cd8304)

![order_page](https://github.com/reazs/rangbazar/assets/91802731/7e193a4c-9e63-419a-93c7-201fe7347ca3)

![about_page](https://github.com/reazs/rangbazar/assets/91802731/666e37ae-dc44-408b-bd4a-ba3fc998278f)

![contact_page](https://github.com/reazs/rangbazar/assets/91802731/739fd1a7-1f15-43c2-b936-bb964cf53166)

![singIn_page](https://github.com/reazs/rangbazar/assets/91802731/9a32de7f-48e2-4cff-a884-43cdf936b6f6)

![singUp_page](https://github.com/reazs/rangbazar/assets/91802731/afbd59af-b35f-401e-92fe-1c4a52a564a7)


## Conclusion

Rangbazaar is a powerful e-commerce application that provides an engaging shopping experience. It leverages modern web technologies and libraries to deliver a responsive and intuitive user interface. Feel free to explore and customize the codebase to suit your specific requirements.

If you have any questions or need further assistance, please don't hesitate to contact us. Happy shopping with Rangbazaar!
