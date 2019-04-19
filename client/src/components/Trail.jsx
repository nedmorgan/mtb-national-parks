import React, { Component } from 'react'
import axios from 'axios'
import Bikes from './Bikes'
import { TrailContainer } from './styled_components/TrailStyles'

export default class Trail extends Component {

    state = {
        trail: {},
        didTrailLoad: false,
        displayBikeForm: false,
        bike: {
            make: '',
            model: '',
            tire_size: '',
            tubeless: false,
            groupset: '',
            weight: '',
            full_suspension: false,
            dropper_post: false,
            photo_url: '',
        },
        isBikeAdd: true,
        isTrue: true,
    }

    componentDidMount() {
        this.getTrail()
    }

    getTrail = () => {
        axios.get(`/api/v1/trails/${this.props.match.params.trailId}/`).then(res => {
            this.setState({ trail: res.data, didTrailLoad: true })
        })
    }

    getSpecificBike = (bikeId) => {
        axios.get(`/api/v1/bikes/${bikeId}/`).then(res => {
            this.setState({ bike: res.data })
        })
    }

    handleBikeChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const updatedBike = { ...this.state.bike }
        updatedBike[name] = value
        this.setState({ bike: updatedBike })
    }

    addBike = (e) => {
        e.preventDefault()
        axios.post('/api/v1/bikes/', {
            make: this.state.bike.make,
            model: this.state.bike.model,
            tire_size: this.state.bike.tire_size,
            tubeless: this.state.bike.tubeless,
            groupset: this.state.bike.groupset,
            weight: this.state.bike.weight,
            full_suspension: this.state.bike.full_suspension,
            dropper_post: this.state.bike.dropper_post,
            photo_url: this.state.bike.photo_url,
            trail: this.props.match.params.trailId,
        }).then(res => {
            const clonedTrail = { ...this.state.trail }
            clonedTrail.bikes.push(res.data)
            this.setState({ displayBikeForm: false, trail: clonedTrail })
        })
    }

    updateBike = (e, bike) => {
        e.preventDefault()
        axios.put(`/api/v1/bikes/${bike.id}/`, {
            make: this.state.bike.make,
            model: this.state.bike.model,
            tire_size: this.state.bike.tire_size,
            tubeless: this.state.bike.tubeless,
            groupset: this.state.bike.groupset,
            weight: this.state.bike.weight,
            full_suspension: this.state.bike.full_suspension,
            dropper_post: this.state.bike.dropper_post,
            photo_url: this.state.bike.photo_url,
            trail: this.props.match.params.trailId,
        }).then(res => {
            this.setState({ displayBikeForm: false, didTrailLoad: false })
            this.getTrail()
        })
    }

    deleteBike = (e, bikeId) => {
        e.preventDefault()
        axios.delete(`/api/v1/bikes/${bikeId}/`).then(res => {
            this.getTrail()
        })
    }

    toggleBikeAddForm = () => {
        this.setState((state, props) => {
            return ({ displayBikeForm: !state.displayBikeForm, isBikeAdd: true })
        })
    }

    toggleBikeUpdateForm = (bikeId) => {
        this.getSpecificBike(bikeId)
        this.setState((state, props) => {
            return ({ displayBikeForm: !state.displayBikeForm, isBikeAdd: false })
        })
    }

    render() {
        return (
            <TrailContainer>
                <div className="back-div">
                    <a href={`/parks/${this.state.trail.park}`}><i class="fas fa-arrow-left"></i></a>
                </div>
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
                                        <p className="subtitle is-6"><b><u>Length</u></b>: {this.state.trail.length} miles</p>
                                        <p className="subtitle is-6"><b><u>Max Elevation</u></b>: {this.state.trail.max_elv} feet</p>
                                        <p className="subtitle is-6"><b><u>Min Elevation</u></b>: {this.state.trail.min_elv} feet</p>
                                        <p className="subtitle is-6"><b><u>Location</u></b>: {this.state.trail.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <h2>Loading.....</h2>
                }
                {
                    this.state.didTrailLoad ?
                        <div className="bike-div">
                            <h1>Trail Bikes: <a onClick={this.toggleBikeAddForm}><i class="fas fa-plus"></i></a></h1>
                            <Bikes
                                addBike={this.addBike}
                                deleteBike={this.deleteBike}
                                updateBike={this.updateBike}
                                handleBikeChange={this.handleBikeChange}
                                bike={this.state.bike}
                                trail={this.state.trail}
                                isBikeAdd={this.state.isBikeAdd}
                                handleBooleanChange={this.handleBooleanChange}
                                displayBikeForm={this.state.displayBikeForm}
                                toggleBikeUpdateForm={this.toggleBikeUpdateForm}
                                isTrue={this.state.isTrue} />
                        </div>
                        :
                        <h2>Loading.....</h2>
                }
            </TrailContainer>
        )
    }
}
