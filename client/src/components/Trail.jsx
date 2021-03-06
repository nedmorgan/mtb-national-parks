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
        active: false,
    }

    componentDidMount() {
        this.getTrail()
    }

    // Function to find a specific trail in the database
    getTrail = () => {
        axios.get(`/api/v1/trails/${this.props.match.params.trailId}/`).then(res => {
            this.setState({ trail: res.data, didTrailLoad: true })
        })
    }

    // Function to get specific data about a bike from the database
    getSpecificBike = (bikeId) => {
        axios.get(`/api/v1/bikes/${bikeId}/`).then(res => {
            this.setState({ bike: res.data })
        })
    }

    // Function to handle the change to the bike form
    handleBikeChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const updatedBike = { ...this.state.bike }
        updatedBike[name] = value
        this.setState({ bike: updatedBike })
    }

    // Function to check if field is blank
    checkFields = () => {
        let bikeMake = this.state.bike.make
        let bikeModel = this.state.bike.model
        let bikeTire = this.state.bike.tire_size
        let bikeGroup = this.state.bike.groupset
        let bikeWeight = this.state.bike.weight
        if (bikeMake !== '' && bikeModel !== '' && bikeTire !== '' && bikeGroup !== '' && bikeWeight !== '') {
            this.setState({ active: true })
        } else {
            this.setState({ active: false })
            return
        }
    }

    // Function to add a bike to the database
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
            clonedTrail.bikes.unshift(res.data)
            this.setState({ displayBikeForm: false, trail: clonedTrail, bike: {} })
        })
    }

    // Function to update a bike in the database
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

    // Function to remove bike from database
    deleteBike = (e, bikeId) => {
        e.preventDefault()
        axios.delete(`/api/v1/bikes/${bikeId}/`).then(res => {
            this.getTrail()
        })
    }

    // Function to toggle the bike form and the function to add a bike to database
    toggleBikeAddForm = () => {
        this.setState((state, props) => {
            return ({ displayBikeForm: !state.displayBikeForm, isBikeAdd: true })
        })
    }

    // Function to toggle the bike form and activate funtion to update bike
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
                                        <p className="middle-row subtitle is-6"><b><u>Length</u></b>: {this.state.trail.length} miles</p>
                                        <p className="middle-row subtitle is-6"><b><u>Max Elevation</u></b>: {this.state.trail.max_elv} feet</p>
                                        <p className="middle-row subtitle is-6"><b><u>Min Elevation</u></b>: {this.state.trail.min_elv} feet</p>
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
                            <h1 className="bike-title"><u>Trail Bikes</u><a onClick={this.toggleBikeAddForm}><i class="add-bike fas fa-plus"></i></a></h1>
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
                                isTrue={this.state.isTrue}
                                active={this.state.active}
                                checkFields={this.checkFields} />
                        </div>
                        :
                        <h2>Loading.....</h2>
                }
            </TrailContainer>
        )
    }
}
