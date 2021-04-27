import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'


const SearchButton = () => {

  return (
    <Disclosure as="nav" className="bg-gray-800 left-0 right-0 top-0 w-full">
      {({ open }) => (
        <>
          <Disclosure.Button type="button" className="absolute inset-y-0 right-2 flex items-center focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-gray-300 cursor-pointer hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Disclosure.Button>

          <Transition
            show={open}
            as="div"
            enter="transition ease-out duration-500 "
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {open && (
              <div className="flex justify-center ">
                <div className=" bg-gray-800 relative flex items-center justify-evenly  h-12 pr-2 pl-2 bottom-2  w-full">
                  <input type="search" name="search" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                  <button type="submit" class="absolute right-0 top-0 mr-20 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )
            }
          </Transition>
        </>
      )}
    </Disclosure >
  )
}

export default SearchButton
