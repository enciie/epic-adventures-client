import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';

import '../stylesheets/Trip.css'

class TripCard extends Component {
  render() {
    const {trip} = this.props
    return (
      <Col>
          <Card tripid={trip.id}>
              <CardImage
                  className="trip-card img-fluid"
                  src={trip.img_url}
                  waves
              />
              <CardBody>
                  <CardTitle>{trip.name}</CardTitle>
                  <CardText>
                      By: {trip.username}
                  </CardText>
                  <Button href={`/trips/${trip.id}`}>View Adventure</Button>
              </CardBody>
          </Card>
      </Col>
    )
  }
}

export default TripCard;
