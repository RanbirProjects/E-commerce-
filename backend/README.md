# E-commerce Backend (MERN)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the `backend` directory with the following content:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000` by default. 

## Seeding Sample Products

To seed the database with sample products, run:
```bash
node scripts/seedProducts.js
```

## Protected Routes
- Product creation, update, and delete routes require authentication and admin privileges.
- Order creation and user order retrieval require authentication.
- Getting all orders requires admin privileges.

Include a valid JWT token in the `Authorization` header as `Bearer <token>` for protected routes. 