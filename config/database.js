const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://riteshshukla:riteshshukla@cluster0.fo6fefn.mongodb.net/taiyo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
