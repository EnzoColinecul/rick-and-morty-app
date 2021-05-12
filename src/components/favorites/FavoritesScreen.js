import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { API_URL } from '../../constants'
import useFetch from '../../hooks/useFetch'
import CharactersCards from '../characters/CharactersCards'

const FavoritesScreen = () => {

  const { logged } = useSelector(state => state.auth)
  const { favorites } = useSelector(state => state.characters)

  const url = `${API_URL}/character/${favorites?.ids}`

  const { data } = useFetch(url)


  if (!logged) {
    return <Redirect to="/home" />
  }

  return (
    <div className="py-16 h-screen">
      <div className=" flex flex-col justify-center overflow-auto scrollbar  sm:ml-0">
        <CharactersCards favoritesCharacters={true} data={data} />
      </div>
    </div>
  )
}

export default FavoritesScreen
