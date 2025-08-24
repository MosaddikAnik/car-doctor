import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import Authprovider from "./Authprovider/Authprovider.jsx";

createRoot(document.getElementById("root")).render(
  <Authprovider>
    <StrictMode>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </StrictMode>
  </Authprovider>
);
