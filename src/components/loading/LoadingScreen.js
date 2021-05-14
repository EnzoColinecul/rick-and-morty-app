import { Transition } from '@headlessui/react'
import React from 'react'

import rick from '../../assets/images/RickAndMortyLoadingImage1.png'
import morty from '../../assets/images/RickAndMortyLoadingImage2.png'

const LoadingScreen = ({ loading }) => {

  return (
    <Transition
      show={loading}
      as="div"
      enter="transition ease-in duration-500 "
      enterFrom="transform opacity-0 scale-105"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-out duration-500"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-105"
    >
      <div className="bg-gray-800 bg-none items-center justify-center flex-col h-screen flex bg-opacity-90 ">
        <div className="flex items-center justify-center h-1/3">
          <img className="opacity-100 h-full animate-bounce flex-row flex" src={rick} alt="loading" />
          <img className="opacity-100 h-full animate-bounceTest flex-row flex" src={morty} alt="loading" />
        </div>
        <h1 className="text-white text-opacity-100 mt-4 animate-pulse font-bold text-3xl">Loading...</h1>
      </div>
    </Transition>
  )
}

export default LoadingScreen
