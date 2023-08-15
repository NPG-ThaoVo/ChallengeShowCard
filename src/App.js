import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostItemComponent from "./components/PostItemComponent/Index";
import CardComponent from "./components/CardComponent/Index";
import NotFoundComponent from "./components/NotFoundComponent/Index";
import ModalComponent from "./components/ModalComponent/Index";

function App() {
  return (
    <Router>
      <div className="Container">
        <div className="Header">LIST SOCIAL CARD</div>
        <div className="Content">
          <div className="horizontal-container">
            <PostItemComponent />
            <Link to="/card">CardComponent</Link>
            <Link to="/not-found">NotFoundComponent</Link>
            <Link to="/modal">Modal</Link>
          </div>
          <Routes>
            <Route path="/card" element={<CardComponent />} />
            <Route path="/not-found" element={<NotFoundComponent />} />
            <Route path="/modal" element={<ModalComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
