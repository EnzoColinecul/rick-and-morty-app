import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import CharactersCards from '../characters/CharactersCards'

const FavoritesScreen = () => {

  const { logged } = useSelector(state => state.auth)

  if (!logged) {
    return <Redirect to="/home" />
  }

  return (
    <div className="py-16 h-screen">
      <div className=" flex flex-col justify-center overflow-auto scrollbar  sm:ml-0">
        <CharactersCards favoritesCharacters={true} />
      </div>
    </div>
  )
}

export default FavoritesScreen
