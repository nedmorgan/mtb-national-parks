import React, { Component } from 'react'
import { SearchContainer } from './styled_components/TrailSearchStyles'
import Trails from './Trails'

export default class TrailSearch extends Component {
    render() {
        return (
            <SearchContainer>
                <div class="field">
                    <div class="control has-icons-left">
                        <div class="select is-rounded">
                            <form onSubmit={(e) => this.props.getTrails(e)}>
                                <select
                                    id="distance"
                                    name="distance"
                                    onChange={this.props.handleRadiusChange}>
                                    <option defaultValue>Select Radius</option>
                                    <option value="25">25 miles</option>
                                    <option value="50">50 miles</option>
                                    <option value="100">100 miles</option>
                                    <option value="250">250 miles</option>
                                    <option value="500">500 miles</option>
                                </select>
                                <button>Find Trail!</button>
                            </form>
                        </div>
                        <div class="icon is-small is-left">
                            <i class="far fa-map"></i>
                        </div>
                    </div>
                </div>
                {
                    this.props.showTrailResults ?
                        <Trails
                            trails={this.props.trails} />
                        :
                        null
                }

            </SearchContainer>
        )
    }
}
