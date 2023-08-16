import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostItem from "./components/PostItem";
import Card from "./components/Card";
import NotFound from "./components/NotFound";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <div className="Container">
        <div className="Header">LIST SOCIAL CARD</div>
        <div className="Content">
          <PostItem />
          <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/card" element={<Card />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
