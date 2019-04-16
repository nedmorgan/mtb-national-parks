import React, { Component } from 'react'
import { SearchContainer } from './styled_components/StateSearchStyles'

export default class StateSearch extends Component {
    render() {
        return (
            <SearchContainer>
                <div class="field">
                    <div class="control has-icons-left">
                        <div class="select is-rounded">
                            <form onSubmit={(e) => this.props.findParks(e)}>
                                <select
                                    id="state"
                                    name="state"
                                    onChange={this.props.handleStateChange}>
                                    <option selected>Select State</option>
                                    {
                                        this.props.states.map(state => {
                                            return (
                                                <option value={state.abbreviation}>{state.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <button>Check out Parks!</button>
                            </form>
                        </div>
                        <div class="icon is-small is-left">
                            <i class="fas fa-flag-usa"></i>
                        </div>
                    </div>
                </div>
            </SearchContainer>
        )
    }
}
