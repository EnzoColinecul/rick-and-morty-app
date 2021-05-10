import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { firebase } from '../firebase/firebase-config'
import { finishLoading, startLoading } from '../actions/ui'
import { startLoadFavoritesCharacters } from '../actions/characters'
import { login } from '../actions/auth'
import { PublicRoute } from './PublicRoute'
import MainRouter from './MainRouter'
import AuthRouter from './AuthRouter'
import LoadingScreen from '../components/loading/LoadingScreen'

const Routers = () => {

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)

  const [checking, setChecking] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    dispatch(startLoading())
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        dispatch(startLoadFavoritesCharacters(user.uid))
        dispatch(finishLoading())
        setIsLogged(true)
        setChecking(false)
      } else {
        dispatch(finishLoading())
        setIsLogged(false)
        setChecking(false)
      }
    })
  }, [dispatch, setChecking, setIsLogged])


  return (
    <>
      <LoadingScreen loading={loading} />
      <Toaster position="bottom-center" />
      <Transition
        show={!loading || checking}
        as="div"
        enter="transition ease-out duration-500 "
        enterFrom=" opacity-0 scale-95"
        enterTo="opacity-100 scale-100 "
      >
        <Router>
          <div >
            <Switch>
              {!isLogged &&
                <Route
                  path="/auth"
                  component={AuthRouter}
                />
              }
              <PublicRoute
                path="/"
                component={MainRouter}
              />
            </Switch>
          </div>
        </Router>
      </Transition>
    </>
  )
}
export default Routers
