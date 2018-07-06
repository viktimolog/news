import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Items from '../components/Items'
// import Search from '../components/Search'
import { getItems, setCurItem, findItems } from '../actions/actionCreator'

class ItemsContainer extends React.Component {

  componentDidMount () {
    this.props.getItems()
  }

  render () {
    if (this.props.curItem !== false) return null
    return (
      <div>
        {/*<Search findItems={this.props.findItems}/>*/}
        <Items
          items={this.props.items}
          setCurItem={this.props.setCurItem}/>
      </div>)
  }
}

ItemsContainer.propTypes = {
  curItem: PropTypes.oneOfType([PropTypes.Boolean, PropTypes.object]).isRequired,
  items: PropTypes.array.isRequired,
  setCurItem: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  findItems: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  items: state.mainReducer.items,
  curItem: state.mainReducer.curItem
})

const mapDispatchToProps = {
  setCurItem,
  getItems,
  findItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer)

