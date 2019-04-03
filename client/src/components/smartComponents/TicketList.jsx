import React, { PureComponent } from "react";
import getTickets from '../../actions/tickets'


export default class TicketList extends PureComponent {

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