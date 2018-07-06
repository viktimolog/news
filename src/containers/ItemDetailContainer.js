import React from 'react'
import { connect } from 'react-redux'
import ItemDetail from '../components/ItemDetail'
import { setCurItem } from '../actions/actionCreator'

const ItemDetailContainer = ({curItem, setCurItem}) => {
  if (curItem === false) return null
  return(
    <ItemDetail item={curItem} setCurItem={() => setCurItem(false)}/>
  )
}

const mapStateToProps = state => ({
  curItem: state.mainReducer.curItem
})

const mapDispatchToProps = {
  setCurItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailContainer)