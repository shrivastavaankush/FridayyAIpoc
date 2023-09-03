import Image from 'next/image'
import React from 'react'
import LOGO from "../public/logo.png"
import Link from 'next/link'



const SignUP = () => {

    const roles = [
        {
            name: "Content Writer",
            description: "For personal or non-commercial projects.",
        },
        {
            name: "Brand Collabrator",
            description: "For team collaboration with advanced features.",
        },
        
    ]
    
        return (
            <main className="w-full flex h-auto">
                <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-800 lg:flex">
                    <div className="relative z-10 w-full max-w-md">
                        
                        <div className='flex  items-center gap-3'>
                        <Image className='h-14 w-14' src={LOGO}/>
                        <p className='text-3xl text-white font-semibold'>Friday AI</p>
                        </div>
                        
                        <div className=" mt-16 space-y-3">
                            <h3 className="text-white text-3xl font-bold">Start growing your business quickly</h3>
                            <p className="text-gray-300">
                                Create an account and get access to all features for 30-days, No credit card required.
                            </p>
                            <div className="flex items-center -space-x-2 overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-white" />
                                <p className="text-sm text-gray-400 font-medium translate-x-5">
                                    Join 5.000+ users
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-0 my-auto h-[500px]"
                        style={{
                            background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)", filter: "blur(118px)"
                        }}
                    >
    
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center h-screen">
                    <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
                        <div className="">
                            <div className="mt-5 space-y-2">
                                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Create an account</h3>
                                <p className="">Already have an account? <Link href={"/Login"} className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
                            </div>
                        </div>

                        <div className="relative">
                            <span className="block w-full h-px bg-gray-300"></span>
                            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">Create Account</p>
                        </div>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5"
                        >
                            <div>
                                <label className="font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
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


                            {/* select role */}
                            <section>
                                <div className="max-w-md mx-auto px-4">
                                    <h2 className="text-gray-800 font-semibold text-lg">Select your role</h2>
                                    <ul className="mt-6 space-y-3">
                                        {
                                            roles.map((item, idx) => (
                                                <li key={idx}>
                                                    <label htmlFor={item.name} className="block relative">
                                                        <input id={item.name} type="radio" defaultChecked={idx == 1 ? true : false} name="payment" class="sr-only peer" />
                                                        <div className="w-full p-5 cursor-pointer rounded-lg border bg-white shadow-sm ring-indigo-600 peer-checked:ring-2 duration-200">
                                                            <div className="pl-7">
                                                                <h3 className="leading-none text-gray-800 font-medium">
                                                                    {item.name}
                                                                </h3>
                                                                <p className="mt-1 text-sm text-gray-600">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full">
                                                        </span>
                                                    </label>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </section>

                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                                Create account
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        )
    
}

export default SignUP