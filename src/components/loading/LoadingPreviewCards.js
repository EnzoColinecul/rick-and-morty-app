import React from 'react'

import '../../styles/components/home.css'
import defaultImageCard from '../../assets/images/defaultImageCard.jpeg'
import { Transition } from '@headlessui/react'
import { useSelector } from 'react-redux'


const LoadingPreviewCards = ({loadingCards}) => {


  const {loading} = useSelector(state => state.ui)

  return (
    <Transition
      as="div"
      show={loading}
      enter="transition ease-in duration-500 "
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100 "
      leave="transition ease-out duration-500"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-105"
    >
      <div className="character-card-container ">
        <div className="animate-pulse" >
          <img src={defaultImageCard} className="character-card-image bg-blue-logo rounded h-72 " alt="#"/>
          <div className="character-card-body">
            <div className="character-card-header mb-4">
              <div className="pt-0 bg-gray-300 rounded w-24 h-6 "></div>
              <div className="flex text-sm capitalize mt-1 w-16 h-5  bg-gray-300 rounded">
                <div className="text-gray-400 font-bol "></div>
                <div className=" font-extrabold ml-1"></div>
              </div>
            </div>
            <div className="character-card-main ">
              <div className="bg-gray-300 rounded mb-1 w-full h-5"></div>
              <div className="bg-gray-300 rounded mb-1 w-full h-5"></div>
              <div className="bg-gray-300 rounded mb-1 w-full h-5"></div>
            </div>
          </div>
          <div className="px-6 py-4">
            <div
              className="btn-cards h-9 "
            >
            </div>
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default LoadingPreviewCards
