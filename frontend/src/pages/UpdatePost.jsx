import React, { useEffect, useState } from "react";
import { TextInput, Select, Button, FileInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function UpdatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [snippet, setSnippet] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuthContext();
  const author = `${user.fName} ${user.lName}`;

  useEffect(() => {
    // Fetch the existing blog data based on the ID
    const fetchBlog = async () => {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setTitle(json.title);
        setBody(json.body);
        setSnippet(json.snippet);
      }
      if (response.status == 401) {
        navigate("/signin");
      }
    };

    if (user) {
      fetchBlog();
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBlog = {
      title,
      body,
      snippet,
      author,
      authorId: user._id,
    };

    // Update the existing blog data
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedBlog),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        console.log("Blog Updated");
        navigate(`/blogs/${id}`);
      }
    } catch {
      (error) => {
        console.error("Error updating blog:", error);
        setIsPending(false);
      };
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <label className="block text-gray-700 mb-2">Title:</label>
          <TextInput
            type="text"
            // placeholder='Title'
            required
            id="title"
            className="flex-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="block text-gray-700 mb-2">Author:</label>
          <TextInput
            type="text"
            // placeholder='Title'
            required
            id="author"
            className="flex-1"
            value={author}
            readOnly
          />
        </div>
        <label className="block text-gray-700 mb-2">Body:</label>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          value={body}
          onChange={setBody}
        />
        <label className="block text-gray-700 mb-2">Snippet:</label>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          value={snippet}
          onChange={setSnippet}
        />
        <div className="flex gap-4 items-center border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Upload Image
          </Button>
        </div>
        <Button type="submit" gradientDuoTone="purpleToPink">
          Update
        </Button>
      </form>
    </div>
  );
}

export default UpdatePost;
