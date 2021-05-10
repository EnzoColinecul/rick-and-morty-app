import React from 'react'
import { useSelector } from 'react-redux'
import CharacterCard from './CharacterCard'

const CharactersCards = ({ homeCharacters, favoritesCharacters, loadingCards }) => {

  const { characters, favorites } = useSelector(state => state.characters)

  if (favorites.length !== 0 && favoritesCharacters) {
    return (
      <div className="characters-cards-container">
        {
          favorites.map(value => (
            <CharacterCard
              key={value.id}
              id={value.id}
              name={value.character.name}
              status={value.character.status}
              species={value.character.species}
              gender={value.character.gender}
              urlImage={value.character.urlImage}
              origin={value.character.origin.name}
              location={value.character.location.name}
              episode={value.character.episode.length}
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
  }
}

export default CharactersCards
