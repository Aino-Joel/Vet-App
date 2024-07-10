const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

//get all Blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json(blogs);
};

//get all my Blogs
const getMyBlogs = async (req, res) => {
  const user_id = req.user._id;

  const blogs = await Blog.find({ authorId: user_id }).sort({ createdAt: -1 });

  res.status(200).json(blogs);
};

//get single Blog
const getBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Blog" });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(404).json({ error: error.message });
  }

  res.status(200).json(blog);
};

//create new Blog
const createBlog = async (req, res) => {
//   const { title, snippet, body, author, authorId } = req.body;

//   let emptyFields = [];

//   if (!title) {
//     emptyFields.push("title");
//   }
//   if (!load) {
//     emptyFields.push("load");
//   }
//   if (!reps) {
//     emptyFields.push("reps");
//   }
//   if (emptyFields.length > 0) {
//     return res
//       .status(400)
//       .json({ error: "Please fill in all fields", emptyFields });
//   }

  //add doc to db
  try {
    const blog = await Blog.create({ ...req.body });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a Blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Blog" });
  }

  const blog = await Blog.findOneAndDelete({ _id: id });

  if (!blog) {
    return res.status(404).json({ error: "No such Blog" });
  }

  res.status(200).json(blog);
};

//update Blog
const updateBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Blog" });
  }

  const blog = await Blog.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!blog) {
    return res.status(404).json({ error: "No such Blog" });
  }

  res.status(200).json(blog);
};

module.exports = {
  getBlogs,
  getMyBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};
