import React from 'react'
import { Disclosure } from '@headlessui/react'
import logo from '../../assets/images/rick-and-morty-app.png'
import SearchButton from './SearchButton'

const NavBar = () => {

  const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 h-16 fixed left-0 right-0 top-0" >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-evenly  h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                  <Disclosure.Button type="button" className="inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>

                    {open ? (
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )
                    }
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center  sm:items-stretch sm:justify-start A">
                  <div className="flex items-center">
                    <img
                      className="block h-28 w-auto"
                      src={logo}
                      alt="rick-and-morty-app"
                    />
                  </div>
                  <div className="hidden self-center sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  {/*      <div className="absolute inset-y-0 right-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-gray-300 cursor-pointer hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div> */}
                  {/*  <Disclosure.Button type="button" className="absolute inset-y-0 right-0 flex items-center focus:no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-gray-300 cursor-pointer hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Disclosure.Button> */}
                </div>
              </div>
              {/*  { !!open && (

            <div className="flex justify-center">
              <div className=" bg-gray-800 rounded-full relative flex items-center justify-evenly  h-14 pr-2 pl-2 bottom-2">
                <input type="search" name="search" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                <button type="submit" class="absolute right-0 top-0 mt-4 mr-5 ">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )
          } */}
            </div>
            <SearchButton />
          </>
        )}
      </Disclosure>
    </>
  )
}

export default NavBar
