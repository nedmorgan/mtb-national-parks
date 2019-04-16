import React, { Component } from 'react'
import { HomeContainer } from './styled_components/HomeStyles'
import axios from 'axios'
import StateSearch from './StateSearch'
import Parks from './Parks'

export default class Home extends Component {

    state = {
        states: {},
        isParkOptionDisplayed: false,
        hasHomeLoaded: false,
        displayParks: false,
        selectedState: {
            state: ''
        },
        parks: [],
        radius: {
            distance: ''
        },
    }

    componentDidMount() {
        this.getStates()
    }

    getStates = () => {
        axios.get('./states.json').then(res => {
            this.setState({ states: res.data, hasHomeLoaded: true })
        })
    }

    handleStateChange = (e) => {
        const updatedState = { ...this.state.selectedState }
        updatedState[e.target.name] = e.target.value
        this.setState({ selectedState: updatedState })
    }

    handleRadiusChange = (e) => {
        const updatedRadius = { ...this.state.radius }
        updatedRadius[e.target.name] = e.target.value
        this.setState({ radius: updatedRadius })
    }

    findParks = (e) => {
        let state = this.state.selectedState.state
        e.preventDefault()
        axios.get('./national-parks.json').then(res => {
            const specificStateParks = res.data.data.filter(park => park.states == state)
            this.setState({ parks: specificStateParks })
        })
        this.toggleParksDisplay()
    }

    toggleParksDisplay = () => {
        this.setState((state, props) => {
            return ({ displayParks: true })
        })
    }

    addPark = (e) => {
        e.preventDefault()

        this.setState({ isParkOptionDisplayed: false })
    }

    render() {
        return (
            <HomeContainer>
                <h1>Select a state to find some amazing national parks!</h1>
                {
                    this.state.hasHomeLoaded ?
                        <StateSearch
                            states={this.state.states}
                            handleStateChange={this.handleStateChange}
                            findParks={this.findParks} />
                        :
                        <h2>Loading....</h2>
                }
                {
                    this.state.displayParks ?
                        <Parks
                            parks={this.state.parks} />
                        :
                        null
                }
            </HomeContainer>
        )
    }
}
