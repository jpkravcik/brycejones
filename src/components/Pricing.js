import React from 'react'
import Header from './Header.js';

const Pricing = () => {

    const handleClick = () => {
        window.open("https://www.honeybook.com/widget/bryxephoto_204848/cf_id/61ca3349f7d8f52611c794e5");
      };

  return (
    // <div className="flex flex-col bg-white h-screen max-h-full w-full text-black max-w-full">
    //     <Header textColor="black" />
    //     <div className='flex flex-col justify-between w-full h-full max-h-full'>
    //         <div className='flex flex-row justify-center w-full'>
    //             <div className='bg-black text-white w-5/12 m-8 mr-72 text-center'>
    //                 <p className='font-Playfair mb-4 mt-4 text-4xl'>Mini Package</p>
    //                 <p className='font-Playfair mb-4 mt-4 text-2xl'>4 retouched photos, 1 outfit</p>
    //                 <p className='font-Playfair mb-4 mt-4 text-2xl'>$80</p>
    //                 <button onClick={handleClick} className='bg-white text-black m-2 mt-1 p-2 w-28 rounded-md'>Book</button>
    //             </div>
    //         </div>
    //         <div className='flex flex-row justify-center w-full'>
    //             <div className='bg-black text-white w-5/12 m-8 ml-72 text-center'>
    //                 <p className='font-Playfair mb-4 mt-4 text-4xl'>Value Package</p>
    //                 <p className='font-Playfair mb-4 mt-4 text-2xl'>10 retouched photos, 2 outfits</p>
    //                 <p className='font-Playfair mb-4 mt-4 text-2xl'>$180</p>
    //                 <button onClick={handleClick} className='bg-white text-black m-2 mt-1 p-2 w-28 rounded-md'>Book</button>
    //             </div>
    //         </div>
    //         <div className='flex flex-row justify-center w-full'>
    //             <div className='bg-black text-white w-5/12 m-8 mr-72 text-center'>
    //                 <p className='font-Playfair mb-4 mt-4 text-4xl'>Model Package</p>
    //                 <p className='font-Playfair mb-4 mt-4 text-2xl'>16 retouched photos, 3 outfits, 2 locations</p>
    //                 <p className='font-Playfair mb-4 mt-4 text-2xl'>$300</p>
    //                 <button onClick={handleClick} className='bg-white text-black m-2 mt-1 p-2 w-28 rounded-md'>Book</button>
    //             </div>
    //         </div>
    //     </div>
    // </div>

 <div className="flex flex-col bg-white h-screen w-screen text-black overflow-x-hidden">
<Header textColor="black" />
<div className='flex flex-col justify-between w-full'>
    <div className='flex flex-row content-start w-full h-144'>
        <div className='bg-black text-white w-5/12 m-8 text-center'>
            <p className='font-Playfair mb-4 mt-4 text-5xl'>Mini Package</p>
            <p className='font-Playfair mb-4 mt-4 text-3xl'>4 retouched photos, 1 outfit</p>
            <p className='font-Playfair mb-4 mt-4 text-3xl'>$80</p>
            <button onClick={handleClick} className='bg-white text-black m-2 mt-1 p-2 w-28 rounded-md'>Book</button>
        </div>
    </div>
    <div className='flex flex-row justify-end w-full h-144'>
        <div className='bg-black text-white w-5/12 m-8 text-center'>
            <p className='font-Playfair mb-4 mt-4 text-5xl'>Value Package</p>
            <p className='font-Playfair mb-4 mt-4 text-3xl'>10 retouched photos, 2 outfits</p>
            <p className='font-Playfair mb-4 mt-4 text-3xl'>$180</p>
            <button onClick={handleClick} className='bg-white text-black m-2 mt-1 p-2 w-28 rounded-md'>Book</button>
        </div>
    </div>
    <div className='flex flex-row content-start w-full h-144'>
        <div className='bg-black text-white w-5/12 m-8 text-center'>
            <p className='font-Playfair mb-4 mt-4 text-5xl'>Model Package</p>
            <p className='font-Playfair mb-4 mt-4 text-3xl'>16 retouched photos, 3 outfits, 2 locations</p>
            <p className='font-Playfair mb-4 mt-4 text-3xl'>$300</p>
            <button onClick={handleClick} className='bg-white text-black m-2 mt-1 p-2 w-28 rounded-md'>Book</button>
        </div>
    </div>
</div>
</div> 
    
  )
}

export default Pricing


