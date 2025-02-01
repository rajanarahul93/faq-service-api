const mongoose = require('mongoose');
const redis = require('redis');


const redisClient = redis.createClient({
    url: process.env.REDIS_URL || 'redis://127.0.0.1:6379',
    socket: {
        tls: false, 
        reconnectStrategy: (attempts) => Math.min(attempts * 100, 3000),
    },
});


const initializeMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(' Successfully connected to MongoDB');
    } catch (err) {
        console.error(' MongoDB connection failed:', err);
        process.exit(1);
    }
};


redisClient.on('connect', () => console.log(' Redis server connected'));
redisClient.on('error', (error) => console.error(' Redis error:', error));


redisClient.connect();

module.exports = { initializeMongoDB, redisClient };
