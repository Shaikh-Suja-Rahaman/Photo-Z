import React from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'

function Home() {
  return (
    <div className=''>
      <ImageUpload/>
      <ImagePreview/>
    </div>
  )
}

export default Home