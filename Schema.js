const mongoose = require('mongoose')
// const validator = require('validator')

const StoreSchema = mongoose.Schema({
    userId: {
        type: Number,
        trim: true,
        required: true
    },

    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        required: true
    }

})
const Storeone = mongoose.model('storeone', StoreSchema)
module.exports = Storeone;