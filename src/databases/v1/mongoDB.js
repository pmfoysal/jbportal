const mongoose = require('mongoose');

async function connectDB() {
   try {
      await mongoose.connect(process.env.DB_URL, {
         appName: 'node-mongo-acc',
         keepAlive: true,
         dbName: 'assignment-03',
      });
      console.log(`Database connected successfully!`.blue.bold);
   } catch (e) {
      console.log(`${e?.message}`.red.bold);
   }
}

module.exports = connectDB;
