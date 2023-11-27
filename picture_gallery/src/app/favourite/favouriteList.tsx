"use client";

import React, { useEffect, useState } from 'react'
import View from './view'
import { MyImage } from './page'

const FavouriteList = ({resources}:{resources:MyImage[]}) => {
  const [initialState,setInitialState]=useState(resources)
  useEffect(()=>{
    setInitialState(resources)
  },[resources])
    return (
    <div className="grid grid-cols-4 gap-4 p-3">
    {initialState.map((item, i) => {
        return <div key={i}>
            <View src={item.public_id} 
            tag={item.tags} 
            fun={(publicId:any)=>{
                setInitialState((current)=>current.filter((val)=>val.public_id!==publicId))
            }} />
        </div>
    })}

</div>
  )
}

export default FavouriteList