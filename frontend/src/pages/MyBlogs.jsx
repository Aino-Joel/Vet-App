import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "flowbite-react";

const BlogCard = ({ id, title, snippet, image, author }) => (
  <div className="h-full bg-white rounded-lg shadow-md p-6">
    <img
      className="w-full h-48 object-cover rounded-t-lg mb-4"
      src={image}
      alt={title}
    />

    <h2 className="text-black">{title}</h2>

    <p className="text-gray-700 mb-4">{snippet}</p>
    <span className="text-gray-600 text-sm">By {author}</span>
  </div>
);

const MyBlogs = () => {
  const { user } = useAuthContext();
  const [blogs, setBlogs] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("https://vet-app-ffor.onrender.com/api/blogs/my-blogs", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setBlogs(json);
      }
      if (response.status == 401) {
        navigate("/signin");
      }
    };

    if (user) {
      fetchBlogs();
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-12">My Blogs</h1>
      <Link to="/createpost">
        {" "}
        <Button gradientDuoTone="purpleToPink">Create New Post</Button>{" "}
      </Link>
      <div className="flex flex-wrap -mx-4">
        {blogs &&
          blogs.map((blog) => (
            <div key={blog._id} className="w-full md:w-1/3 p-4">
              <Link to={`/blogs/${blog._id}`}>
                <BlogCard
                  title={blog.title}
                  snippet={blog.snippet}
                  image={blog.image}
                  author={blog.author}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyBlogs;
