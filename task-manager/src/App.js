import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import TaskList from "./components/task-list.component";
import CreateTask from "./components/create-task.component";
import { EditTaskWrapper } from "./components/edit-task.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/edit/:id" element={<EditTaskWrapper />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
