import React, { Component } from "react"

import Landing from "./components/Landing" //landing page
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Recent from "./pages/Recent"
import Contact from "./pages/Contact"
import Chat from "./pages/Chat"
import Play from "./pages/Play"
import ProfileStats from "./components/ProfileStats"
import ProfileMain from "./components/ProfileMain"
import Privacy from "./pages/Privacy"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Dashboard from "./pages/Dashboard"
import jwtDecode from "jwt-decode"
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
let jwt = window.localStorage.getItem('jwt');

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: undefined,
      active: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    
  }
  componentDidMount() {
    if (jwt) {
        let result = jwtDecode(jwt)
        if (result.username) {
            this.setState({ username: result.username, active: true }) 
        }
    }
    else {
        console.log('no jwt')
    }
}
handleLogout () {
  
  if (jwt) {
  window.localStorage.removeItem('jwt')
  this.props.history.push('/')
  }else {
    console.log('no jwt')
    
}
}

render() {
  let user = this.state.username
  return (
    
    <div>
      <Header title="10 Athletes"/>
      <Switch>
          <Route path="/app" exact component={Dashboard}/>
          <Route exact path="/">
            { user ? <Redirect to="/app" /> : <Landing />}
          </Route>
          <Route path="/about" exact component={About}/>
          <Route path="/chat" exact component={Chat}/>
          <Route path="/play" exact component={Play}/>
          <Route path="/rankings" exact component={ProfileStats}/>
          <Route path="/rankings/recent" exact component={Recent}/>
          <Route path="/profile" exact component={ProfileMain}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/privacy" exact component={Privacy}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/login" exact>
            <Login title="10 Athletes" description="Login" />
          </Route>  
          <Route path="/logout" exact component={Logout}/>
        </Switch>
      <Footer title="10 Athletes"/>
      
      </div>
  );
}
}
