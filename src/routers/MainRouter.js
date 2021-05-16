import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CharacterScreen from '../components/characters/CharacterScreen'
import FavoritesScreen from '../components/favorites/FavoritesScreen'
import HomeScreen from '../components/home/HomeScreen'
import SearchScreen from '../components/search/SearchScreen'
import NavBar from '../components/ui/NavBar'



const MainRouter = () => {
  return (
    <>
      <NavBar />
      < >
        <Switch>
          <Route exact path='/rick-and-morty-app/home' component={HomeScreen} />
          <Route exact path='/rick-and-morty-app/favorites' component={FavoritesScreen} />
          <Route exact path='/rick-and-morty-app/searches' component={SearchScreen} />
          <Route exact path='/rick-and-morty-app/character/:id' component={CharacterScreen} />
          <Redirect to='/rick-and-morty-app/home' />
        </Switch>
      </>
    </>
  )
}

export default MainRouter