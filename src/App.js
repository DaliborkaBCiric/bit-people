import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import About from "./components/About";
import './App.css';

const App = () => {

  const [view, setView] = useState(window.localStorage.getItem("view"));
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false);

  const fetchUserData = () => {
    fetch("https://randomuser.me/api/?results=15")
      .then(response => {
        setLoading(true);
        return response.json()
      })
      .then(data => {
        localStorage.setItem("last_update", new Date().toLocaleString());
        setLoading(false);
        setUsers(data.results)
      })
  }

  useEffect(() => {
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  useEffect(() => {
    setView(localStorage.getItem("view"));
  }, []);

  useEffect(() => {
    localStorage.setItem("view", view);
  }, [view]);

  useEffect(() => {
    if (localStorage.getItem("users") === null) {
      fetchUserData()
    }
  }, [])

  return (
    <>
      <Header changeView={setView} view={view} fetchUsers={fetchUserData} />
      <Routes>
        <Route path="/" element={!loading ?
          <Main view={view} users={users.length > 0 ? users : JSON.parse(localStorage.getItem("users"))} />
          : <Loader />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;