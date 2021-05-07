import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { startLoginEmailPassword, startLoginWithGoogle } from '../../actions/auth'
import useForm from '../../hooks/useForm'

import '../../styles/components/buttons.css'

const LoginScreen = ({ history }) => {

  const { loading } = useSelector(state => state.ui)

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: 'enzo@gmail.com',
    password: '123456'
  })

  const { email, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startLoginEmailPassword(email, password))
  }

  const handleGoogleLogin = (e) => {
    e.preventDefault()
    dispatch(startLoginWithGoogle())
  }

  return (
    <div  >
      <div className="auth-top-container">
        <button
          className="auth-btn"
          onClick={() => history.goBack()}
        >
          <ArrowLeftIcon className="flex self-center h-5 w-6 " />
                Back
        </button>
        <h1 className="auth-title ">Login</h1>
      </div>
      <form 
      onSubmit={handleLogin}
       className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth-input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth-input"
          value={password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn"
          disabled={loading}
        >
          Login
        </button>
        <div className="auth-social-networks font-bold">
          <p className="font-light">Login with social networks</p>
          <div
            className="google-btn "
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text flex justify-center">
              <b >Sign in with google</b>
            </p>
          </div>
          <Link
            to="/auth/register"
            className="text-white transition duration-300 hover:text-gray-400 font"
          >
            Create new account
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginScreen
