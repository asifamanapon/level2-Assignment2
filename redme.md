# E-Commerce API

This project is an E-Commerce API created using Node.js, Express, and MongoDB by Md. Asif Aman Apon. It offers endpoints for managing products and orders.

## Features

- Create, read, update, and delete products
- Search for products
- Create and retrieve orders
- Retrieve orders by user email
- When creating a new order (`/api/orders`), the ordered product's `quantity` in inventory is reduced, and the `inStock` property is updated.
- When a new order is created, the system checks the available quantity in inventory.
- If the ordered quantity exceeds the available quantity, an error response indicating insufficient stock is r

## Prerequisites

Before running the application locally, ensure you have the following installed:

# Node.js (v14 or <<)
# MongoDB

## Getting Started

To run the application locally, follow these steps:

### 1. Clone the repository to your local machine:

```shell
git clone https://github.com/showkatali-dev/Apollo-Level2-Assignment2
2. Navigate to the project directory:
shell
Copy code
cd Apollo-Level2-Assignment2
3. Install dependencies:
shell
Copy code
npm install
4. Set up environment variables:
Create a .env file in the root directory of the project and define the following variables:

makefile
Copy code
PORT=4000
MONGO_URI=your-mongodb-uri
Replace your-mongodb-uri with your MongoDB connection URI.

5. Start the server:
shell
Copy code
npm run dev
The server will start running on port 4000. You can change the port in the .env file if needed.

6. Access the API endpoints:
You can now access the API endpoints locally using tools like cURL, Postman, or by making HTTP requests from your frontend application.

API Documentation
Product Management
1. Create a New Product
Endpoint: /api/products
Method: POST
Sample Request Body:
json
Copy code
{
  "name": "iPhone 13",
  "description": "A sleek and powerful smartphone with cutting-edge features.",
  "price": 999,
  "category": "Electronics",
  "tags": ["smartphone", "Apple", "iOS"],
  "variants": [
    {
      "type": "Color",
      "value": "Midnight Blue"
    },
    {
      "type": "Storage Capacity",
      "value": "256GB"
    }
  ],
  "inventory": {
    "quantity": 50,
    "inStock": true
  }
}
Sample Response:
json
Copy code
{
  "success": true,
  "message": "Product created successfully!",
  "data": {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB"
      }
    ],
    "inventory": {
      "quantity": 50,
      "inStock": true
    }
  }
}
2. Retrieve a List of All Products
Endpoint: /api/products
Method: GET
Sample Response:
json
Copy code
{
  "success": true,
  "message": "Products fetched successfully!",
  "data": [
    {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 50,
        "inStock": true
      }
    },
    {
      "name": "Samsung Galaxy S21",
      "description": "High-performance Android smartphone with advanced camera capabilities.",
      "price": 799,
      "category": "Electronics",
      "tags": ["smartphone", "Samsung", "Android"],
      "variants": [
        {
          "type": "Color",
          "value": "Phantom Black"
        },
        {
          "type": "Storage Capacity",
          "value": "128GB"
        }
      ],
      "inventory": {
        "quantity": 30,
        "inStock": true
      }
    }
    // Additional products can be added here...
  ]
}
3. Retrieve a Specific Product by ID
Endpoint: /api/products/:productId
Method: GET
Sample Response:
json
Copy code
{
  "success": true,
  "message": "Product fetched successfully!",
  "data": {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB"
      }
    ],
    "inventory": {
      "quantity": 50,
      "inStock": true
    }
  }
}
4. Update Product Information
Endpoint: /api/products/:productId
Method: PUT
Sample Request Body:
json
Copy code
{
  "name": "iPhone 13",
  "description": "A sleek and powerful smartphone with cutting-edge features.",
  "price": 999,
  "category": "Electronics",
  "tags": ["smartphone", "Apple", "iOS"],
  "variants": [
    {
      "type": "Color",
      "value": "Midnight Blue"
    },
    {
      "type": "Storage Capacity",
      "value": "256GB"
    }
  ],
  "inventory": {
    "quantity": 50,
    "inStock": true
  }
}
Sample Response:
json
Copy code
{
  "success": true,
  "message": "Product updated successfully!",
  "data": {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB"
      }
    ],
    "inventory": {
      "quantity": 49,
      "inStock": true
    }
  }
}
5. Delete a Product
Endpoint: /api/products/:productId
Method: DELETE
Sample Response:
json
Copy code
{
  "success": true,
  "message": "Product deleted successfully!",
  "data": null
}
6. Search for a Product
Endpoint: /api/products?searchTerm=iphone
Method: GET
Sample Response:
json
Copy code
{
  "success": true,
  "message": "Products matching search term 'iphone' fetched successfully!",
  "data": [
    {
      "name": "iPhone 13 Pro",
      "description": "The latest flagship iPhone model with advanced camera features.",
      "price": 999,
      "category": "Smartphones",
      "tags": ["iPhone", "Apple", "Mobile"],
      "variants": [
        {
          "type": "Color",
          "value": "Graphite"
        },
        {
          "type": "Storage",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 50,
        "inStock": true
      }
    },
    {
      "name": "iPhone SE",
      "description": "Compact and affordable iPhone model with powerful performance.",
      "price": 399,
      "category": "Smartphones",
      "tags": ["iPhone", "Apple", "Mobile"],
      "variants": [
        {
          "type": "Color",
          "value": "White"
        },
        {
          "type": "Storage",
          "value": "128GB"
        }
      ],
      "inventory": {
        "quantity": 20,
        "inStock": true
      }
    }
  ]
}
Order Management
1. Create a New Order
Endpoint: /api/orders
Method: POST
Request Body:
json
Copy code
{
  "email": "level2@programming-hero.com",
  "productId": "5fd67e890b60c903cd8544a3",
  "price": 999,
  "quantity": 1
}
Response:
json
Copy code
{
  "success": true,
  "message": "Order created successfully!",
  "data": {
    "email": "level2@programming-hero.com",
    "productId": "5fd67e890b60c903cd8544a3",
    "price": 999,
    "quantity": 1
  }
}
2. Retrieve All Orders
Endpoint: /api/orders
Method: GET
Sample Response:
json
Copy code
{
  "success": true,
  "message": "Orders fetched successfully!",
  "data": [
    {
      "email": "level2@programming-hero.com",
      "productId": "5fd67e890b60c903cd8544a3",
      "price": 999,
      "quantity": 1
    }
    // more orders...
  ]
}
3. Retrieve Orders by User Email
Endpoint: /api/orders?email=level2@programming-hero.com
Method: GET
Sample Response:
json
Copy code
{
  "success": true,
  "message": "Orders fetched successfully for user email!",
  "data": [
    {
      "email": "level2@programming-hero.com",
      "productId": "5fd67e890b60c903cd8544a3",
      "price": 999,
      "quantity": 1
    }
    // more orders for the user...
  ]
}
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Special thanks to Programming Hero for providing the project requirements and inspiration.