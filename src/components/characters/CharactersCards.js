import React from 'react'
import { useSelector } from 'react-redux'
import CharacterCard from './CharacterCard'

const CharactersCards = ({ homeCharacters, favoritesCharacters, loadingCards, data }) => {

  const { characters } = useSelector(state => state.characters)

  if (data && favoritesCharacters) {
    return (
      <div className="characters-cards-container">
        {
          data.map(character => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              urlImage={character.image}
              origin={character.origin.name}
              location={character.location.name}
              episode={character.episode.length}
              loadingCards={loadingCards}
            />
          ))
        }
      </div>
    )
  }


  if (characters && homeCharacters) {
    return (
      <div className="characters-cards-container">
        {
          characters.map(character => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              urlImage={character.image}
              origin={character.origin.name}
              location={character.location.name}
              episode={character.episode.length}
              loadingCards={loadingCards}
            />
          ))
        }
      </div>
    )
  } else return null
}

export default CharactersCards
