"use client";

import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { AiOutlineHeart, AiFillHeart, AiFillFolderAdd} from 'react-icons/ai'
import AddTags from './action';
import { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi'



const View = ({ src, tag }: { src: string, tag: string[] }) => {
  const [fav, setfav] = useState(tag.includes('favourite'))
  return (

    <div className='relative'>
      <CldImage className='rounded-sm'
        width="400"
        height="400"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />

      {/* heart icon for favourite page */}
      <div className='absolute right-1 top-1'
        onClick={() => {
          setfav(!fav);
          AddTags(src, fav);

        }}
      >
        {
          fav ? (
            <AiFillHeart className='w-8 h-8 cursor-pointer text-red-500' />
          )
            : (
              <AiOutlineHeart className=" w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
            )
        }


      </div>

      {/* edit icon for edit page */}
      <div className='absolute left-1 top-1'>
        <Link href={`/edit?publicId=${src}`}>
          <BiEditAlt className=" w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300" />
        </Link >
      </div>

    
    </div>


  )
}

export default View