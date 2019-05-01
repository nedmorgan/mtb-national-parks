import React, { Component } from 'react'
import { SortTrailContainer } from './styled_components/SortTrailStyles'

export default class SortTrail extends Component {
    render() {
        return (
            <SortTrailContainer>
                <div className="field">
                    <div className="control">
                        <div className="select is-rounded">
                            <select
                                id="length"
                                name="length"
                                onChange={this.props.sortLong
                                    ? (e) => this.props.sortTrailLongToShort(e)
                                    : (e) => this.props.sortTrailShortToLong(e)}>
                                <option defaultValue>Sort Trails</option>
                                <option>Length: Longest to Shortest</option>
                                <option>Length: Shortest to Longest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </SortTrailContainer>
        )
    }
}
