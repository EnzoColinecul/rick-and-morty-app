import toast from "react-hot-toast"
import { db } from "../firebase/firebase-config"
import { loadFavorites } from "../helpers/loadFavorites"
import { types } from '../types/types'

export const loadCharacters = (data, error) => {
  return (dispatch) => {
    console.log(data);
    if (data) {
      dispatch(setCharacters(data.results))
    }
    if (error) {
      toast.error(`${error}`)
    }
  }
}

export const startSaveFavoriteCharacter = (character) => {
  toast.loading('Save...')
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    /* const characterToFirestore = {...character}
    delete characterToFirestore.id */
    await db.collection(`${uid}/rick-and-morty/favorites-characters`).add(character)
    toast.dismiss()
    toast.success('Favorite saved')
  }
}

export const startLoadFavoritesCharacters = (uid) => {
  return async (dispatch) => {
    const favoritesCharacters = await loadFavorites(uid)
    console.log(favoritesCharacters);
    dispatch(setFavoritesCharacters(favoritesCharacters))
  }
}

export const setFavoritesCharacters = (favoritesCharacters) => ({
  type: types.charactersLoadFavorites,
  payload: favoritesCharacters
})

export const activeCharacter = (id, character) => ({
  type: types.charactersActive,
  payload: {
    id,
    character
  }
})

export const setCharacters = (characters) => ({
  type: types.charactersLoad,
  payload: characters
})

export const loadFavoritesCharacters = (active) => {
  return (dispatch) => {
    dispatch(refreshFavoritesCharacters(active))
  }
}

export const refreshFavoritesCharacters = (id, character) => ({
  type: types.charactersFavoritesRefresh,
  payload: {
    id,
    character
  }
})