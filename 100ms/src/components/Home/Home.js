import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import './buton.css'
import Navbar from'../NavBar/Navbar'
import SelectSearch from 'react-select-search';
import {useState,useEffect} from 'react';
import axios from 'axios'
import Specific from '../Characters/Specific'
import {history} from '../../helpers/history'

function Home(){
let [options,setOptions]=useState([]);
let [char,setChar]=useState('')
useEffect(()=>{
              axios
            .get(`https://www.breakingbadapi.com/api/characters`)
            .then(res => {
                const data=res.data;

                let option = [];
                for(let i=0;i<data.length;i++)
                {
                  option.push({name:data[i].name,value:(i+1).toString()});
                }
                setOptions(option)
              })
            .catch(err=>{

        });
},[])

const Send=(event)=>{
  console.log(char);
  history.push(`/specific/${char}`)
  history.go()
}

console.log(options)
function search(value){
  setChar(value);
  //console.log(value);
}
//send()
  return (
<div >
  <Navbar/>
  <br /><br />
  <div align="center" >
       <SelectSearch options={options} value=""  placeholder="Choose your character(You can also type and select)"  
       search="true" closeOnSelect="false" onChange={search}/>
  </div>  
  <br /><br/><br/><br /><br /><br /><br /><br />
   <div class="wrap">
      <button class="buton" onClick={Send}>Search</button>
   </div>

</div>
  );
}
export default Home;