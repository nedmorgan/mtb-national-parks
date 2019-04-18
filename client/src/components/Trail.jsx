import React, { Component } from 'react'
import axios from 'axios'
import BikesForm from './BikesForm'
import Bikes from './Bikes'
import { TrailContainer } from './styled_components/TrailStyles'

export default class Trail extends Component {

    state = {
        trail: {},
        didTrailLoad: false,
        displayBikeForm: false,
    }

    componentDidMount() {
        this.getTrail()
    }

    getTrail = () => {
        axios.get(`/api/v1/trails/${this.props.match.params.trailId}/`).then(res => {
            this.setState({ trail: res.data, didTrailLoad: true })
        })
    }
    render() {
        return (
            <TrailContainer>
                {
                    this.state.didTrailLoad ?
                        <div className="card">
                            <div className="card-image">
                                <figure class="image is-4by3">
                                    <img src={this.state.trail.photo_url} alt={this.state.trail.name}></img>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4"><a href={this.state.trail.site_url} target="_blank" rel="noopener noreferrer">{this.state.trail.name}</a></p>
                                        <p className="subtitle is-6">Length: {this.state.trail.length} miles</p>
                                        <p className="subtitle is-6">Max Elevation: {this.state.trail.max_elv} feet</p>
                                        <p className="subtitle is-6">Min Elevation: {this.state.trail.min_elv} feet</p>
                                        <p className="subtitle is-6">Location: {this.state.trail.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <h2>Loading.....</h2>
                }
            </TrailContainer>
        )
    }
}
