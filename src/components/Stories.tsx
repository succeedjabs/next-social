import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
        <div className="flex gap-8 w-max">
          {/** Story */}
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="story" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
            <span className="font-semibold">John Doe</span>
          </div>
          {/** Story */}
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="story" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
            <span className="font-semibold">John Doe</span>
          </div>
          {/** Story */}
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="story" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
            <span className="font-semibold">John Doe</span>
          </div>
          {/** Story */}
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="story" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
            <span className="font-semibold">John Doe</span>
          </div>
          {/** Story */}
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="story" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
            <span className="font-semibold">John Doe</span>
          </div>
          {/** Story */}
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="story" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
            <span className="font-semibold">John Doe</span>
          </div>
          {/** Story */}
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="story" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
            <span className="font-semibold">John Doe</span>
          </div>
          {/** Story */}
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="story" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
            <span className="font-semibold">John Doe</span>
          </div>

        </div>
    </div>
  )
}

export default Stories