import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { startRegisterEmailPassword } from '../../actions/auth'
import { removeError, setError } from '../../actions/ui'
import useForm from '../../hooks/useForm'

const RegisterScreen = () => {

  const { loading } = useSelector(state => state.ui)
  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    name: 'enzo',
    email: 'enzocolinecul@gmail.com',
    password: '123456',
    password2: '123456'
  })

  const { name, email, password, password2 } = formValues

  let error = null

  const handleRegister = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      dispatch(startRegisterEmailPassword(email, password, name))
    }

    if (!isFormValid()) {
      dispatch(setError(error))
      toast.error(`${error}`)
    }
  }

  const isFormValid = () => {

    if (name.trim().length === 0) {
      error = 'Name is required'
      return false
    } else if (!validator.isEmail(email)) {
      error = 'Email not valid'
      return false
    } else if (password.trim().length <= 5) {
      error = 'The password must be greater than 6 digits'
      return false
    } else if (password !== password2) {
      error = 'Passwords must match'
      return false
    }

    dispatch(removeError())
    return true
  }

  return (
    <div >
      <div className="auth-top-container">
        <h1 className="auth-title ">Register</h1>
      </div>
      <form onSubmit={handleRegister} className="flex flex-col items-center" noValidate >
        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth-input"
          value={name}
          onChange={handleInputChange}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth-input"
          value={password2}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn"
          disabled={loading}
        >
          Register
      </button>
        <div className="auth-social-networks font-bold">
          <Link
            to="/auth/login"
            className="text-white transition duration-300 hover:text-gray-400 font"
          >
            Already registered?
        </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterScreen
