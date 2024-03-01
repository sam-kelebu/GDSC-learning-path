import React from 'react'

function DetailPage() {
  return (
    <div className='mt-[100px] ml-[80px]'>
      
             <div className='w-[20rem] h-[20rem] bg-black float-start '>
             <img src="honey.jpg" alt="" className=' w-[20rem] h-[20rem]' />
             </div>

             <div className='w-3/4'>
                <p className='text- right  pl-[35rem]'>

            <h1 className='font-bold text-2xl font-serif py-3'>Natural Honey Bottle</h1>
            <p className='pb-5 font-bold'>99$</p>

                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde exercitationem officiis totam aspernatur dignissimos nobis. Culpa quia animi quas distinctio.


                 <div className='py-11 pt-6'>
    <p>Size</p>
                    <button className='bg-black rounded-md py-2 px-3 text-white w-[3rem]'>L</button>
                    <button className='bg-black rounded-md py-2 px-3 text-white w-[3rem]'>M</button>
                    <button className='bg-black rounded-md py-2 px-3 text-white w-[3rem]'>S</button>

                    <div className='py-5  h-7'>
                        <button className='w-[20rem] text-black bg-red-300 py-2 rounded-md font-bold text-2xl'>Add To Cart</button>
                    </div>

                 </div>
                </p>
             </div>



             
            

    </div>
  )
}

export default DetailPage