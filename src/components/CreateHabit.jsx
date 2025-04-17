import React, { useState } from 'react'
import HabitModal from './HabitModal'
const CreateHabit = () => {
    const [showModal, setShowModal] = useState(false)
    const handleCreate = async() =>{
        
    }
  return (
    <div>
        <button
            onClick={()=>setShowModal(true)}
            className='bg-green-500 text-white rounded-full cursor-pointer text-center font-bold text-xl'>+</button>
            {
            showModal && 
            <HabitModal
                onClose = {()=>setShowModal(false)}
                onSubmit = {handleCreate}
            />
            }
        </div>
        
  )
}

export default CreateHabit