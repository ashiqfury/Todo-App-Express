const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{ timeStamps: true }
)

const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo
