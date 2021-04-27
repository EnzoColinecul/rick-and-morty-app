import { Transition } from '@headlessui/react'
import React, { useState } from 'react'

const CharacterCard = () => {

  const [isShowing, setIsShowing] = useState(true)

  return (
    <Transition
    show={isShowing}
    as="div"
    enter="transition fade-out duration-500 "
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
  >
    <div className="max-w-xs rounded-md overflow-hidden shadow-xl my-2 bg-white  ">
      <img className="w-full "
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="flex justify-between mb-2">
          <div className="font-bold text-xl ">Rick Sanchez</div>
          <p className="text-gray-400" >Live</p>
        </div>
        <p className="text-grey-darker text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#Character</span>
      </div>
    </div>
    </Transition>
  )
}

export default CharacterCard
