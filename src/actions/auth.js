
import axios from "axios";
import currentUser from "./currentUser";

export const signup = (authData, navigate) => {
  return async (dispatch)=> {
    try {
     const {data}= await axios.post("http://localhost:5000/user/signup", authData)
     dispatch({
        type: "AUTH",
        data
     })
     dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))))
     navigate('/')
    }
    catch(err) {
      console.log(err)
    }
}
}


export const login = (authData, navigate) => async (dispatch)=> {
    try {
        
        const {data}= await axios.post("http://localhost:5000/user/login", authData);
        dispatch({
           type: "AUTH",
           data
        })
        dispatch(currentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
       }
       catch(err) {
         console.log(err)
       }
}