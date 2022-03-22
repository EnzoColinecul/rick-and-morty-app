export const checkDuplicate = (favorites, active) => {
  if (favorites.ids?.lenght !==0) {
    let checker = favorites.ids?.find(favorite => (
      favorite === active.id
    ))
    return checker
  } else {
    return null
  }
}