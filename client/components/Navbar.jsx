import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  BookOpenIcon,
  Bars3Icon,
  CpuChipIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import LOGO from "../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'

const products = [
  { name: 'Electronics and Gadgets', description: 'Get smartphones, laptops, tablets, cameras, and various devices', href: '/category', icon: CpuChipIcon },
  { name: 'Fashion and Apparel', description: 'Category encompasses clothing, footwear, accessories, and fashion-related products', href: '/category', icon: CursorArrowRaysIcon },
  { name: 'Home and Kitchen Appliances', description: 'Category encompass  households, including kitchen appliances, home decor items and so on', href: '/category', icon: FingerPrintIcon },
  { name: 'Health and Beauty', description: 'This category comprises a diverse range of products such as skincare products, cosmetics, haircare items..', href: '#', icon: SquaresPlusIcon },
  { name: 'Books and Media', description: 'This category includes books in various genres, e-books, audiobooks, magazines, movies, music, video games, and other forms of media ', href: '#', icon: BookOpenIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Need help', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            {/* <span className="sr-only">Friday AI</span> */}
            {/* <img className="h-8 w-auto" src={LOGO} alt="" /> */}
            <Image className='h-14 w-14' src={LOGO}/>
            <p className='text-2xl text-gray-700 font-semibold'>Friday AI</p>
            
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 border-none">
              Categories
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Blog
          </Link>
          <Link href="/faqs" className="text-sm font-semibold leading-6 text-gray-900">
            FAQs
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Docs
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-10">

        
            {/* login */}
            <div className='flex items-center'>
            <Link href={"/Login"} className="text-base font-semibold leading-6 text-indigo-500 bg-white border-b-indigo-500">
                Log in <span aria-hidden="true">&rarr;</span>
            </Link>
            </div>
            
            {/* getting started */}
            <Link href="/Started" className="text-sm font-semibold leading-6
            py-2 px-4 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block md:inline
            
            ">
                Getting Started <span aria-hidden="true">&rarr;</span>
            </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between mt-5">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  FAQs 
                </Link>
              </div>

              <div className="py-6">
                <Link
                  href="/Started"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <hr />
    </header>
  )
}
