import React, { PureComponent } from "react";
import { connect } from 'react-redux'
import { getTickets } from '../../actions/tickets'
import { getUsers } from '../../actions/users'


class EventDetailsContainer extends PureComponent {

    componentWillMount() {
        if(this.props.authenticated) {
            if (this.props.tickets === null) this.props.getTickets() // getGames
            if (this.props.users === null) this.props.getUsers()
        }
    }

    renderTickets () {

    }

    render() {
        return(
            <div>
                <p>Hello</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    users: state.users === null ? null : state.users,
    tickets: state.tickets === null ? null : Object.values(state.tickets).sort((a, b) => b.id - a.id)
})

export default connect(mapStateToProps, {getTickets, getUsers})(EventDetailsContainer) //, createGame