import React, { Component } from 'react'
import { SearchContainer } from './styled_components/TrailSearchStyles'
import Trails from './Trails'

export default class TrailSearch extends Component {
    render() {
        return (
            <SearchContainer>
                <div className="field">
                    <div className="control has-icons-left">
                        <div className="select is-rounded">
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
                                <div className="find-trail-div">
                                    <button className="find-trail button is-normal">Find Trail!</button>
                                </div>
                            </form>
                        </div>
                        <div className="icon is-small is-left">
                            <i className="far fa-map"></i>
                        </div>
                    </div>
                </div>
                {
                    this.props.showTrailResults ?
                        <Trails
                            trails={this.props.trails}
                            addTrail={this.props.addTrail}
                            parkId={this.props.parkId} 
                            sortTrailLongToShort={this.props.sortTrailLongToShort}
                            sortTrailShortToLong={this.props.sortTrailShortToLong}
                            sortLong={this.props.sortLong}/>
                        :
                        null
                }

            </SearchContainer>
        )
    }
}
