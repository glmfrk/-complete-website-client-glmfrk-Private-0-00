import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import { createContext, useContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AdminDashboard from './Component/AdminDashboard/AdminDashboard/AdminDashboard';
import UserBoard from './Component/UserBoard/UserBoard/UserBoard';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser ] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser ] }>
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/user">
          <UserBoard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
