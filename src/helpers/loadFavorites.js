import { db } from "../firebase/firebase-config"

export const loadFavorites = async (uid) => {
  const charactersFavoritesSnap = await db.collection(`${uid}/rick-and-morty/characters`).get()
  let charactersFavorites = {}
  charactersFavoritesSnap.forEach((character) => {
    charactersFavorites = { ...character.data() }
  })
  return charactersFavorites
}