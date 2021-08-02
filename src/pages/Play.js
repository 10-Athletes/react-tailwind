import React, { Component } from 'react';
import { Link } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import FormRadio from "../components/FormComponents/FormRadio"
// import FormSwitch from "../components/FormComponents/FormSwitch"
import FormSelect from "../components/FormComponents/FormSelect"
let jwt = window.localStorage.getItem('jwt');
export default class Dashboard extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: undefined
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
        this.props.history.push('/')
      }
  
    }
    render() {
      return (
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-6 mx-auto">
            <div className="flex flex-wrap">
              <div className="lg:w-full md:w-full mb-6 p-4 w-full">
                <section className="text-gray-400 bg-gray-900 body-font relative">
                  <div className="absolute inset-0 bg-gray-900 shadow-lg rounded-lg">
                    <iframe title="map" width="100%" height="100%" frameBorder={0} marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24951.32998089425!2d-121.51182456878576!3d38.5817764457028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad12eca5c2643%3A0xbf033d39b925536a!2sDowntown%2C%20Sacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1627345792869!5m2!1sen!2sus" style={{ borderRadius: '1rem', filter: 'contrast(1) opacity(0.8)' }} />
                  </div>
                  <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-lg rounded-lg p-8 flex flex-col md:ml-auto w-full mt-1 md:mt-0 relative z-10">
                      <h2 className="text-white text-2xl mb-3 font-medium title-font">Find a match</h2>
                      {/* <p className="leading-relaxed mb-5">Discover Matches by selecting what you're looking for</p> */}
                      <div className="relative mb-2">
                        <label htmlFor="text" className="leading-7 text-sm text-gray-400">Match Title</label>
                        <textarea id="text" name="text" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 h-12 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                      </div>
                      <div className="relative mb-2">
                        <FormRadio />
                      </div>
                      <div className="relative mb-2">
                        <FormSelect />
                      </div>
                      <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Search</button>
                      <p className="text-xs text-gray-400 text-opacity-90 mt-6">We use your approximate location when delivering real-time data.  <br /> Your location information is not stored.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
  
      )
    }
  }