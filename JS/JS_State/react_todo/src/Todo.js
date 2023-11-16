import React from 'react'

export default function Todo({data}) {
    function handleChange() {
        console.log('hi')
    }
  return (
    <div>
        {data.name}
        <label>
        <input type="checkbox" 
        checked="data.completed"
        onChange={handleChange}
        />
        </label>
    </div>
  )
} 