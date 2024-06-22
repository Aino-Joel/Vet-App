import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./context/ChatProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthContextProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
