import React from 'react'

const HabitModal = ({ onClose, onSubmit }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h3 className="text-xl font-semibold mb-4">Create a New Habit</h3>

        <input 
          type="text" 
          placeholder="Habit Title" 
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <textarea 
          placeholder="Habit Description" 
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <div className="flex justify-end gap-2">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button 
            onClick={onSubmit} 
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default HabitModal