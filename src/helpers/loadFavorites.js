import { db } from "../firebase/firebase-config"

export const loadFavorites = async(uid) => {
  const charactersFavoritesSnap = await db.collection(`${uid}/rick-and-morty/favorites-characters`).get()
  const charactersFavorites = []
  charactersFavoritesSnap.forEach((character) => {
    charactersFavorites.push({
      ...character.data()
    })
  })

  return charactersFavorites
}