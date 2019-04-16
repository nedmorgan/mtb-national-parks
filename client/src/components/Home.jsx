import React, { Component } from 'react'
import { HomeContainer } from './styled_components/HomeStyles'
import axios from 'axios'

export default class Home extends Component {

    state = {
        states: {},
        isStateOptionDisplayed: true,
        isParkOptionDisplayed: false,
        hasHomeLoaded: false,
    }

    componentDidMount() {
        this.getStates()
    }

    getStates = () => {
        axios.get('./states.json').then(res => {
            this.setState({ states: res.data, hasHomeLoaded: true })
        })
    }

    render() {
        return (
            <HomeContainer>
                <h1>Select a state to find some amazing national parks!</h1>
                {
                    this.state.hasHomeLoaded ?
                        <div class="field">
                            <div class="control has-icons-left">
                                <div class="select is-rounded">
                                    <select>
                                        <option selected>Select State</option>
                                        {
                                            this.state.states.map(state => {
                                                return (
                                                    <option value={state.abbreviation}>{state.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div class="icon is-small is-left">
                                    <i class="fas fa-flag-usa"></i>
                                </div>
                            </div>
                        </div>
                        :
                        <h2>Loading....</h2>
                }
            </HomeContainer>
        )
    }
}
