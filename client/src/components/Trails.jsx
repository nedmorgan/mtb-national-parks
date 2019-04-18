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
                                    <figure class="image is-4by3">
                                        <img src={trail.imgSmallMed} alt={trail.name}></img>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{trail.name}</p>
                                            <p className="subtitle is-6">Length: {trail.length} feet</p>
                                            <p className="subtitle is-6">Location: {trail.location}</p>
                                        </div>
                                        <button onClick={(e) => this.props.addTrail(e, trail, this.props.parkId)} class="button is-primary">Add Trail</button>
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
