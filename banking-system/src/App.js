import './App.css';
import * as React from 'react';
import NavBar from './components/NavBar';
import DataTable from './components/Table';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Transfer from './components/Transfer';
import axios from 'axios'
import { useState, useEffect } from 'react'
import AddUser from './components/AddUser';
import HomePage from './components/Home';


function App() {


  const [users, setUsers] = useState([])

  const fetchUsers = () => {
    axios.get('https://arcane-depths-62061.herokuapp.com/users')
      .then(res => setUsers(res.data))
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route exact path="/users" component={() => <DataTable fetchUsers={fetchUsers} users={users} />} />
        <Route exact path="/transfer" component={() => <Transfer users={users} />} />
        <Route exact path="/addUser" component={() => <AddUser />} />
        <Route exact path="*" component={() => "Not Found"} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
