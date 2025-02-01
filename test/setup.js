const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const { connectDB, client } = require('../src/db/connect');

chai.use(chaiHttp);
const { expect } = chai;

before(async () => {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/faq_test_db';
  await connectDB();
});

beforeEach(async () => {
  await mongoose.connection.db.dropDatabase();
  await client.flushAll();
});

module.exports = { expect, app };