import React from "react";
import {
  Link,
  useHistory
} from "react-router-dom";
function GetStarted() {
  let history = useHistory();
  function handleLogin() {
    history.push('/login')
  }
  return (
    <button onClick={handleLogin} className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Get Started</button>
  );
}
function HeroSection(props) {
  return(
    <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h2 className="text-lg text-white font-medium title-font mb-2">{props.title}</h2>
          <p className="leading-relaxed text-base">{props.description}</p>
        </div>
      </div>
  )
}
function Hero(props) {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">{props.title}</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">{props.description}</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <HeroSection title="title 1" description="description 1" icon=""/>
      <HeroSection title="title 2" description="description 2" icon=""/>
      <HeroSection title="title 3" description="description 3" icon=""/>
      <HeroSection title="title 4" description="description 4" icon=""/>
      <HeroSection title="title 5" description="description 5" icon=""/>
      <HeroSection title="title 6" description="description 6" icon=""/>
    </div>
    <GetStarted />
  </div>
</section>





  )
}

export default Hero