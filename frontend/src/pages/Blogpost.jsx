import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Blogpost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [blog, setBlog] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`https://vet-app-ffor.onrender.com/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setBlog(json);
      }
      if (response.status == 401) {
        navigate("/signin");
      }
    };

    if (user) {
      fetchBlog();
    }
  }, [user]);

  const handleClick = async () => {
    const response = await fetch(`https://vet-app-ffor.onrender.com/api/blogs/${id}`, {
      method: "DELETE",
      headers: {
          'Authorization': `Bearer ${user.token}`
      }
    })

    if(response.ok) {
      navigate("/my-blogs");
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {blog && (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="mb-4">Written By: {blog.author}</p>
          <img
            className="w-full h-64 object-cover rounded-lg mb-4"
            src={blog.image}
            alt="Goat Farming"
          />

          <div className="mb-4">{blog.body}</div>
          {user.isDoctor && (
            <div className="buttons">
              <button onClick={handleClick}>Delete</button>
              <Link to={`/blogs/${id}/update`}>
                <button>Update</button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Blogpost;
