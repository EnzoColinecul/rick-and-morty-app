import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { API_URL } from '../../constants'
import useFetch from '../../hooks/useFetch'
import CharactersCards from '../characters/CharactersCards'

const FavoritesScreen = ({ history }) => {

  const { logged } = useSelector(state => state.auth)
  const { favorites } = useSelector(state => state.characters)

  let url = favorites.ids?.length > 0 && `${API_URL}/character/${favorites?.ids}`

  const { data, loading } = useFetch(url)

  if (!logged) {
    return (
      <Redirect to="/home" />
    )
  }

  return (
    <div className="py-16 h-screen">
      <div className="flex flex-col justify-center overflow-auto scrollbar ml-4 sm:ml-0">
        {!loading &&
          <CharactersCards
            favoritesCharacters={true}
            data={data}
            favorites={favorites}
          />
        }
      </div>
    </div>
  )



}

export default FavoritesScreen
