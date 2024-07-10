import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput, FileInput } from "flowbite-react";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState("")
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(fName, lName, email, password, pic);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setPic(base64)
  }

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <p className="text-3xl font-extrabold mt-5 text-center bg-gradient-to-r from-green-800 via-green-400 to-blue-600 text-transparent bg-clip-text shadow-lg py-2 rounded-lg">
            SIGN UP
          </p>
          {/* <div className='flex space-x-4 mt-5'>
        <Button>As a Farmer</Button>
        <Button>As a Veterinary Doctor</Button>
      </div>
     */}
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="First Name" />
              <TextInput
                type="text "
                placeholder="First Name"
                id="fname"
                onChange={(e) => setFName(e.target.value)}
                value={fName}
              />
            </div>
            <div>
              <Label value="Last Name" />
              <TextInput
                type="text "
                placeholder="Last Name"
                id="lname"
                onChange={(e) => setLName(e.target.value)}
                value={lName}
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email "
                placeholder="name@company.com"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password "
                placeholder="Password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div>
              <Label value="Your Profile Picture" />
              <FileInput
                type="file"
                id="pic"
                accept=".jpeg, .png, .jpg"
                onChange={(e) => handleFileUpload(e)}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-green-800 via-green-500 to-green-300"
              type="submit"
              disabled={isLoading}
            >
              Sign Up
            </Button>
            {error && <div className="error">{error}</div>}
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;


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