import React, { Component } from 'react'
import { TrailsContainer } from './styled_components/TrailsStyle'

export default class Trails extends Component {
    render() {
        return (
            <TrailsContainer>
                {
                    this.props.trails.map(trail => {
                        return (
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={trail.imgSmallMed} alt={trail.name}></img>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4" id="trail-name">{trail.name}</p>
                                            <p className="subtitle is-6"><u>Length</u>: {trail.length} feet</p>
                                            <p className="subtitle is-6"><u>Location</u>: {trail.location}</p>
                                        </div>
                                        <div className="add-trail-div">
                                            <button onClick={(e) => this.props.addTrail(e, trail, this.props.parkId)} className="button is-primary">Add Trail</button>
                                            <a className="button find-trail" href={`http://maps.google.com/maps?z=12&t=m&q=loc:${trail.latitude}+${trail.longitude}`} target="_blank" rel="noopener noreferrer">Locate Trail!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </TrailsContainer>
        )
    }
}
