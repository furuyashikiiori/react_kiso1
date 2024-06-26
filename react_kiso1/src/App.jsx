import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThreadList from "./conponents/ThredList.jsx";
import Header from "./conponents/Header.jsx";
import CreateThread from "./conponents/CreateThred.jsx";
import PostList from "./conponents/PostList.jsx";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<ThreadList />} />
          <Route path="/threads/new" element={<CreateThread />} />
          <Route path="/threads/:thread_id" element={<PostList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
