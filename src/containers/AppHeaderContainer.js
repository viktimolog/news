import React from 'react'
import Header from '../components/Header'
import {connect} from 'react-redux'
// import { addTodo } from '../actions'
import PropTypes from 'prop-types'
import {setCurItem} from '../actions/actionCreator'

const AppHeaderContainer = ({curItem, setCurItem}) => (
    <Header
        curItem={curItem}
        setCurItem={setCurItem}
    />
)

AppHeaderContainer.propTypes = {
    setCurItem: PropTypes.func.isRequired,
    curItem: PropTypes.oneOfType([PropTypes.Boolean, PropTypes.object]).isRequired
}


const mapStateToProps = state => ({
    curItem: state.mainReducer.curItem
})

const mapDispatchToProps = {
    setCurItem
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderContainer)
