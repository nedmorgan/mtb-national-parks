import React, { Component } from 'react'
import axios from 'axios';
import { ParkContainer } from './styled_components/ParkStyles'
const TRAIL_KEY = process.env.REACT_APP_KEY

export default class Park extends Component {

    state = {
        park: {},
        didParkLoad: false,
        displayTrailForm: false,
    }

    componentDidMount() {
        this.getPark()
        console.log(TRAIL_KEY)
    }

    getPark = () => {
        axios.get(`/api/v1/parks/${this.props.match.params.parkId}`).then(res => {
            this.setState({ park: res.data, didParkLoad: true })
        })
    }

    getTrails = (e) => {
        e.preventDefault()
        axios.get(`https://www.mtbproject.com/data/get-trails?lat=${this.state.park.lat}&lon=${this.state.park.lng}&maxDistance=100&key=${TRAIL_KEY}`).then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <ParkContainer>
                {
                    this.state.didParkLoad ?
                        <div className="park-flex">
                            <h1>{this.state.park.name}</h1>
                            <p>{this.state.park.description}</p>
                            <a onClick={(e) => this.getTrails(e)}>Get Trails</a>
                            {
                                this.state.park.trails.map(trail => {
                                    return (
                                        <div className="card">
                                            <div className="card-image">
                                                <figure class="image is-4by3">
                                                    <img src={trail.photo_url} alt={trail.name}></img>
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="media">
                                                    <div className="media-content">
                                                        <p className="title is-4">{trail.name}</p>
                                                        <p className="subtitle is-6">Length: {trail.length} feet</p>
                                                        <p className="subtitle is-6">Location: {trail.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <h2>Loading.....</h2>
                }
            </ParkContainer>
        )
    }
}
