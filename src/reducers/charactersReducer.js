import { types } from "../types/types";

const initialState = {
  characters: [],
  favorites: [],
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
        favorites: [...action.payload]
      }
    case types.charactersFavoritesRefresh:
      return {
        ...state,
        favorites: state.favorites.concat(action.payload)
      }
    case types.charactersLoad:
      return {
        ...state,
        characters: [...action.payload]
      }

    default:
      return state
  }
}