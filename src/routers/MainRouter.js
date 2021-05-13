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
      <div >
        <Switch>
          <Route exact path='/home' component={HomeScreen} />
          <Route exact path='/favorites' component={FavoritesScreen} />
          <Route exact path='/searches' component={SearchScreen} />
          <Route exact path='/character/:id' component={CharacterScreen} />
          <Redirect to='/home' />
        </Switch>
      </div>
    </>
  )
}

export default MainRouter