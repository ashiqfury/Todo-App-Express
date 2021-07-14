const Todo = require('../models/todoModel');

const todo_index = (req, res) => {
	Todo.find()
		.then((result) => {
			res.render('index', { title: 'Home Page', todo: result });
		})
		.catch((err) => console.log(err));
};

const todo_create_get = (req, res) => {
	res.render('create', { title: 'Create Page' });
};

const todo_create_post = (req, res) => {
	const todo = new Todo(req.body);

	const category = req.body.category ? req.body.category : 'No category';
	const description = req.body.description
		? req.body.description
		: 'No description';

	todo.title = req.body.title;
	todo.category = category;
	todo.description = description;

	todo
		.save()
		.then((result) => res.redirect('/todo'))
		.catch((err) => console.log(err));
};

const todo_details = (req, res) => {
	const id = req.params.id;
	Todo.findById(id)
		.then((result) =>
			res.render('details', { title: 'Details Page', todo: result })
		)
		.catch((err) => console.log('Error in get detail: ', err));
};

const todo_delete = (req, res) => {
	const id = req.params.id;
	Todo.findByIdAndDelete(id)
		.then((result) => res.json({ redirect: '/todo' }))
		.catch((err) => console.log(err));
};

module.exports = {
	todo_index,
	todo_create_get,
	todo_create_post,
	todo_delete,
	todo_details,
};
