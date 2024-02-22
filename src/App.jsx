import React from 'react'
import App from "App.css";

function App()
{
    let arr=[{id:1,name:"prishu",courses:"web devlopment"},{id:2,name:"rudr",courses:""},{id:3,name:"kanku",courses:"web devlopment"}]

    return(
    <>
    {arr.map((e)=>{
       <h1>`user: ${arr[e].name}`</h1>
    })}
    </>
    )
}
export default App;