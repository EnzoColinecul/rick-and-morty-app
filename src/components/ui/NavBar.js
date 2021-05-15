import React, { createRef, useState } from 'react'
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
import { createPopper } from "@popperjs/core";
import SearchButton from './SearchButton'
import MenuPanel from './MenuPanel'
import logo from '../../assets/images/rick-and-morty-app.png'

import '../../styles/components/home.css'

const NavBar = () => {

  const dispatch = useDispatch()
  const { logged } = useSelector(state => state.auth)

  const [isShowing, setIsShowing] = useState(false)
  const [popoverShow, setPopoverShow] = useState(false)
  const btnRef = createRef()
  const popoverRef = createRef()

  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "bottom"
    })
    setPopoverShow(true)
  }

  const closePopover = () => {
    setPopoverShow(false)
  }


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
                          <div className="w-full text-center">
                            <button
                              key={item.name}
                              onClick={() => {
                                popoverShow ? closePopover() : openPopover()
                              }}
                              ref={btnRef}
                              className={classNames(
                                item.current ? 'bg-gray-900 text-white flex flex-col place-content-center items-center disabled:opacity-50 ' : 'text-gray-600 focus:outline-none flex flex-col place-content-center items-center disabled:opacity-50',
                                'px-2  rounded-md text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              <div className="flex flex-row" >
                                {item.icon}
                                {item.name}
                              </div>
                            </button>
                            <div
                              className={
                                (popoverShow ? "" : "hidden ") +
                                "bg-gray-600 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
                              }
                              ref={popoverRef}
                            >
                              <div>
                                <div
                                  className="bg-gray-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
                                >
                                  Need authentication
                                </div>
                                <div className="text-white p-3">
                                  Click on the "Login" button to authenticate and access favorites
                              </div>
                              </div>
                            </div>
                          </div>
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
          {isShowing ?
            <MenuPanel
              classNames={classNames}
              navigation={navigation}
              isShowing={isShowing}
              logged={logged}
              handleLogout={handleLogout}
            />
            :
            <SearchButton setIsShowing={setIsShowing} />
          }
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
