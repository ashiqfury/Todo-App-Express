const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: false,
		},
		description: {
			type: String,
			required: false,
		},
	},
	{ timeStamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
