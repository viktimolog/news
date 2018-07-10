import React from 'react'
import {connect} from 'react-redux'
import ItemDetail from '../components/ItemDetail'
import Header from '../components/Header'

const ItemDetailContainer = ({curItem, goBack, ownProps}) => (
    <div>
        {/*<AppHeaderContainer/>*/}
        <Header curItem={curItem}/>
        <ItemDetail item={curItem} goBack={goBack}/>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    curItem: state.mainReducer.items.find(item => item.id === ownProps.params.id),
    goBack: ownProps.router.goBack,
    ownProps
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailContainer)