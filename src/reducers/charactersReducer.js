import { types } from "../types/types";

const initialState = {
  characters: [],
  favorites: {},
  active: null
}

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.charactersActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }
    case types.charactersLoadFavorites:
      return {
        ...state,
        favorites: { ...action.payload }
      }
    case types.charactersFavoritesRefresh:
      return {
        ...state,
        favorites: { ids: [...state.favorites.ids.concat(action.payload)] }
      }
    case types.charactersLoad:
      return {
        ...state,
        characters: [...action.payload]
      }
    case types.charactersUndoFavorite:
      console.log(action.payload);
      return {
        ...state,
        favorites: {
          ids: state.favorites.ids.filter(id => id !== action.payload)
        }
      }
    default:
      return state
  }
}