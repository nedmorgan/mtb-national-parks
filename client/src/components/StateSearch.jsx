import React, { Component } from 'react'
import { SearchContainer } from './styled_components/StateSearchStyles'

export default class StateSearch extends Component {
    render() {
        return (
            <SearchContainer>
                <div className="field">
                    <div className="control has-icons-left">
                        <div className="select is-rounded">
                            <form onSubmit={(e) => this.props.findParks(e)}>
                                <select
                                    id="state"
                                    name="acronym"
                                    onChange={this.props.handleStateChange}>
                                    <option defaultValue>Select State</option>
                                    {
                                        this.props.states.map(state => {
                                            return (
                                                <option value={state.abbreviation}>{state.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <button>Check out Parks!</button>
                                {
                                    this.props.displayParks ?
                                        <span>
                                            {
                                                this.props.stateAdded
                                                    ? <a className="add-state-button">Added</a>
                                                    : <a className="add-state-button" onClick={(e) => this.props.addState(e)}>Add State</a>
                                            }
                                        </span>
                                        :
                                        null
                                }
                            </form>
                        </div>
                        <div className="icon is-small is-left">
                            <i className="fas fa-flag-usa"></i>
                        </div>
                    </div>
                </div>
            </SearchContainer>
        )
    }
}
