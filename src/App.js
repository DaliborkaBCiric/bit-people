import React, { useState, useEffect } from "react";
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {

  const [view, setView] = useState('list');
  const viewHandler = () => {
    view === 'list' ? setView('grid') : setView('list');
  };

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
    fetchUserData()
  }, [])

  return (
    <div className='root'>
      <Header changeView={viewHandler} view={view} fetchUsers={fetchUserData}/>
      <Main view={view} users={users} />
      <Footer />
    </div>
  );
}
// }

export default App;