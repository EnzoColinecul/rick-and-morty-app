import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CharacterCard from './CharacterCard'

const CharactersCards = ({
  homeCharacters,
  favoritesCharacters,
  searchCharacter,
  loadingCards,
  data,
  error,
  favorites
}) => {

  const history = useHistory()

  const { characters } = useSelector(state => state.characters)

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

  if ((favorites?.ids.length > 0 && data && favoritesCharacters) || (searchCharacter && data)) {
    return (
      <div className="characters-cards-container">
        {Array.isArray(data) ?
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
          :
          <CharacterCard
            key={data.id}
            id={data.id}
            name={data.name}
            status={data.status}
            species={data.species}
            gender={data.gender}
            urlImage={data.image}
            origin={data.origin.name}
            location={data.location.name}
            episode={data.episode.length}
            loadingCards={loadingCards}
          />
        }
      </div>
    )
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className=" flex w-3/4 p-32 justify-center text-white rounded-xl bg-gray-800">
        <div className="flex flex-col">
          <div className="flex text-center mb-2 capitalize">
            <p className="font-extrabold items-center text-base md:text-2xl ">{error ? error : "You don't have any favorite characters added, try adding one!"}</p>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="btn"
              onClick={() => history.push("/home")}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )


}

export default CharactersCards
