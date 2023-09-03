import React from 'react'
import Image from 'next/image'

const ProductCard = () => {
  return (
    <>
     <div class="max-w-sm w-auto bg-white shadow-lg rounded-xl p-4">
            <div class="flex flex-col">
            <div class="">
                <div class="relative h-58 w-full mb-3 flex justify-center">
                <Image src="
                https://www.apple.com/v/product-red/x/images/overview/iphone/iphone_14__c69km6mz02uu_large_2x.jpg
                " alt="Just a phone" class=" w-56   object-fill  rounded-2xl "/>
                </div>
                <div class="flex-auto justify-evenly">
                <div class="flex flex-wrap ">
                    <div class="w-full flex-none text-sm flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-gray-400 whitespace-nowrap mr-3">4.60</span><span class="mr-2 text-gray-400">India</span>
                    </div>
                    <div class="flex items-center w-full justify-between min-w-0 ">
                    <h2 class="text-lg mr-auto cursor-pointer text-black truncate ">Lorem ipsum
                        is placeholder text commonly used in the graphic</h2>
                    <div class="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                        Brand</div>
                    </div>
                </div>
                <div class="text-xl text-gray-700 font-semibold mt-1 flex items-start">$240.00</div>
                <div class="flex space-x-2 text-sm font-medium justify-end">
                    <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-indigo-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                    <span>Show Details</span>
                    </button>
                    <button class="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard