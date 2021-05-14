import React, { useState } from 'react'
import CharactersCards from '../characters/CharactersCards'
import Pagination from '../ui/Pagination'

import '../../styles/components/home.css'
import LoadingPreviewCards from '../loading/LoadingPreviewCards'

const HomeScreen = () => {

  const [loadingCards, setLoadingCards] = useState(false)

  return (
    <>
      <div className="main-container  scrollbar ">
        <div className="home-container flex flex-col justify-center -mb-14 h-screen ml-4 sm:ml-0">
          <Pagination setLoadingCards={setLoadingCards} />
          {!loadingCards ?
            <CharactersCards homeCharacters={true} />
            :
            <LoadingPreviewCards show={true}/>
          }
        </div>
      </div>
    </>
  )
}

export default HomeScreen
