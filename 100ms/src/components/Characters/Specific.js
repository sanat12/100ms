import Navbar from '../NavBar/Navbar'
import axios from 'axios'
import {useState,useEffect} from 'react';
import './Specific.css'
import {useParams} from 'react-router-dom'

function Specific(){
  let [options,setOptions]=useState([[]]);
  let [queries,setQueries]=useState([]);
  let [author,setAuthor]=useState('')
  let {sanat}=useParams();
useEffect(()=>{
axios.get(`https://www.breakingbadapi.com/api/characters/${sanat}`)
            .then(res => {
                setOptions(res.data)
                console.log(res.data)
                var x=res.data[0].name.split(" ")[0]
                var y=x.concat('+',res.data[0].name.split(" ")[1]);
                setAuthor(y)
                api();
              })
            .catch(err=>{
         
        });

},[author])

console.log(author)
function api()
{
  console.log(author)
  axios.get(`https://www.breakingbadapi.com/api/quote?author=${author}`)
            .then(res => {
                const data=res.data;
                console.log(res.data)
                let x=[];
                for(let i=0;i<data.length;i++)
                {
                  x.push(data[i].quote)
                }
                setQueries(x)
              })
            .catch(err=>{

        });
}
return(

<>
<Navbar/>
<div class="row">

  <div class="col-md-6">
      <img class="card-img"src={options[0].img}>
      </img>
  </div>
  
  <div class="col-md-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{options[0].portrayed}</h4>
        <h6 class="card-subtitle mb-2">{options[0].name}({options[0].nickname})</h6>
        <p class="card-text">Date of Birth: {options[0].birthday} </p>
        <p class="card-text">status: {options[0].status} </p>
        <p class="card-text">{`Seasons appeared in: ${options[0].appearance}`} </p>
        <p class="card-text">Some famous quotes : {queries} </p>
      </div>
    </div>
  </div>

</div>
</>

  )
}
export default Specific;