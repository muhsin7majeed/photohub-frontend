import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

import { BASE_URLS } from "constants/common.ts";
import { AuthProvider } from "context/AuthContext.tsx";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();
axios.defaults.baseURL =
  import.meta.env.NODE_ENV === "production" ? BASE_URLS.prod : BASE_URLS.dev;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider resetCSS>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
