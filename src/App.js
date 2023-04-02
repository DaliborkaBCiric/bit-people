import React, { useState, useEffect } from "react";
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {

  const [view, setView] = useState(window.localStorage.getItem("view"));

  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://randomuser.me/api/?results=15")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    setView(window.localStorage.getItem("view"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("view", view);
  }, [view]);

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className='root'>
      <Header changeView={setView} view={view} fetchUsers={fetchUserData}/>
      <Main view={view} users={users} />
      <Footer />
    </div>
  );
}

export default App;