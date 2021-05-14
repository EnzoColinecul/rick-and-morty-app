import React, { useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { setSearches } from '../../actions/characters'
import { Redirect } from 'react-router'


const SearchButton = ({ setIsShowing }) => {

  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const [isShow, setIsShow] = useState(false)

  const handleOnSearch = (e) => {
    const { key, type } = e
    if ((key === "Enter" || type === "click") && (value !== "")) {
      dispatch(setSearches(value))
      setIsShow(true)
    }
  }

  if (isShow) {
    return <Redirect to="/searches" />
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOnSearch}
        className="hidden absolute p-2 inset-y-3 right-2 md:inline-flex  items-center focus:outline-none text-gray-400 rounded-3xl cursor-pointer transitionHover hover:text-white  hover:bg-gray-700  focus:ring-0 focus:ring-inset focus:ring-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      <div className="hidden absolute p-2 inset-y-3 right-2 mr-8 sm:inline-flex items-center focus:outline-none text-gray-400 rounded-3xl cursor-pointer transitionHover focus:ring-1 focus:ring-red">
        <input
          type="search"
          name="search"
          value={value}
          placeholder="Search character"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handleOnSearch}
          className="bg-white h-10 px-5 pr-2 md:pr-1 lg:pr-10 rounded-full text-sm  transition duration-300 focus:outline-none focus:ring focus:ring-blue-logo"
        />
      </div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              type="button"
              className="absolute p-2 inset-y-3 right-2 inline-flex  items-center focus:outline-none text-gray-400 rounded-3xl cursor-pointer transitionHover hover:text-white  hover:bg-gray-700  focus:ring-0 focus:ring-inset focus:ring-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <Disclosure.Panel className="flex justify-center sm:hidden">
                <div className="bg-gray-800 relative flex items-center justify-center h-12  pl-2 bottom-2  w-full sm:hidden">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={handleOnSearch}
                    className="bg-white h-10 px-5 pr-10 rounded-full text-sm transition duration-300 focus:outline-none focus:ring focus:ring-blue-logo"
                  />
                  <button
                    onClick={handleOnSearch}
                    className="absolute w-9 h-9 sm:h-10 sm:w-10 ml-60"
                  >
                    <svg
                      className="absolute w-2 h-2 mt-3 ml-3 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )
        }

      </Disclosure>
    </>
  )
}

export default SearchButton
