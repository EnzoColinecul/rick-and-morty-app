

export const checkDuplicate = (favorites, active) => {
  const checker = favorites.find(favorite => (
    favorite.id === active.id
  ))

  return checker
}