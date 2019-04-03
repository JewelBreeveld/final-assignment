import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import TopBar from './components/layout/TopBar'
import EventContainer from './components/smartComponents/EventContainer'
import EventDetailsContainer from './components/smartComponents/EventDetailsContainer'

//<Route exact path="/games" component={GamesList} />
//<Route exact path="/games/:id" component={GameDetails} />
//<Route exact path="/" render={ () => <Redirect to="/games" /> } />
//<Route exact path="/tickets" component={TicketList} />

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/events" component={EventContainer} />
            <Route exact path="/events/:id/tickets" component={EventDetailsContainer} />
            <Route exact path="/" render={ () => <Redirect to="/events" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
