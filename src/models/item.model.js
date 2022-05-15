const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    id:{ type: String, required: true, trim: true},
})

const Item = mongoose.model('items', ItemSchema);

module.exports = Item;