# E-Commerce Back End

## Description

The E-Commerce Back End is a robust and scalable backend system built using the latest technologies. This backend provides essential APIs for managing categories, products, and tags, following best practices for ORM-based web applications. The backend interacts with a MySQL database through Sequelize, delivering a comprehensive solution for managing e-commerce data.

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mpierson00/E-Commerce-BackEnd.git
2. Navigate to the project directory: 
    ```bash
    cd E-Commerce-BackEnd
3. Install dependencies: 
    ```bash
    npm install
4. Set up the environment variables:
    - Create a .env file in the root directory with the following content:
    ```plaintext
    DB_NAME='ecommerce_db'
    DB_USER='root'
    DB_PASSWORD='your_password'

    - Replace your_password with your MySQL password.
5. Set up the database:
    - Start MySQL and create the database manually using:
    ```sql
    CREATE DATABASE ecommerce_db;
- Optionally, use a database seeding script:
    ```bash
    node seeds/index.js

## Usage

1. Start the server:
    ```bash
    npm start
2. The server runs on 'http://localhost:3001 by default.

## API Endpoints

### Categories

- GET /api/categories: Retrieve all categories.
- GET /api/categories/:id: Retrieve a single category by its ID.
- POST /api/categories: Create a new category.
- PUT /api/categories/:id: Update a category by its ID.
- DELETE /api/categories/:id: Delete a category by its ID.

### Products

- GET /api/products: Retrieve all products.
- GET /api/products/:id: Retrieve a single product by its ID.
- POST /api/products: Create a new product.
- PUT /api/products/:id: Update a product by its ID.
- DELETE /api/products/:id: Delete a product by its ID.

### Tags

- GET /api/tags: Retrieve all tags.
- GET /api/tags/:id: Retrieve a single tag by its ID.
- POST /api/tags: Create a new tag.
- PUT /api/tags/:id: Update a tag by its ID.
- DELETE /api/tags/:id: Delete a tag by its ID.

## Walkthrough Video

To see the project in action, please watch the [walkthrough video](https://www.youtube.com/watch?v=-TkMAIyel2k).

## License 

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository.
2. Create your feature branch:
    ```bash
    git checkout -b feature/AmazingFeature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add some AmazingFeature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/AmazingFeature
    ```
5. Open a pull request.

## Questions

If you have any questions, please feel free to reach out through GitHub or submit an issue.

- GitHub: [@Mpierson00](https://github.com/Mpierson00)