import React,{useEffect} from 'react';
import {Router,Route,Redirect,Switch} from 'react-router-dom';
import {history} from './helpers/history';
import {useSelector,useDispatch} from 'react-redux';
import Home from './components/Home/Home';
import All from './components/Characters/all';
import Specific from './components/Characters/Specific';
import { useState } from 'react';
import './App.css';
 

function App() {
  let [location,setLocation] = useState('')
  const dispatch = useDispatch()
   history.listen((location, action) => {
    // clear alert on location change

  });
  useEffect(()=>{
    //dispatch(loadUser())
  },[location])

  console.log("rerendering")
 
 return (
    <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/all' component={All}/>
      <Route path='/specific/:sanat' component={Specific}/>
    </Switch>
    </>
  );
}

export default App;
