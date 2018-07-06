import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './style.css'

const Styles = {
  display: 'flex',
  justifyContent: 'left',
  flexDirection: 'row',
  alignItems: 'center',
  width: '30%',
  margin: 10,
  border: '1px',
  borderStyle: 'solid',
  borderColor: '#ff829e',
  borderRadius: '50'
}

const Item = ({item, setCurItem}) => (
  <Card
    // className="item"
    style={Styles}
  >
    <CardMedia className="media">
      <img src={item.general.avatar} alt=""/>
    </CardMedia>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {item.general.firstName} {item.general.lastName}
      </Typography>
      <Typography component="p">
        {item.job.title}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={setCurItem}
      >
        Learn More
      </Button>
    </CardActions>
  </Card>
)

Item.propTypes = {
  item: PropTypes.object.isRequired,
  setCurItem: PropTypes.func.isRequired
}

export default Item