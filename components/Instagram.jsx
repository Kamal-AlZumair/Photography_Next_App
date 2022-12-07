import React from 'react'
import IgImg1 from '../assets/Img_1.jpg'
import IgImg2 from '../assets/Img_2.jpg'
import IgImg3 from '../assets/Img_3.jpg'
import IgImg4 from '../assets/Img_4.jpg'
import IgImg5 from '../assets/Img_5.jpg'
import IgImg6 from '../assets/Img_6.jpg'
import InstaImg from './InstaImg'



const Instagram = () => {
  return (
    <div className=' max-w-[1240px] mx-auto text-center py-24'>
      <p className=' text-2xl font-bold'>Follow me on Ins</p>
      <p className=' pb-4'>@Capture</p>
      <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <InstaImg socialImg={IgImg1} />
        <InstaImg socialImg={IgImg2} />
        <InstaImg socialImg={IgImg3} />
        <InstaImg socialImg={IgImg4} />
        <InstaImg socialImg={IgImg5} />
        <InstaImg socialImg={IgImg6} />
      </div>
    </div>
  )
}

export default Instagram
