import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import { activeCharacter } from '../../actions/characters'
import { finishLoading, startLoading } from '../../actions/ui'

import '../../styles/components/home.css'

const CharacterCard = ({
  id,
  name,
  status,
  species,
  gender,
  urlImage,
  origin,
  location,
  episode
}) => {

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)

  const handleActiveCharacter = () => {
    dispatch(startLoading())
    dispatch(activeCharacter(id, { name, status, species, gender, urlImage, origin, location, episode }))
    dispatch(finishLoading())
  }

  return (
    <Transition
      as="div"
      onClick={handleActiveCharacter}
      show={!loading}
      enter="transition fade-out duration-1000 "
      enterFrom="opacity-0"
      enterTo="opacity-100 "
    >
      <div className="character-card-container">
        <NavLink to={`/character/${id}`}>
          <img
            className="character-card-image transitionHover group-hover:transform group-hover:scale-105"
            src={urlImage}
            alt={name}
          />
          <div className="character-card-body">
            <div className="character-card-header">
              <p className="font-extrabold text-base md:text-lg pt-0 ">{name}</p>
              <div className="flex text-sm capitalize mt-1 ">
                <p className="text-gray-400 font-bold ">status:</p>
                <p className="text-green-400 font-extrabold ml-1" >{status}</p>
              </div>
            </div>
            <div className="character-card-main text-grey-darker">
              <p><strong>Species:</strong> {species}  </p>
              <p><strong>Gender:</strong> {gender}   </p>
              <p><strong>Origin:</strong> {origin} </p>
            </div>
          </div>
          <div className="px-6 py-4">
            <button
              className="btn-cards transitionHover"
            >
            Show More
            </button>
          </div>
        </NavLink>
      </div>
    </Transition>
  )
}

export default CharacterCard
