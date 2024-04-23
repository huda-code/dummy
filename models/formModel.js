const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  // ... define your form schema fields here ...
});

module.exports = mongoose.model('Form', formSchema);
