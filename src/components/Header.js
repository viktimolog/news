import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Avatar from '../components/Avatar'

import './style.css'

const styles = {
    root: {
        flexGrow: 1,
    },
}

const Header = ({curItem}) => (
        <header className="app-header">
            <AppBar position="static">
                <Toolbar className="toolbar">
                    <Typography variant="title" color="inherit">
                        List of the clients
                    </Typography>
                    <Avatar curItem={curItem}/>
                </Toolbar>
            </AppBar>
        </header>
    )

// export default Header
export default withStyles(styles)(Header)