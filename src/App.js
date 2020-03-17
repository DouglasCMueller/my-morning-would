import React from 'react';
import LoginForm from './components/LoginForm/LoginForm'
import Nav from './components/Nav/Nav'
import NewUserForm from './components/NewUser/NewUser';
import Header from './components/Header/Header';
import Timer from './components/Timer/Timer'
import Date from './components/DateShown/DateShown'
import Events from './components/Events/Events'
import Todos from './components/Todos/Todos'
import styles from './app.css'

function App() {
  return (
    <div className="App">
     <Nav />
     <div className="ui headerDiv">
     <Header>   
     </Header>
     </div>
     <div>
     <Timer />
      <Date />
       
     </div>
    <Events />
     <Todos />
   <div>
      <LoginForm />
   <NewUserForm />
</div>
    </div>
  );
}

export default App;
