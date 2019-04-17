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

    getStates = () => {
        axios.get('/api/v1/states/').then(res => {
            this.setState({ states: res.data })
        }).catch(err => {
            console.log('Error loading states in dashboard: ', err)
        })
    }

    getParks = () => {
        axios.get('/api/v1/parks/').then(res => {
            this.setState({ parks: res.data, isDashboardDisplayed: true })
        }).catch(err => {
            console.log('Error loading states in dashboard: ', err)
        })
    }

    render() {
        return (
            <DashboardContainer>
                {
                    this.state.isDashboardDisplayed ?
                        <StateAndParks
                            states={this.state.states}
                            parks={this.state.parks} />
                        :
                        <h2>Loading....</h2>
                }
            </DashboardContainer>
        )
    }
}
