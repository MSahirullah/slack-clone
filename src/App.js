import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";



function App() {

  const [{ user } , dispatch] = useStateValue();



  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ):(
          <>
            {/* header */}
            <Header/>
            <div className="app_body">
              {/* side bar */}
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat/>
                </Route>
                <Route>
                  <h1>HWelcome</h1>
                </Route>
              </Switch>
              {/* react-router -> chat screen */}
              </div>
          </>
        )}
      </Router>
    </div>
  ); 
}

export default App;
