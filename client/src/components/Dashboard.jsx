import React, { Component } from 'react'
import axios from 'axios';
import { DashboardContainer } from './styled_components/DashBoardStyles'
import StateAndParks from './StateAndParks'

export default class Dashboard extends Component {

    state = {
        states: [],
        parks: [],
        isDashboardDisplayed: false,
    }

    componentDidMount() {
        this.getStates()
        this.getParks()
    }

    // Function to retrieve states from database
    getStates = () => {
        axios.get('/api/v1/states/').then(res => {
            this.setState({ states: res.data })
        }).catch(err => {
            console.log('Error loading states in dashboard: ', err)
        })
    }

    // Function to retrieve parks from database
    getParks = () => {
        axios.get('/api/v1/parks/').then(res => {
            this.setState({ parks: res.data, isDashboardDisplayed: true })
        }).catch(err => {
            console.log('Error loading states in dashboard: ', err)
        })
    }

    // Function to remove state from database
    deleteState = (e, stateId) => {
        e.preventDefault()
        axios.delete(`/api/v1/states/${stateId}/`).then(res => {
            this.getStates()
            this.getParks()
        })
    }

    // Function to remove park from database
    deletePark = (e, parkId) => {
        e.preventDefault()
        axios.delete(`/api/v1/parks/${parkId}/`).then(res => {
            this.getStates()
            this.getParks()
        })
    }

    render() {
        return (
            <DashboardContainer>
                {
                    this.state.isDashboardDisplayed ?
                        <StateAndParks
                            getParks={this.getParks}
                            states={this.state.states}
                            parks={this.state.parks}
                            deleteState={this.deleteState}
                            deletePark={this.deletePark} />
                        :
                        <h2>Loading....</h2>
                }
            </DashboardContainer>
        )
    }
}
