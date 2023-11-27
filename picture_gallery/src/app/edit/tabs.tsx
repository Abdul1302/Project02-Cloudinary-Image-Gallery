"use client";
import { Button } from "@/components/ui/button"

import { CldUploadButton } from 'next-cloudinary';
import {CldImage} from 'next-cloudinary';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo({src}:{src:string}) {
  return (
    <Tabs defaultValue="original" className="w-full px-4 py-5">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur">Blur</TabsTrigger>
        <TabsTrigger value="gray">Gray Scale</TabsTrigger>
        <TabsTrigger value="oil">Oil Paint</TabsTrigger>
        <TabsTrigger value="improve">Improve</TabsTrigger>
      </TabsList>
      {/* original */}
      <TabsContent value="original">
        <div className="flex gap-7 justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src="nfxpbzmb6qilzcgyqhhf"
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src="nfxpbzmb6qilzcgyqhhf"
            sizes="100vw"
            alt="Description of my image"
          />
        </div>
      </TabsContent>
      
      
      {/* blur */}
      <TabsContent value="blur">
        <div className="flex gap-7 justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src="nfxpbzmb6qilzcgyqhhf"
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src="nfxpbzmb6qilzcgyqhhf"
            sizes="100vw"
            alt="Description of my image"
            blur={800}
          />
        </div>
      </TabsContent>
      
      {/* Gray Scale */}
      <TabsContent value="gray">
        <div className="flex gap-7 justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src="nfxpbzmb6qilzcgyqhhf"
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src="nfxpbzmb6qilzcgyqhhf"
            sizes="100vw"
            alt="Description of my image"
            grayscale={true}
          />
        </div>
      </TabsContent>
      
      {/* oil paint */}
      <TabsContent value="oil">
        <div className="flex gap-7 justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src="nfxpbzmb6qilzcgyqhhf"
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src="nfxpbzmb6qilzcgyqhhf"
            sizes="100vw"
            alt="Description of my image"
            oilPaint={true}
          />
        </div>
      </TabsContent>
      
      {/* improve */}
     
      <TabsContent value="improve">
        <div className="flex gap-7 justify-center py-4">
          <CldImage
            width="250"
            height="250"
            src="nfxpbzmb6qilzcgyqhhf"
            sizes="100vw"
            alt="Description of my image"
          />
          <CldImage
            width="250"
            height="250"
            src="nfxpbzmb6qilzcgyqhhf"
            sizes="100vw"
            alt="Description of my image"
            improve={true}
          />
        </div>
      </TabsContent>
    </Tabs>
  )
}
