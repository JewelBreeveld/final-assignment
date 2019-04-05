import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router'
import {userId} from '../../jwt'
import {connect} from 'react-redux'
import AccountIcon from '@material-ui/icons/AccountBox'

const TopBar = (props) => {
  const { history, user } = props
  console.log('topbar', props)
  return (
    <AppBar position="absolute" style={{zIndex:10}}>
      <Toolbar>
        <Typography variant="title" color="inherit" style={{flex: 1}}>
          TicketSwoooop
        </Typography>
        {
          user &&
          <Button color="inherit"><AccountIcon /> { user.firstName }</Button>
        }

        { user ? 
          <Button color="inherit" onClick={() => history.push('/login')} disabled={true}>Login</Button>
          : 
          <Button color="inherit" onClick={() => history.push('/login')} disabled={false}>Login</Button>
        }
        
        { user ? 
          <Button color="inherit" onClick={() => history.push('/signup')} disabled={true}>Sign up</Button>
          :
          <Button color="inherit" onClick={() => history.push('/signup')} disabled={true}>Sign up</Button>
        }
        { 
          <Button color="inherit" onClick={() => history.push('/events')}> Events</Button>
        }
        { 
          <Button color="inherit" onClick={ () => history.push('/logout')}>Log out</Button>
        }
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  user: state.currentUser && state.users &&
    state.users[userId(state.currentUser.jwt)]
})

export default withRouter(
  connect(mapStateToProps)(TopBar)
)
