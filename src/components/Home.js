import React from 'react'
import UploadWidget from './UploadWidget'
import CloudinaryGallery from './CloudinaryGallery'

function Home() {
  return (
    <div className='home'>
        <p> 
            Nothing on here yet
        </p>
    <div className='widget'>
        <UploadWidget/>
        <CloudinaryGallery />
    </div>
    </div>
  )
}

export default Home