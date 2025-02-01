require('dotenv').config();
const connectDB = require("./config/db");
const FAQ = require('./models/FAQ');
const express = require('express');
const cors = require('cors');
const app = express();



connectDB();

//middlewares
app.use(cors());
app.use(express.json());

//Backend is running
app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 3000;

const faqRoutes = require('./routes/faq');
app.use('/api/faqs',faqRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



