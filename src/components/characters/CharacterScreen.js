import React from 'react'
import { Redirect } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Transition } from '@headlessui/react'
import {
  HeartIcon,
  ArrowLeftIcon,
  BanIcon
} from '@heroicons/react/solid'
import { startDeleteFavoriteCharacter, startSaveFavoriteCharacter } from '../../actions/characters'
import { checkDuplicate } from '../../helpers/checkDuplicate'

const CharacterScreen = ({ history }) => {

  const dispatch = useDispatch()

  const { logged } = useSelector(state => state.auth)
  const { active, favorites } = useSelector(state => state.characters)
  const { loading } = useSelector(state => state.ui)

  const checkingFavorite = checkDuplicate(favorites, active)

  if (!active) {
    return <Redirect to="/home" />
  }

  const { character } = active

  const handleFavorite = () => {
    dispatch(startSaveFavoriteCharacter(active.id))
  }

  const handleUndoFavorite = () => {
    dispatch(startDeleteFavoriteCharacter(active.id))
  }

  return (
    <div className="sm:h-screen transition delay-150 duration-700 ease-in  justify-items-center grid sm:grid-cols-1  ">
      <div className=" flex justify-center mt-12 self-center">
        <Transition
          as="div"
          className="max-w-xs md:max-w-4xl h-2/3 flex md:flex-row flex-col my-5"
          show={!loading}
          enter="transition ease-in duration-500 "
          enterFrom=" opacity-0"
          enterTo="opacity-100 "
        >
          <img className="w-full h-72 sm:h-auto bg-white lg:block bg-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            src={character.urlImage}
            alt="Sunset in the mountains"
          />
          <div className="w-full bg-white p-5 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
            <div className="px-2 sm:py-4">
              <div className="flex center justify-between  mb-2 capitalize">
                <p className="font-extrabold mr-4 items-center text-base md:text-2xl ">{character.name}</p>
                <div className="flex items-center text-sm capitalize">
                  <p className="text-gray-400 font-bold ">status:</p>
                  <p className="text-green-400 font-extrabold ml-1" >{character.status}</p>
                </div>
              </div>
              <div className="flex flex-col text-grey-darker text-sm md:text-xl capitalize font-light ">
                <p><strong>Species:</strong> {character.species}   </p>
                <p><strong>Gender:</strong> {character.gender} </p>
                <p><strong>Origin:</strong> {character.origin} </p>
                <p><strong>Location:</strong> {character.location} </p>
                <p><strong>First appearance in the series:</strong> S01E01 December 2, 2013 </p>
                <p><strong>number of times it appeared:</strong> {character.episode} </p>
              </div>
            </div>
            <div className="flex items-center justify-between sm:py-4 sm:mt-10 ">
              <button
                onClick={() => history.goBack()}
                className="w-1/2 sm:w-full flex place-content-center focus:outline-none bg-white transitionHover hover:bg-gray-200  rounded-full px-3 py-2 text-sm font-medium mr-2 border-2 border-gray-200"
              >
                <ArrowLeftIcon className="flex self-center h-4 w-6 " />
                Back
              </button>
              {!checkingFavorite
                ? (<button
                  className="w-1/2 sm:w-full flex place-content-center focus:outline-none bg-blue-logo transitionHover hover:bg-opacity-70 disabled:opacity-50 text-white rounded-full px-3 py-2 text-sm font-medium mr-2 "
                  disabled={!logged}
                  onClick={handleFavorite}
                >
                  <HeartIcon className="flex h-5 w-6" />
                Favorite
                </button>)
                : (<button
                  className="w-1/2 sm:w-full items-center flex place-content-center focus:outline-none bg-blue-logo transitionHover hover:bg-opacity-70 disabled:opacity-50 text-white rounded-full px-3 sm:py-2 text-sm font-medium mr-2 "
                  disabled={!logged}
                  onClick={handleUndoFavorite}
                >
                  <BanIcon className="flex h-5 w-6" />
                Undo Favorite
                </button>)
              }

            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}


export default CharacterScreen
