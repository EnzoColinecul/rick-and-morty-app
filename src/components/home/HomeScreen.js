import React from 'react'
import CharactersCards from '../characters/CharactersCards'
import Pagination from '../ui/Pagination'

import '../../styles/components/home.css'

const HomeScreen = () => {
  return (
    <>
      <div className="main-container  py-16 h-screen">
        <div className="home-container flex flex-col justify-center overflow-auto scrollbar ml-4 sm:ml-0">
          <Pagination />
          <CharactersCards homeCharacters={true} />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
