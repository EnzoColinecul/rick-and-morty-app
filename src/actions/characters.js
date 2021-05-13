import toast from "react-hot-toast"
import { db, firebase } from "../firebase/firebase-config"
import { loadFavorites } from "../helpers/loadFavorites"
import { types } from '../types/types'

export const loadCharacters = (data, error) => {
  return (dispatch) => {
    if (data) {
      dispatch(setCharacters(data.results))
    }
    if (error) {
      toast.error(`${error}`)
    }
  }
}

export const setCharacters = (characters) => ({
  type: types.charactersLoad,
  payload: characters
})

export const startSaveFavoriteCharacter = (characterId) => {
  toast.loading('Save...')
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    await db.doc(`${uid}/rick-and-morty/characters/favorites-characters-id/`).update({
      ids: firebase.firestore.FieldValue.arrayUnion(characterId)
    })

    dispatch(refreshFavoritesCharacters(characterId))
    toast.dismiss()
    toast.success('Favorite saved')
  }
}

export const refreshFavoritesCharacters = (character) => ({
  type: types.charactersFavoritesRefresh,
  payload: character
})

export const startLoadFavoritesCharacters = (uid) => {
  return async (dispatch) => {
    let favoritesCharacters = await loadFavorites(uid);
    if (favoritesCharacters.length === 0) await db.doc(`${uid}/rick-and-morty/characters/favorites-characters-id/`).set({ ids: [] }, { merge: true });
    dispatch(setFavoritesCharacters(favoritesCharacters));
  }
}

export const setFavoritesCharacters = (favoritesCharacters) => ({
  type: types.charactersLoadFavorites,
  payload: favoritesCharacters
})

export const startDeleteFavoriteCharacter = (characterId) => {
  toast.loading('Deleting Favorite...')
  return async(dispatch, getState) => {
    const { uid } = getState().auth

    await db.doc(`${uid}/rick-and-morty/characters/favorites-characters-id/`).update({
      ids: firebase.firestore.FieldValue.arrayRemove(characterId)
    })
    dispatch(deleteFavoriteCharacter(characterId))
    toast.dismiss()
    toast.success('Favorite Deleted')
  }
}

export const deleteFavoriteCharacter = (id) => ({
  type: types.charactersUndoFavorite,
  payload: id
})

export const activeCharacter = (id, character) => ({
  type: types.charactersActive,
  payload: {
    id,
    character
  }
})
