import toast from 'react-hot-toast';
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from "../types/types";
import { finishLoading, setError, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading())
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
        dispatch(finishLoading())
        toast.success('Success!')
      })
      .catch(({ message }) => {
        dispatch(setError(message))
        dispatch(finishLoading())
        toast.error(`${message}`)
        console.log(message);
      })
  }
}

export const startLoginWithGoogle = () => {
  return (dispatch) => {
    dispatch(startLoading())
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
        toast.success('Success!')
        dispatch(finishLoading())
      })
      .catch(({ message }) => {
        dispatch(finishLoading())
        dispatch(setError(message))
        toast.error(`${message}`)
      })
  }
}

export const startRegisterEmailPassword = (email, password, name) => {

  return async (dispatch) => {
    dispatch(startLoading())
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name })
        dispatch(login(user.uid, user.displayName))
        toast.success('Success!')
        dispatch(finishLoading())
      })
      .catch(({ message }) => {
        dispatch(finishLoading())
        dispatch(setError(message))
        toast.error(`${message}`)
      })
  }
}

export const startLogout = () => {
  return (dispatch) => {
    firebase.auth().signOut()
      .then(() => {
        dispatch(logout())
        toast.success(`logout successful!`)
      })
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
    logged: true
  }
})

export const logout = () => ({
  type: types.logout,
  payload: {
    logged: false
  }
})