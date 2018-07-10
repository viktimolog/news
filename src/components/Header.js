import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '../components/Avatar'
import {TextConstants} from '../constants/TextConstants'
import './style.css'

const Header = ({curItem}) => (
    <header className="app-header">
        <AppBar position="static">
            <Toolbar className="toolbar">
                <Typography variant="title" color="inherit">
                    {TextConstants.TITLEAPP}
                </Typography>
                <Avatar curItem={curItem}/>
            </Toolbar>
        </AppBar>
    </header>
)

export default Header