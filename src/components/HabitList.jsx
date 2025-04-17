import React, { useEffect, useState } from 'react'

const HabitList = () => {
    const [habits, setHabits] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3565/api/habits')
        .then((res)=>res.json())
        .then((data)=>setHabits(data))
        .catch((err)=>console.log('error fetching from the server ',err))
    },[])

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      
      <ul className='max-w-[60vw] min-w-[50vw] px-3 py-1 mt-5 bg-gray-950 shadow-xl rounded-md drop-shadow-yellow-50 text-white'>
      <h2 className='w-full text-start text-2xl mb-5 text-shadow-blue-100'>My Habits</h2>
        {habits.map((habit)=>{
          let title = habit.title? habit.title : 'error';
          let records = habit.records? habit.records : '';
          return(
            <li 
                key = {habit._id} 
                className='w-full mb-1.5 flex items-center justify-between bg-gradient-to-tl '>
              <h1 className='text-md'>{title}</h1>
              <h3>{records.length? records.length : "0"}</h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HabitList