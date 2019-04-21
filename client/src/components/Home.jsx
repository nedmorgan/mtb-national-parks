import React, { Component } from 'react'
import { HomeContainer } from './styled_components/HomeStyles'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import StateSearch from './StateSearch'
import Parks from './Parks'
import states from '../states.json'
import nationalParks from '../national-parks.json'

export default class Home extends Component {

    state = {
        states: states,
        isParkOptionDisplayed: false,
        hasHomeLoaded: true,
        displayParks: false,
        redirectToDashboard: false,
        selectedState: {
            acronym: '',
        },
        parks: [],
        stateName: {
            abbreviation: '',
            name: '',
        },
        postedState: {},
        nationalParks: nationalParks,
        stateAdded: false,
        currentStates: {},
    }

    componentDidMount() {
        this.getCurrentStates()
    }

    handleStateChange = (e) => {
        const updatedState = { ...this.state.selectedState }
        updatedState[e.target.name] = e.target.value
        this.setState({ selectedState: updatedState })
    }

    findParks = (e) => {
        let state = this.state.selectedState.acronym
        e.preventDefault()
        let nationalParks = { ...this.state.nationalParks }
        const specificStateParks = nationalParks.data.filter(park => park.states == state)
        this.setState({ parks: specificStateParks })
        let stateName = this.state.states.filter(state => state.abbreviation == this.state.selectedState.acronym)
        this.setState({ stateName: stateName[0], stateAdded: false })
        this.checkStates()
        this.toggleParksDisplay()
    }

    checkStates = () => {
        let savedStates = [...this.state.currentStates]
        let hasStatePostedAlready = savedStates.some(state => state.acronym == this.state.selectedState.acronym)
        if (hasStatePostedAlready == true) {
            this.setState({ stateAdded: true })
        }
        let stateInDatabase = savedStates.filter(state => state.acronym == this.state.selectedState.acronym)
        this.setState({ postedState: stateInDatabase })
    }

    toggleParksDisplay = () => {
        this.setState((state, props) => {
            return ({ displayParks: true })
        })
    }

    getCurrentStates = () => {
        axios.get('/api/v1/states/').then(res => {
            this.setState({ currentStates: res.data })
        })
    }

    addState = (e) => {
        e.preventDefault()
        axios.post('/api/v1/states/', {
            acronym: this.state.stateName.abbreviation,
            name: this.state.stateName.name,
        }).then(res => {
            axios.get('/api/v1/states/').then(res => {
                let statePosted = res.data.filter(state => state.acronym == this.state.selectedState.acronym)
                this.setState({ postedState: statePosted, stateAdded: true })
            })
        }).catch(err => {
            console.log('Error: ', err)
        })
    }

    addPark = (e, park) => {
        e.preventDefault()
        axios.post('/api/v1/parks/', {
            name: park.name,
            lat: park.lat,
            lng: park.lng,
            description: park.description,
            state: this.state.postedState[0].id,
        })
        this.setState({ displayParks: false, redirectToDashboard: true })
    }

    render() {
        if (this.state.redirectToDashboard) {
            return (<Redirect to={`/dashboard`} />)
        }
        return (
            <HomeContainer>
                <h1>Select a state to find some amazing national parks!</h1>
                {
                    this.state.hasHomeLoaded ?
                        <StateSearch
                            states={this.state.states}
                            handleStateChange={this.handleStateChange}
                            findParks={this.findParks}
                            addState={this.addState}
                            displayParks={this.state.displayParks}
                            stateAdded={this.state.stateAdded} />
                        :
                        <h2>Loading....</h2>
                }
                {
                    this.state.displayParks ?
                        <Parks
                            parks={this.state.parks}
                            addPark={this.addPark} />
                        :
                        null
                }
            </HomeContainer>
        )
    }
}
