import { useState } from 'react'
import './App.css'
import Greetings from './components/Greetings'
import Card from './components/Card'
import Counter from './components/Counter'
import CountReducer from './components/CountReducer'

const students = [
  {name: "Rahil", class: "TYBCA", rollno: 2305028 ,age:20},
  {name: "Amaan", class: "TYBCA", rollno: 2305007 ,age:21},
  {name: "Payal", class: "TYBCA", rollno: 2305024 ,age:20},
]

const list=[];

for(const object of students){
  list.push(<Card name={object.name} class={object.class} rollno={object.rollno} age={object.age}/>);
}

function App() {
  return (
    <>
    <Greetings name="Rahil"/>
    <div className="cardContainer">
    {list}
    </div>
    <Counter/>
    <br />
    <CountReducer/>
    </>
  )
}

export default App
