import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostItemComponent from "./components/PostItemComponent/Index";
import CardComponent from "./components/CardComponent/Index";
import NotFoundComponent from "./components/NotFoundComponent/Index";
import DetailComponent from "./components/DetailComponent/Index";

function App() {
  return (
    <Router>
      <div className="Container">
        <div className="Header">LIST SOCIAL CARD</div>
        <div className="Content">
          <PostItemComponent />
          <Routes>
            <Route path="/" element={<CardComponent />} />
            <Route path="/card" element={<CardComponent />} />
            <Route path="/not-found" element={<NotFoundComponent />} />
            <Route path="/detail" element={<DetailComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
