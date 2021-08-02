import React, { Fragment, Component } from "react"
import jwtDecode from 'jwt-decode';
import { Link, NavLink } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
let jwt = window.localStorage.getItem('jwt');

function MyPopover() {
  const solutions = [
    {
      name: 'Play',
      description: 'View and modify your settings',
      href: '/play',
      icon: IconOne,
    },
    {
      name: 'Ranks',
      description: 'View past games',
      href: '/rankings',
      icon: IconTwo,
    }
  ]
  function handleLogout () {
    if (jwt) {
      window.localStorage.removeItem('jwt')
      this.props.history.replace('/')
    } else {
      console.log(`error: no ${jwt}`)
    }
}
  function handleProfile () {
    if (jwt) {
      this.props.history.push('/profile')
    } else {
      console.log(`error: no ${jwt}`)
    }
}
  return (
    <div >
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-gray-400 group px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Menu</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel style={{ zIndex: 999 }} className="absolute z-15 w-screen max-w-sm px-8 transform -translate-x-full left-1/2 sm:px-2">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-gray-800 p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flow-root px-4 py-4 transition duration-50 ease-in-out rounded-md hover:bg-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-medium text-gray-200">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="p-4 pb-0 bg-gray-800">
                    <Link
                      to="/chat"
                      className="flow-root px-4 py-4 transition duration-50 ease-in-out rounded-md hover:bg-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <button>
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-200">
                          Messaging
                        </span>
                      </span>
                      <span className="block text-sm text-gray-400">
                        Communicate and match with others
                      </span></button>
                    </Link>
                  </div>
                  <div className="p-4 pb-0 bg-gray-800">
                    <Link
                      to="/profile"
                      className="flow-root px-4 py-4 transition duration-50 ease-in-out rounded-md hover:bg-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <button onClick={handleProfile}>
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-200">
                          Profile
                        </span>
                      </span>
                      <span className="block text-sm text-gray-400">
                        View or edit your profile
                      </span></button>
                    </Link>
                  </div>
                  <div className="p-4 bg-gray-800">
                    <Link
                      to="/"
                      className="flow-root px-4 py-4 transition duration-50 ease-in-out rounded-md hover:bg-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <button onClick={handleLogout}>
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-200">
                          Logout
                        </span>
                      </span>
                      <span className="block text-sm text-gray-400">
                        Sign out of your profile
                      </span></button>
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

// function IconThree() {
//   return (
//     <svg
//       width="48"
//       height="48"
//       viewBox="0 0 48 48"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect width="48" height="48" rx="8" fill="#FFEDD5" />
//       <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
//       <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
//       <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
//       <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
//       <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
//       <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
//     </svg>
//   )
// }


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: undefined,
      active: false
    }
    
  }
  componentDidMount() {
    
    if (jwt) {
      let result = jwtDecode(jwt)
      if (result.username) {
        this.setState({ username: result.username })
      }
    }
    else {
      console.log('no jwt')
      this.props.history.push('/')
    }

  }
  
  render() {
  return !this.state.username ? (

    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        <NavLink to="/" activeClassName="text-blue-500">
          <span className="ml-3 text-2xl text-white">{this.props.title}</span>
          </NavLink>
        <nav className="md:ml-auto lg:mr-8  sm:my-2 flex flex-wrap items-center text-base space-around">
          <span className="md:ml-auto lg:mr-8 sm:mr-4">
            <NavLink to="/about" activeClassName="text-blue-500">Our Mission</NavLink>
          </span>
          <span className="md:ml-auto lg:mr-8 sm:mr-4">
            <NavLink to="/privacy" activeClassName="text-blue-500">Privacy</NavLink>
          </span>
          <span className="md:ml-auto lg:mr-8 sm:mr-4">
            <NavLink to="/contact" activeClassName="text-blue-500">Contact</NavLink>
          </span>
        </nav>
      </div>
    </header>



  ) : (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
        <NavLink activeClassName="text-blue-500" to="/app">
          <span className="ml-3 text-2xl text-white">{this.props.title}</span>
          </NavLink>
        <nav className="md:ml-auto lg:mr-8  sm:my-2 flex flex-wrap items-center text-base space-around">
          <span className="md:ml-auto lg:mr-8 sm:mr-4">
            <NavLink activeClassName="text-blue-500" to="/app">Dashboard</NavLink>
          </span>
          <span className="md:ml-auto lg:mr-8 sm:mr-4">
            <NavLink activeClassName="text-blue-500" to="/play">Play</NavLink>
          </span>
          <span className="md:ml-auto lg:mr-8 sm:mr-4">
            <NavLink activeClassName="text-blue-500" to="/chat">Chat</NavLink>
          </span>
          <span className="md:ml-auto lg:mr-4 sm:mr-4">
            <NavLink activeClassName="text-blue-500" to="/rankings">Rankings</NavLink>
          </span>
          <span className="lg:mr-4">
            <MyPopover/>
          </span>
        </nav>
      </div>
    </header>
  )


}
}