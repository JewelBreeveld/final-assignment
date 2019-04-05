import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import TopBar from './components/layout/TopBar'
import EventListContainer from './components/smartComponents/EventListContainer'
import TicketListContainer from './components/smartComponents/TicketListContainer'
import EventFormContainer from './components/smartComponents/EventFormContainer'
//import TicketFormContainer from './components/smartComponents/TicketFormContainer'
import TicketDetailsContainer from './components/smartComponents/TicketDetailsContainer'

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
            <Route exact path="/events" component={EventListContainer} />
            <Route exact path="/events/:id/tickets" component={TicketListContainer} />
            <Route exact path="/events/create" component={EventFormContainer} />
            {/* <Route exact path="/events/:id/tickets/create" component={TicketFormContainer} /> */}
            <Route exact path="/events/:id/tickets/:ticketId" component={TicketDetailsContainer} />
            <Route exact path="/" render={ () => <Redirect to="/events" /> } />
          </main>
        </div>
      </Router>
    )
  }
}
export default App
