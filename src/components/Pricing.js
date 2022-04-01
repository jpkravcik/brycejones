import React from 'react'
import Header from './Header.js';

const Pricing = () => {

    const handleClick = () => {
        window.open("https://www.honeybook.com/widget/bryxephoto_204848/cf_id/61ca3349f7d8f52611c794e5");
      };

  return (
    <div className="flex flex-col bg-white h-screen max-h-full w-full text-black max-w-full">
        <Header textColor="black" />
        <div className='flex flex-row items-start justify-between w-full h-full max-h-full'>
            <div className='flex flex-col justify-center w-full h-full'>
                <div className='text-black m-8 text-center h-full'>
                    <p className='font-Playfair mb-4 mt-4 text-4xl'>Mini Package</p>
                    <p className='font-Playfair mb-4 mt-4 text-2xl'>4 retouched photos, 1 outfit</p>
                    <p className='font-Playfair mb-4 mt-4 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper arcu mi, vitae luctus nisl porttitor at. Sed fringilla leo id pharetra malesuada. In varius, ex et volutpat euismod, nisi turpis porttitor magna, sed condimentum lorem justo nec nisi. Sed lobortis augue et pretium efficitur. Etiam ac magna vel elit lobortis faucibus. Nunc vestibulum neque at augue bibendum, quis tincidunt urna tempor. Donec dignissim augue id lacus mollis, eget condimentum mi semper.</p>
                    <p className='font-Playfair mb-4 mt-4 text-2xl'>$80</p>
                </div>
            </div>
            <div className='flex flex-col justify-center w-full h-full'>
                <div className=' text-black m-8 text-center h-full'>
                    <p className='font-Playfair mb-4 mt-4 text-4xl'>Value Package</p>
                    <p className='font-Playfair mb-4 mt-4 text-2xl'>10 retouched photos, 2 outfits</p>
                    <p className='font-Playfair mb-4 mt-4 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper arcu mi, vitae luctus nisl porttitor at. Sed fringilla leo id pharetra malesuada. In varius, ex et volutpat euismod, nisi turpis porttitor magna, sed condimentum lorem justo nec nisi. Sed lobortis augue et pretium efficitur. Etiam ac magna vel elit lobortis faucibus. Nunc vestibulum neque at augue bibendum, quis tincidunt urna tempor. Donec dignissim augue id lacus mollis, eget condimentum mi semper.</p>
                    <p className='font-Playfair mb-4 mt-4 text-2xl'>$180</p>
                </div>
            </div>
            <div className='flex flex-col justify-center w-full h-full'>
                <div className='text-black m-8 text-center h-full'>
                    <p className='font-Playfair mb-4 mt-4 text-4xl'>Model Package</p>
                    <p className='font-Playfair mb-4 mt-4 text-2xl'>16 retouched photos, 3 outfits, 2 locations</p>
                    <p className='font-Playfair mb-4 mt-4 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper arcu mi, vitae luctus nisl porttitor at. Sed fringilla leo id pharetra malesuada. In varius, ex et volutpat euismod, nisi turpis porttitor magna, sed condimentum lorem justo nec nisi. Sed lobortis augue et pretium efficitur. Etiam ac magna vel elit lobortis faucibus. Nunc vestibulum neque at augue bibendum, quis tincidunt urna tempor. Donec dignissim augue id lacus mollis, eget condimentum mi semper.</p>
                    <p className='font-Playfair mb-4 mt-4 text-2xl'>$300</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <button onClick={handleClick} className='text-white bg-black m-2 mt-1 p-2 w-28 rounded-md transition-colors hover:bg-slate-800'>Book</button>
        </div>
    </div>
    
  )
}

export default Pricing


