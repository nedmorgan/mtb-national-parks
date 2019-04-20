import React, { Component } from 'react'
import { StateAndParksContainer } from './styled_components/StateAndParksStyles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import nationalParks from '../national-parks.json'

export default class StateAndParks extends Component {

    state = {
        displayNewParkList: false,
        selectedState: {},
        nationalParks: nationalParks,
        specificParks: {},
    }

    componentDidMount() {
        this.props.getParks()
    }

    hideNewParkListDisplay = () => {
        this.setState((state, props) => {
            return ({ displayNewParkList: false })
        })
    }

    showNewParkList = (selectedState) => {
        let nationalParks = { ...this.state.nationalParks }
        const specificStateParks = nationalParks.data.filter(park => park.states == selectedState.acronym)
        this.setState({ specificParks: specificStateParks, displayNewParkList: true, selectedState: selectedState })
    }

    addNewPark = (e, park) => {
        e.preventDefault()
        axios.post('/api/v1/parks/', {
            name: park.name,
            lat: park.lat,
            lng: park.lng,
            description: park.description,
            state: this.state.selectedState.id,
        }).then(res => {
            this.props.getParks()
        })
        this.setState({ displayNewParkList: false })
    }

    render() {
        return (
            <StateAndParksContainer>
                {
                    this.state.displayNewParkList ?
                        <div>
                            <div className="state-display-button-div">
                                <button onClick={this.hideNewParkListDisplay} className="button back-park-button">Back to State Dashboard</button>
                            </div>
                            <div className="state-park-container">
                                {
                                    this.state.specificParks.map(park => {
                                        return (
                                            <div className="card new-park-container" id="card-width">
                                                <div className="card-content">
                                                    <p className="park-name title">
                                                        {park.name}
                                                    </p>
                                                    <p className="park-des subtitle">
                                                        {park.designation}
                                                    </p>
                                                </div>
                                                <footer className="card-footer">
                                                    <p className="card-footer-item">
                                                        <span>
                                                            <a onClick={(e) => this.addNewPark(e, park)}>Add Park</a>
                                                        </span>
                                                    </p>
                                                    <p className="card-footer-item">
                                                        <span>
                                                            <a href={park.url} target="_blank" rel="noopener noreferrer">Explore Park</a>
                                                        </span>
                                                    </p>
                                                </footer>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        :
                        this.props.states.map(state => {
                            return (
                                <div className="main tile is-ancestor">
                                    <div className="tile is-10">
                                        <div className="tile is-parent">
                                            <article className="tile is-child notification background">
                                                <div className="new-park-button-div">
                                                    <button onClick={() => this.showNewParkList(state)} className="button new-park-button">Find New Parks!</button>
                                                </div>
                                                <p className="title">{state.name}<a className="remove-state" onClick={(e) => this.props.deleteState(e, state.id)}><i className="far fa-trash-alt"></i></a></p>
                                                {
                                                    this.props.parks.map(park => {
                                                        return park.state == state.id ? (
                                                            <div className="park-info">
                                                                <div className="park-title-div">
                                                                    <p className="sub-title"><Link to={{
                                                                        pathname: `/parks/${park.id}`
                                                                    }}>{park.name}</Link></p><a className="remove-state" onClick={(e) => this.props.deletePark(e, park.id)}><i className="far fa-trash-alt"></i></a>
                                                                </div>
                                                                <div className="content">
                                                                    <p className="description">{park.description}</p>
                                                                </div>
                                                            </div>
                                                        ) :
                                                            null
                                                    })
                                                }
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }
            </StateAndParksContainer>
        )
    }
}
