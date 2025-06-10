import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 

   let [counter, updateCounter] = useState(0)
   
  const addValue = () => {
    if(counter < 20){
    updateCounter(counter + 1)
    }
  }
  

  const removeValue = () => {
    if(counter >0){
    updateCounter(counter - 1)
    }
  }
   return (
       <>
           <h1>Chai aur Count</h1>
           <h2>Counter value: {counter}</h2>

           <button 
           onClick = {addValue}
           > addValue {counter}</button>
           <br />
           <button 
           onClick = {removeValue}> removeValue {counter}</button>
           <p>footer: {counter} </p>
       </>
   )
 }

export default App
