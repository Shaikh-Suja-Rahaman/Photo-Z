import React from 'react'

function ImageUpload() {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
      <label htmlFor='fileInput' className='text-center p-5 hover:border-blue-500 ease-in-out transition-all block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg'>
        <input type='file' id='fileInput' className='hidden'/>
        <p>Click and Drag to Upload your Image</p>
      </label>
    </div>
  )
}

export default ImageUpload