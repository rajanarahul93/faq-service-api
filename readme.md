# FAQ Service API

## Overview
This project provides a RESTful API for managing FAQs (Frequently Asked Questions) with multi-language support. It utilizes MongoDB for database storage, Redis for caching, and Express.js for the backend framework. The API supports CRUD operations and automatic translation of FAQs into Hindi (`hi`) and Bengali (`bn`).

## Features
- CRUD operations for FAQs
- Multi-language support
- Caching with Redis for improved performance
- Auto-translation of FAQs
- API testing with Mocha and Chai

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Caching**: Redis
- **Testing**: Mocha, Chai, Chai-HTTP

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or cloud instance)
- [Redis](https://redis.io/download)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/rajanarahul93/faq-service-api
   cd faq-service-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/faq_db
   REDIS_URL=redis://127.0.0.1:6379
   GOOGLE_GEMINI_API_KEY
   ```

4. Start the MongoDB and Redis servers.

5. Run the server:
   ```sh
   npm start
   ```
   The API will be available at `http://localhost:3000`.

## API Endpoints

### FAQ Routes

#### Get FAQs
```http
GET /api/faqs?lang=en
```
- Fetches all FAQs, with optional language support (`en`, `hi`, `bn`).

#### Create an FAQ
```http
POST /api/faqs
```
- Request Body:
  ```json
  {
    "query": "What is Node.js?",
    "response": "Node.js is a JavaScript runtime."
  }
  ```
- Response: FAQ with translations added automatically.

#### Update an FAQ
```http
PUT /api/faqs/:id
```
- Updates an FAQ by ID.

#### Delete an FAQ
```http
DELETE /api/faqs/:id
```
- Deletes an FAQ by ID.

## Testing
To run tests, execute:
```sh
npm test
```
This will run Mocha and Chai tests to validate API functionality.

