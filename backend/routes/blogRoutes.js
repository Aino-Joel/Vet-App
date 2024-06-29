const express = require('express')
const {
    getBlogs,
    getMyBlogs,
    getBlog,
    createBlog,
    deleteBlog,
    updateBlog
} = require('../controllers/blogControllers')
const {requireAuth} = require('../middleware/requireAuth')

//require authentication for all routes
const router = express.Router()

//GET all Blogs
router.get('/', requireAuth, getBlogs)

//GET all My Blogs
router.get('/my-blogs', requireAuth, getMyBlogs)

//GET single
router.get('/:id', requireAuth, getBlog)

//POST a new Blog
router.post('/create', requireAuth, createBlog)

//DELETE a new Blog
router.delete('/:id', requireAuth, deleteBlog)

//UPDATE a Blog
router.put('/:id', requireAuth, updateBlog)


module.exports = router