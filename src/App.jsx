import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './Bookstore'
// components
function App() {
  const actors = ['sakib', 'tamim', 'mushfiq', 'mahmudullah', 'mashrafee'];
  const singers=
  [
    {name:'kumar sanu', age: 50},
    {name:'arijit', age: 45},
    {name:'atif aslam', age: 55},
    {name:'Pritom', age: 28}

  ]
  const books=
  [
    {id:1,name:'book1',author:'author1'},
    {id:2,name:'book2',author:'author2'},
    {id:3,name:'book3',author:'author3'},
    {id:4,name:'book4',author:'author4'},
    {id:5,name:'book5',author:'author5'}
  ]
  return (
    <>
     <h1>Vite + React</h1>
     <BookStore books={books}></BookStore>

     <Actor name="sakib khan"></Actor>
     {
        actors.map(actor=><Actor name={actor}></Actor>)
     }
     {
        singers.map(singer=><Singer singer={singer}></Singer>)
     }
     {/* <Todo 
     task="Learn React" 
     isDone={true}></Todo>
     <Todo 
     task="Explore core concepts" 
     isDone={false}></Todo>
     <Todo 
     task="Try Jsx" 
     isDone={true}></Todo> */}
      
      {/*
      <Device name="laptop" price="55"/>
      <Device name="mobile" price="17"/>
      <Device name="tablet" price="25"/>
      <Person/>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={11} score="100"></Student>
      <Student  grade={12} score="90"></Student>
      <Developer></Developer>
      */}

    </>
  )
}

function Device(props){
  // console.log(props);
  return <h2>This device: {props.name} and it's price is
  :{props.price} </h2>
}



function Person()
{
  const age = 25;
  const money = 10;
  const person = {name:'sakib', age:25, money:10};
  return <h3>i am {person.name} and my age is: {age+money}</h3>
}
// const  {grade, score} = {grade:7, score:99};
function Student({grade="1", score="0"})
{
  console.log(grade, score);
    return (
    <div className='student'>
      <h1>Student</h1>
      <p>lorem ipsum</p>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>

    </div>
    )
}

function Developer()
{
  const developerStyle = {
    border: '2px solid red',
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    margin: '10px',
  }
  return (
    <div style={developerStyle} >
      <h1>Developer</h1>
      <p>lorem ipsum</p>
      </div>
  )
}


export default App
