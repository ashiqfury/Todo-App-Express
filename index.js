require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const hostname = 'localhost';
const port = process.env.PORT || 2506;

const todoRouter = require('./routes/todoRoutes');
const Todo = require('./models/todoModel');

// Setting 'public' as static folder
app.use(express.static('public'));

// Post from parser
app.use(express.urlencoded({ extended: true }));

// Setting ejs template engine
app.set('view engine', 'ejs');

// Mongo db connection
const dbUser = process.env.DB_HOST_NAME;
const dbPassword = process.env.DB_SECRET;
const dbName = process.env.DB_NAME;
const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.mfyow.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((response) => console.log('Connected to database!'))
	.catch((err) => console.log('Connection Failed!', err));

app.get('/', (req, res) => {
	res.redirect('/todo');
});

// Post req

// Getting all test data
app.get('/todo/get-all', (req, res) => {
	Todo.find()
		.then((result) => {
			res.send(result);
		})

		.catch((err) => console.log(err));
});

// All todo routes
app.use(todoRouter);

// About page
app.get('/about', (req, res) => {
	res.render('about', { title: 'About Page' });
});

// 404 page
app.use((req, res) => {
	res.status(404).render('404', { title: '404 Page' });
});

app.listen(port, () => console.log(`Server run on http://${hostname}:${port}`));
