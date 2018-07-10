import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import './style.css'

const Items = ({items}) => (
    <div className="app-items">
        {items.map(item =>
            <Item
                key={item.id}
                item={item}
            />
        )}
    </div>
)

export default Items

Items.propTypes = {
    items: PropTypes.array.isRequired,
}