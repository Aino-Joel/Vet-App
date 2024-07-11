import React, { useState } from "react";
import { TextInput, Select, Button, FileInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

function CreatePost() {
  const { user } = useAuthContext();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [snippet, setSnippet] = useState("");
  const navigate = useNavigate();
  const author = `${user.fName} ${user.lName}`;
  const [image, setImage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      snippet,
      author,
      authorId: user._id,
      image
    };

    try {
      const response = await fetch(`https://vet-app-ffor.onrender.com/api/blogs/create`, {
        method: "POST",
        body: JSON.stringify(blog),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        console.log(json);
        navigate(`/my-blogs`);
      }
    } catch {
      (error) => {
        console.error("Error creating blog:", error);
        setIsPending(false);
      };
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setImage(base64)
  }

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
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
        <textarea
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label className="block text-gray-700 mb-2">Snippet:</label>
        <textarea
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
        ></textarea>
        <div className="flex gap-4 items-center border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            id="image"
            accept=".jpeg, .png, .jpg"
            onChange={(e) => handleFileUpload(e)}
          />
          {/* <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Upload Image
          </Button> */}
        </div>
        <Button type="submit" gradientDuoTone="purpleToPink">
          Publish
        </Button>
      </form>
    </div>
  );
}

export default CreatePost;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}