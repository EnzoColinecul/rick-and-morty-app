import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { API_URL } from '../../constants'
import useFetch from '../../hooks/useFetch'
import CharactersCards from '../characters/CharactersCards'
import LoadingPreviewCards from '../loading/LoadingPreviewCards'

const SearchScreen = () => {

  const url = `${API_URL}/character/`

  const { searches } = useSelector(state => state.characters)
  const [params] = useState(new URLSearchParams({ name: searches }))
  const { data, error, loading } = useFetch(url, params)

  if (searches === "") {
    return <Redirect to="/home"/>
  }

  return (
    <div className="py-16 h-screen">
      <div className="flex flex-col justify-center overflow-auto scrollbar ml-4  sm:ml-0">
        {!loading ?
          <CharactersCards
            searchCharacter={true}
            data={data.results}
            error={error}
          />
          :
          <LoadingPreviewCards show={true}/>
        }
      </div>
    </div>
  )
}

export default SearchScreen
