import React from 'react'
import Image from 'next/image'
import LOGO from "/public/logo.png"
import Link from 'next/link'


const index = () => {
    
    
        return (
            <main className="w-auto h-[500px] flex flex-col items-center justify-center px-4">
                <div className="max-w-sm w-full text-gray-600">
                    <div className="text-center">
                        <div className=' hidden items-center justify-center gap-3 lg:flex'>
                            <Image className='h-14 w-14' src={LOGO}/>
                            <p className='text-3xl text-gray-800 font-semibold'>Friday AI</p>
                        </div>
                        
                        <div className="mt-5 space-y-2">
                            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                            <p className="">Dont have an account?
                             <Link href={"/Started"} className="font-medium text-indigo-600 hover:text-indigo-500">Sign up
                            </Link>
                            </p>
                        </div>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-8 space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Sign in
                        </button>
                        <div className="text-center">
                            <a href="javascript:void(0)" className="hover:text-indigo-600">Forgot password?</a>
                        </div>
                    </form>
                </div>
            </main>
        )
    
    
}

export default index