import { types } from "../types/types";

const initialState = {
  characters: [],
  favorites: {},
  searches: "",
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
      return {
        ...state,
        favorites: {
          ids: state.favorites.ids.filter(id => id !== action.payload)
        }
      }
    case types.charactersSetSearch:
      return {
        ...state,
        searches: action.payload
      }
    default:
      return state
  }
}