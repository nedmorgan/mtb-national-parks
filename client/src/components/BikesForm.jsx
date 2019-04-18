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
                                <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </div>
                        <p className="help is-success">This username is available</p>
                    </div>
                </form>
            </BikeFormContainer>
        )
    }
}
