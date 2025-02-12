import React from "react";
import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Interviews_form from "./pages/InterviewsForm.jsx";
import { Toaster } from "react-hot-toast";
import "./index.css"; // Ensure this exists or remove it if not needed

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Interviews_form />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
