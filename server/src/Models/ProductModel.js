var mongoose = require('mongoose')
var Float = require('mongoose-float').loadType(mongoose, 2)

var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  quantity: {
    type: Number,
    required: [true, 'quantity is required']
  },
  value: {
    type: Float,
    required: [true, 'value is required']
  },
  validity: {
    type: Date,
    required: [true, 'validity is required']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)