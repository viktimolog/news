import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
// import { Item } from 'semantic-ui-react'
import './style.css'

const Items = ({items, setCurItem}) => (
        <div className="app-items">
            {items.map(item =>
                <Item
                    item={item}
                    setCurItem={() => setCurItem(item)}
                />
            )}
        </div>
    )

export default Items

Items.propTypes = {
    items: PropTypes.array.isRequired,
    setCurItem: PropTypes.func.isRequired
}