import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { TextConstants } from '../constants/TextConstants'
import './style.css'

const Styles = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  width: '30%',
  margin: 10,
  border: '1px',
  borderStyle: 'solid',
  borderColor: '#ff829e',
  borderRadius: '50'
}

const ItemDetail = ({item, setCurItem}) => {
  return (
    <Card
      style={Styles}
    >
      <CardMedia className="media">
        <img src={item.general.avatar}/>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {item.general.firstName} {item.general.lastName}
        </Typography>

        <Typography component="h2">{TextConstants.JOBTITLE}</Typography>
        <Typography component="p">{item.job.title}</Typography>

        <Typography component="h2">{TextConstants.CONTACTTITLE}</Typography>
        <Typography component="p">{item.contact.email}</Typography>
        <Typography component="p">{item.contact.phone}</Typography>

        <Typography component="h2">{TextConstants.ADDRESSTITLE}</Typography>
        <Typography component="p">{item.address.street}</Typography>
        <Typography component="p">{item.address.city}</Typography>
        <Typography component="p">{item.address.zipCode}</Typography>
        <Typography component="p">{item.address.country}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={setCurItem}
        >
          Back
        </Button>
      </CardActions>
    </Card>
  )
}

ItemDetail.propTypes = {
  curItem: PropTypes.object
}

export default ItemDetail