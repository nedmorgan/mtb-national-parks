import React, { Component } from 'react'
import BikesForm from './BikesForm'
import { BikesContainer } from './styled_components/BikeStyles'

export default class Bikes extends Component {
    render() {
        return (
            <BikesContainer>
                {
                    this.props.displayBikeForm ?
                        <BikesForm
                            addBike={this.props.addBike}
                            updateBike={this.props.updateBike}
                            handleBikeChange={this.props.handleBikeChange}
                            bike={this.props.bike}
                            isBikeAdd={this.props.isBikeAdd}
                            handleBooleanChange={this.props.handleBooleanChange}
                            displayBikeForm={this.props.displayBikeForm}
                            isTrue={this.props.isTrue} />
                        :
                        this.props.trail.bikes.map(bike => {
                            return (
                                <div className="bike-info">
                                    <h1>{bike.make}</h1>
                                    <a onClick={(e) => this.props.deleteBike(e, bike.id)}><i class="far fa-trash-alt"></i></a>
                                </div>

                            )
                        })
                }
            </BikesContainer>
        )
    }
}
