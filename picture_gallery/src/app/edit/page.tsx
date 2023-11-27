import React from 'react'
import { TabsDemo } from './tabs'
const Page = (
    { searchParams: { publicId } }:
    { searchParams: { publicId: string }
    }) => {
    
    return (
        <>
            <div className="py-4 px-5  ">
                <h2 className=" text-3xl font-semibold tracking-tight">
                    Edit Picture
                </h2>
            </div>
            <TabsDemo src={publicId} />
        </>
    )

}

export default Page