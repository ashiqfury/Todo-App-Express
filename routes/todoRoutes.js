const express = require('express')
const router = express.Router()
const todoRoutes = require('../controllers/todoController')

router.get('/todo', todoRoutes.todo_index)
router.post('/todo', todoRoutes.todo_create_post)
router.get('/todo/create', todoRoutes.todo_create_get)
router.get('/todo/:id', todoRoutes.todo_details)
router.delete('/todo/:id', todoRoutes.todo_delete)

module.exports = router
