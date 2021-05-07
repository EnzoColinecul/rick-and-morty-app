import { types } from "../types/types"

export const setActivePage = (activePage) => ({
  type: types.pagesActive,
  payload: activePage
})