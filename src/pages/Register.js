import React from "react";
import { config } from '../utils/environment'
import {
    Link,
    useHistory
} from "react-router-dom";
let inputNode1, inputNode2, inputNode3, inputNode4, inputNode5;
function RegisterLink() {
    let history = useHistory();
    function handleLogin() {
        history.push('/login')
    }
    return (
        <div className="rounded-md shadow mt-3 sm:mt-0 sm:ml-3 ">
            <button
                onClick={handleLogin}
                className="flex mt-14 mx-auto text-white border-0 py-2 px-8 focus:outline-none rounded text-md"
            >
                Already have an account?
            </button>
        </div>
    )
}

const Register = props => {
  function handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append("username", inputNode1.value);
    formData.append("firstname", inputNode2.value);
    formData.append("lastname", inputNode3.value);
    formData.append("email", inputNode4.value);
    formData.append("password", inputNode5.value);

    let url = config.url.BASE_URL + 'users'

    fetch(url,
      { method: 'POST', body: formData })
      .then(res => res.json()).then(res => (console.log(res.jwt),
        window.localStorage.setItem('jwt', res.jwt)))
      .then(() => props.history.push('/app'))
      .catch(function (error) { console.log('There is an error: ', error.message) })
  }
    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Register</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Complete the form below to register an account</p>
    </div>
    <div className="lg:w-1/4 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-full">
            <form onSubmit={handleSubmit}>
            <div className="relative">
            <label htmlFor="username" className="leading-7 text-sm text-gray-400">Username</label>
            <input 
              type="text" 
              id="username" 
              name="first_name"
              ref={(node) => {
                inputNode1 = node;
              }} 
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative">
            <label htmlFor="first_name" className="leading-7 text-sm text-gray-400">First Name</label>
            <input 
              type="text" 
              id="first_name" 
              name="first_name"
              ref={(node) => {
                inputNode2 = node;
              }} 
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative">
            <label htmlFor="last_name" className="leading-7 text-sm text-gray-400">Last Name</label>
            <input 
            type="text" 
            id="last_name" 
            name="last_name" 
            ref={(node) => {
              inputNode3 = node;
            }} 
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            ref={(node) => {
              inputNode4 = node;
            }} 
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative">
            <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
            <input 
            type="password" 
            id="password" 
            name="password" 
            ref={(node) => {
              inputNode5 = node;
            }} 
            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button
                onClick={handleSubmit}
                className="flex mt-14 mb-2 mx-auto text-white size-xl bg-blue-700 border-0 py-4 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
                Register
            </button>
          <RegisterLink/>
          </form>
        </div>
        <div className="p-2 w-full pt-8 mt-8 text-center">
          <span className="inline-flex">
            <a href="#!" className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#!"className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#!" className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href="#!" className="ml-4 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>


        </div>
    )
}

export default Register