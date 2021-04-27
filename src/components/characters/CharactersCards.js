import { Transition } from '@headlessui/react'
import React, { useState } from 'react'
import CharacterCard from './CharacterCard'

const CharactersCards = () => {


  const cards = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
   
      <div className="characterCardsContainer overflow-auto flex flex-col items-center">
        {
          cards.map(card => (
            <CharacterCard
              key={card}
            />
          ))
        }
      </div>
  )
}

export default CharactersCards
