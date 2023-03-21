import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-cyan-600 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-2 lg:px-2">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="inline-flex items-center px-4 py-0 text-5xl font-sans font-extrabold text-sky-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,1,0.9)]">Night Out</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-end">
                  <NavLink
                      to="/"
                      className="inline-flex items-center px-2 py-2 text-xl font-bold text-gray-50 hover:text-sky-700 hover:text-2xl hover:drop-shadow-lg no-underline"
                      >
                        Book Now
                  </NavLink>
                  <NavLink
                      to="/about"
                      className="inline-flex items-center px-2 py-2 text-xl font-bold text-gray-50 hover:text-sky-700 hover:text-2xl hover:drop-shadow-lg no-underline"
                      >
                        About
                  </NavLink>
                  <NavLink
                      to="/contact"
                      className="inline-flex items-center px-2 py-2 text-xl font-bold text-gray-50 hover:text-sky-700 hover:text-2xl hover:drop-shadow-lg no-underline"
                      >
                        Contact
                  </NavLink>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <StarIcon className="h-7 w-7 stroke-2 fill-blue-200 text-sky-700"/>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none no-underline">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline')}
                          >
                             <div className= "flex flex-wrap content-center">
                              <StarIcon className="h-7 w-7 stroke-2 fill-blue-200 text-sky-700"/>
                              <p className="my-0 ml-2 text-sky-700 leading-3 align-bottom">Artists</p>
                             </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 no-underline')}
                          >
                            <div className= "flex flex-wrap content-center">
                              <StarIcon className="h-7 w-7 stroke-2 fill-blue-200 text-sky-700"/>
                              <p className="my-0 ml-2 text-sky-700 leading-3 align-bottom">Restaurants</p>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as={NavLink}
                to="/"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Book Now
              </Disclosure.Button>
              <Disclosure.Button
                as={NavLink}
                to="/about"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as={NavLink}
                to="/contact"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Contact
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your fav artists
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your fav restaurants
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}