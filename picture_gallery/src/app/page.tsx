"use client"

import { CldUploadButton } from 'next-cloudinary';
import {CldImage} from 'next-cloudinary';
import { useState } from 'react';

interface UploadImage{
  event:"success",
  info:{public_id:string}
}

export default function Home() {
  //use state to change the image
  const[ImageId,SetImageId]=useState("cld-sample-5")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Upload button*/}
      <CldUploadButton uploadPreset="w4nt0wfo" 
      onUpload={(result) => {
        let response=result as UploadImage
        SetImageId(response.info.public_id)
       }}/>
      
      {/* view image*/} 
      <CldImage
        width="400"
        height="400"
        src={ImageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  )
}
