import React, { Component } from 'react'
import { BikeFormContainer } from './styled_components/BikeFormStyles'

export default class BikeForm extends Component {
    render() {
        return (
            <BikeFormContainer>
                <form action="">
                    <div className="field">
                        <label className="label">Make</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                className="input"
                                type="text"
                                placeholder="Bike Model"
                                value="bulma"
                                required
                            ></input>
                            <span className="icon is-small is-left">
                                <i class="fas fa-bicycle"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Model</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                className="input"
                                type="text"
                                placeholder="Bike Model"
                                value="bulma"
                                required
                            ></input>
                            <span className="icon is-small is-left">
                                <i class="fas fa-bicycle"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </BikeFormContainer>
        )
    }
}
