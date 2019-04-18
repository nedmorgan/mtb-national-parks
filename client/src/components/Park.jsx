import React, { Component } from 'react'
import axios from 'axios'
import { ParkContainer } from './styled_components/ParkStyles'
import { Link } from 'react-router-dom'
import TrailSearch from './TrailSearch'
const TRAIL_KEY = process.env.REACT_APP_KEY

export default class Park extends Component {

    state = {
        park: {},
        didParkLoad: false,
        displayTrailForm: false,
        displayTrailSearchForm: false,
        showTrailResults: false,
        trails: [],
        radius: ''
    }

    componentDidMount() {
        this.getPark()
        console.log(TRAIL_KEY)
    }

    handleRadiusChange = (e) => {
        const updatedRadius = { ...this.state.radius }
        updatedRadius[e.target.name] = e.target.value
        this.setState({ radius: updatedRadius })
    }

    toggleTrailSearchForm = () => {
        this.setState((state, props) => {
            return ({ displayTrailSearchForm: !state.displayTrailSearchForm })
        })
    }

    getPark = () => {
        axios.get(`/api/v1/parks/${this.props.match.params.parkId}/`).then(res => {
            this.setState({ park: res.data, didParkLoad: true })
        })
    }

    getTrails = (e) => {
        e.preventDefault()
        axios.get(`https://www.mtbproject.com/data/get-trails?lat=${this.state.park.lat}&lon=${this.state.park.lng}&maxDistance=${this.state.radius.distance}&key=${TRAIL_KEY}`).then(res => {
            this.setState({ trails: res.data.trails, showTrailResults: true })
        })
    }

    addTrail = (e, trail, id) => {
        e.preventDefault()
        axios.post('/api/v1/trails/', {
            name: trail.name,
            location: trail.location,
            site_url: trail.url,
            photo_url: trail.imgSmallMed,
            length: trail.length,
            max_elv: trail.high,
            min_elv: trail.low,
            park: id,
        }).then(res => {
            this.setState({ displayTrailSearchForm: false, didParkLoad: false })
            this.getPark()
        })
    }

    deleteTrail = (e, trailId) => {
        e.preventDefault()
        axios.delete(`/api/v1/trails/${trailId}/`).then(res => {
            this.getPark()
        })
    }

    render() {
        return (
            <ParkContainer>
                <div className="back-div">
                    <a href='/dashboard'><i class="fas fa-arrow-left"></i></a>
                </div>
                {
                    this.state.didParkLoad ?
                        <div className="park-flex">
                            <h1>{this.state.park.name}</h1>
                            <p>{this.state.park.description}</p>
                            <div className="trail-search-div">
                                {
                                    this.state.displayTrailSearchForm ?
                                        <a class="button is-medium" onClick={this.toggleTrailSearchForm}>Hide Trail Search</a>
                                        :
                                        <a class="button is-medium" onClick={this.toggleTrailSearchForm}>Display Trail Search</a>
                                }
                            </div>
                            {
                                this.state.displayTrailSearchForm ?
                                    <TrailSearch
                                        getTrails={this.getTrails}
                                        handleRadiusChange={this.handleRadiusChange}
                                        trails={this.state.trails}
                                        showTrailResults={this.state.showTrailResults}
                                        addTrail={this.addTrail}
                                        parkId={this.props.match.params.parkId} />
                                    :
                                    <div>
                                        <h1 className="trail-title">Trails</h1>
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
                                                                    <p className="title is-4"><Link to={{
                                                                        pathname: `/trails/${trail.id}`
                                                                    }}>{trail.name}</Link></p>
                                                                    <p className="subtitle is-6">Length: {trail.length} miles</p>
                                                                    <p className="subtitle is-6">Location: {trail.location}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="delete-div">
                                                            <button className="delete-button" onClick={(e) => this.deleteTrail(e, trail.id)} class="button is-danger">Remove Trail</button>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            }
                        </div>
                        :
                        <h2>Loading.....</h2>
                }
            </ParkContainer>
        )
    }
}
