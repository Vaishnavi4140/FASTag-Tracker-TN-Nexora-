const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5001, // 5 second mein fail hoga agar connect nahi hua
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ DATABASE CONNECTION ERROR:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;