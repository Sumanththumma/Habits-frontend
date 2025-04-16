import React, { useEffect, useState } from 'react'

const HabitList = () => {
    const [habits, setHabits] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3565/api/habits').then((res)=>)
    },[])



  return (
    <div></div>
  )
}

export default HabitList