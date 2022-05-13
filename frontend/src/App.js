import React,{useState,useEffect} from "react";
import axios from "axios";
import './App.css';

function App() {
  const[user,setUser]= useState('');

  useEffect(()=>{
     getNames();
  },[]);
     
    const getNames =async ()=>{
      const response = await axios.get("/names");
      console.log("response:",response);
      setUser(response.data);
    }

  return (<>
    <h1>My website</h1>
    <p>excercise to deployment of a App and get response from serve, my name is: {user}</p>
    </>

  );
}

export default App;
