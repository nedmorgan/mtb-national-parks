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
        radius: '',
        sortLong: true,
    }

    componentDidMount() {
        this.getPark()
    }

    // Function to handle the change of the radius in trail search
    handleRadiusChange = (e) => {
        const updatedRadius = { ...this.state.radius }
        updatedRadius[e.target.name] = e.target.value
        this.setState({ radius: updatedRadius })
    }

    // Function to toggle the trail search form
    toggleTrailSearchForm = () => {
        this.setState((state, props) => {
            return ({ displayTrailSearchForm: !state.displayTrailSearchForm })
        })
    }

    // Function to get a specific park in the database
    getPark = () => {
        axios.get(`/api/v1/parks/${this.props.match.params.parkId}/`).then(res => {
            this.setState({ park: res.data, didParkLoad: true })
        })
    }

    // Toggle trail sort long
    toggleTrailSort = (e) => {
        this.setState((state, props) => {
            return ({ sortLong: !state.sortLong })
        })
        if (this.state.sortLong === true) {
            this.sortTrailShortToLong(e)
        } else {
            this.sortTrailLongToShort(e)
        }
    }

    // Sort the trail list by longest to shortest
    sortTrailLongToShort = (e) => {
        e.preventDefault()
        let trails = [...this.state.trails]
        trails.sort((a, b) => {
            return b.length - a.length
        })
        this.setState({ trails: trails })
    }

    // Sort the trail search by shortest to longest
    sortTrailShortToLong = (e) => {
        e.preventDefault()
        let trails = [...this.state.trails]
        trails.sort((a, b) => {
            return a.length - b.length
        })
        this.setState({ trails: trails })
    }

    // API call to get trails based on certain search criteria
    getTrails = (e) => {
        e.preventDefault()
        axios.get(`https://www.mtbproject.com/data/get-trails?lat=${this.state.park.lat}&lon=${this.state.park.lng}&maxDistance=${this.state.radius.distance}&key=${TRAIL_KEY}`).then(res => {
            let trails = res.data.trails
            trails.sort((a, b) => {
                return b.length - a.length
            })
            this.setState({ trails: trails, showTrailResults: true })
        })
    }

    // Function to add trail to the database
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
            const clonedPark = { ...this.state.park }
            clonedPark.trails.unshift(res.data)
            this.setState({ displayTrailSearchForm: false, park: clonedPark })
        })
    }

    // Function to remove trail from database
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
                    <a href='/dashboard'><i className="fas fa-arrow-left"></i></a>
                </div>
                {
                    this.state.didParkLoad ?
                        <div className="park-flex">
                            <div className="park-animation">
                                <div className="park-title-div">
                                    <h1 className="park-name">{this.state.park.name}</h1>
                                </div>
                                <p className="park-description">{this.state.park.description}</p>
                                <div className="trail-search-div">
                                    {
                                        this.state.displayTrailSearchForm ?
                                            <a className="button is-medium" onClick={this.toggleTrailSearchForm}>Hide Trail Search</a>
                                            :
                                            <a className="button is-medium" onClick={this.toggleTrailSearchForm}>Display Trail Search</a>
                                    }
                                </div>
                            </div>
                            {
                                this.state.displayTrailSearchForm ?
                                    <TrailSearch
                                        getTrails={this.getTrails}
                                        handleRadiusChange={this.handleRadiusChange}
                                        trails={this.state.trails}
                                        showTrailResults={this.state.showTrailResults}
                                        addTrail={this.addTrail}
                                        parkId={this.props.match.params.parkId}
                                        toggleTrailSort={this.toggleTrailSort} />
                                    :
                                    <div className="parent-trail-container">
                                        <h1 className="trail-title">Trails</h1>
                                        <div className="trail-container">
                                            {
                                                this.state.park.trails.map(trail => {
                                                    return (
                                                        <div className="card">
                                                            <div className="card-image">
                                                                <figure className="image is-4by3">
                                                                    <img src={trail.photo_url} alt={trail.name}></img>
                                                                </figure>
                                                            </div>
                                                            <div className="card-content">
                                                                <div className="media">
                                                                    <div className="media-content">
                                                                        <p className="title is-4"><Link
                                                                            to={{
                                                                                pathname: `/trails/${trail.id}`
                                                                            }}>{trail.name}</Link></p>
                                                                        <p className="subtitle is-6"><b>Length</b>: {trail.length} miles</p>
                                                                        <p className="subtitle is-6"><b>Location</b>: {trail.location}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="delete-div">
                                                                <button className="delete-button" onClick={(e) => this.deleteTrail(e, trail.id)} className="button is-danger">Remove Trail</button>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
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
