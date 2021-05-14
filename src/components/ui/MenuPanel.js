import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { Link, NavLink } from 'react-router-dom'

const MenuPanel = ({
  classNames,
  navigation,
  isShowing,
  logged,
  handleLogout
}) => {
  return (
    <Disclosure.Panel as="div" className="md:hidden bg-gray-800 " >
      <Transition
        show={isShowing}
        className="block"
        as="div"
        enter="transition ease-in duration-200 "
        enterFrom="transform opacity-0 scale-105"
        enterTo="transform opacity-100 scale-100"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item, index) => (
            <div key={index} >
              {item.isLogged === false ? (
                <div>
                  <NavLink
                    key={item.name}
                    to={item.link}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-600 flex flex-col  disabled:opacity-50',
                      'px-2 py-2 rounded-md text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <div className="flex" >
                      {item.icon}
                      {item.name}
                      <p className="text-xs flex items-center font-light text-gray-600 pl-1 "> Need authentication</p>
                    </div>
                  </NavLink>
                </div>) : (
                <div >
                  <NavLink
                    key={item.name}
                    to={item.link}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'flex text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-2 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                </div>)
              }
            </div>
          ))}
          <div className="flex justify-center">
            {logged ? (
              <button className="btn rounded-md w-20 flex flex-col place-content-center items-center " onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link className="btn rounded-md w-20 flex flex-col place-content-center items-center " to="/auth/login">
                Login
              </Link>
            )
            }
          </div>
        </div>
      </Transition>
    </Disclosure.Panel>
  )
}

export default MenuPanel
