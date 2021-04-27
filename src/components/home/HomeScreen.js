import React from 'react'
import NavBar from './NavBar'
import '../../styles/Home/index.css'
import CharactersCards from '../characters/CharactersCards'
import { Transition } from '@headlessui/react'

const HomeScreen = () => {


  return (
    <>
      <div className="mainContainer py-16 ">
        <NavBar />
        <div className="homeContainer  " >
          <div className="homeCardsContainer ">
              <CharactersCards />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
