import axios from 'axios'
import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS,USER_LOADED,USER_LOADING,AUTH_ERROR,PREDICT_SUCCESS,PREDICT_FAIL} from './types'
import {history} from '../../helpers/history'
import {returnErrors} from './errorActions'
import {useHistory} from 'react-router-dom';
import { message, Button, Space } from 'antd';
//action creator for register
 const register = ({username,email,password})=> async (dispatch,getState) =>{
    
    const registerSuccess = (data) => ({type:REGISTER_SUCCESS,payload:data})
    const registerFail = () =>({type:REGISTER_FAIL})
    
     
    //setting up header on body for register http request
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':"true",
        }
    }
    
    const body = JSON.stringify({username,email,password})
    const success = () => {
       message.success('Account created successfully');
      };

    const error = (value) => {
        message.error(value);
      };

    axios.post(' http://127.0.0.1:5000/register',body,config)
        .then(res =>{
        if(res.data.message=="1")
            error("Please enter all the details.");
        else if(res.data.message=="2"){
            error("Username already registered.")
        }
        else if(res.data.message=="3"){
            error("Problem in creating token")
        }
        else{
            success()
            //dispatch(registerSuccess(res.data))
             history.push('/')
             history.go()
        }
        })
        .catch(err =>{
        })
}
