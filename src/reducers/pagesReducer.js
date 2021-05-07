import { types } from "../types/types";

const initialState = {
  activePage: 1
}

export const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.pagesActive:
      return {
        activePage: action.payload
      } 
    default:
      return state
  }
}