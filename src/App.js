
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostItemComponent from './components/PostItemComponent/Index';
import CardComponent from './components/CardComponent/Index';
import NotFoundComponent from './components/NotFoundComponent/Index';
function App() {
  return (
    <Router>
    <div className="Container">
      <div className="Header">LIST SOCIAL CARD</div>
        <div className="Content">
          <PostItemComponent/>
          <CardComponent/>
          <NotFoundComponent/>
          {/* <HomeComponent setActiveTab={setActiveTab} activeTab={activeTab}></HomeComponent>
          <ActiveComponent setActiveTab={setActiveTab} activeTab={activeTab}></ActiveComponent>
          <CompletedComponent setActiveTab={setActiveTab} activeTab={activeTab}></CompletedComponent> */}
        </div>
      </div>
  </Router>
  );
}

export default App;
