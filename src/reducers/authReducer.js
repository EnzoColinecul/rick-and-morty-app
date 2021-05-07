import { types } from "../types/types";

export const authReducer = (state = {logged:false}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        logged: action.payload.logged
      }
    case types.logout:
      return {
        logged: action.payload.logged
      }
    default:
      return state
  }
}