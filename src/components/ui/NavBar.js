import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import {
  HomeIcon,
  InformationCircleIcon,
  HeartIcon,
  XIcon,
  MenuIcon
} from '@heroicons/react/solid'
import SearchButton from './SearchButton'
import MenuPanel from './MenuPanel'
import logo from './../assets/images/rick-and-morty-app.png'

import '../../styles/components/home.css'

const NavBar = () => {

  const dispatch = useDispatch()
  const { logged } = useSelector(state => state.auth)

  const [isShowing, setIsShowing] = useState(false)

  const navigation = [
    { name: 'Home', link: "/home", current: false, isLogged: null, icon: <HomeIcon className="flex sm:hidden lg:flex h-5 w-6" /> },
    { name: 'Favorites', link: "/favorites", current: false, isLogged: logged, icon: <HeartIcon className="flex sm:hidden lg:flex h-5 w-6" /> },
    { name: 'About us', link: '#', current: false, isLogged: null, icon: <InformationCircleIcon className="flex sm:hidden lg:flex h-5 w-6" /> },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(startLogout())
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 h-16 fixed left-0 right-0 top-0 " >
      {({ open }) => (
        <>
          <div className="max-w-7xl px-2 sm:px-2 lg:px-8 ">
            <div className="relative flex items-center justify-evenly h-16">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden ">
                <Disclosure.Button
                  type="button"
                  className="transitionHover inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>

                  {open ? (
                    <XIcon onClick={setIsShowing(true)} className="block h-6 w-6" />

                  ) : (
                    <MenuIcon onClick={setIsShowing(false)} className="block h-6 w-6" />
                  )
                  }
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center  sm:items-stretch sm:justify-start sm:ml-12 lg:ml-0">
                <div className="flex items-center">
                  <img
                    className="block h-28 w-auto"
                    src={logo}
                    alt="rick-and-morty-app"
                  />
                </div>
                <div className="hidden self-center md:block sm:ml-3  ">
                  <div className="flex md:space-x-0 lg:space-x-4 items-center">
                    {navigation.map((item) => (
                      <div>
                        {item.isLogged === false ?
                          <>
                            <NavLink
                              key={item.name}
                              to={item.link}
                              className={classNames(
                                item.current ? 'bg-gray-900 text-white flex flex-col place-content-center items-center disabled:opacity-50 ' : 'text-gray-600 flex flex-col place-content-center items-center disabled:opacity-50',
                                'px-2  rounded-md text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              <div className="flex flex-row pt-4" >
                                {item.icon}
                                {item.name}
                              </div>
                            </NavLink>
                            <p className="text-xs font-light flex text-gray-600 place-content-center"> Need authentication</p>
                          </>
                          : <NavLink
                            onClick={() => item.current = true}
                            key={item.name}
                            to={item.link}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'flex text-gray-200 transitionHover hover:bg-gray-700 hover:text-white',
                              'px-2 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.icon}
                            {item.name}
                          </NavLink>
                        }
                      </div>
                    ))}
                    {logged ? (
                      <button className="btn rounded-md w-20 flex flex-col place-content-center items-center " onClick={handleLogout}>
                        Logout
                      </button>
                    ) : (
                      <NavLink
                        className="btn rounded-md w-20 flex flex-col place-content-center items-center "
                        to="/auth/login"
                      >
                        Login
                      </NavLink>
                    )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SearchButton />
          <MenuPanel
            classNames={classNames}
            navigation={navigation}
            isShowing={isShowing}
            logged={logged}
            handleLogout={handleLogout}
          />
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
