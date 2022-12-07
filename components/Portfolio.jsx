import Image from "next/legacy/image";
import React from 'react'

const Portfolio = () => {
  return (
    <div className=' max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className=' font-bold text-2xl p-4'>Travel Photos</h1>
      <div className=' grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className=' col-span-2 md:col-span-3 row-span-2'>
          <Image  width='677' height='451' src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80' alt='/' layout='responsive'/>
        </div>
        <div className=' w-full h-full '>
          <Image  width='215' height='217' className='' src='https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/' layout='responsive'/>
        </div>
        <div className=' w-full h-full '>
          <Image  width='215' height='217' className='' src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/' layout='responsive'/>
        </div>
        <div className=' w-full h-full '>
          <Image  width='215' height='217' className='' src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80' alt='/' layout='responsive'/>
        </div>
        <div className=' w-full h-full'>
          <Image  width='215' height='217' className='' src='https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1275&q=80' alt='/' layout='responsive'/>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
