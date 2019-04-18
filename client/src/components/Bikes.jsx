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
                            deleteBike={this.props.deleteBike}
                            updateBike={this.props.updateBike}
                            handleBikeChange={this.props.handleBikeChange}
                            bike={this.props.bike}
                            isBikeAdd={this.props.isBikeAdd}
                            handleBooleanChange={this.props.handleBooleanChange}
                            displayBikeForm={this.props.displayBikeForm}
                            isTrue={this.props.isTrue} />
                        :
                        null
                    //         this.props.trail.bikes.map(bike => {
                    //             return (
                    //                 <div className="bike-info">
                    //                     <h1>{}</h1>
                    //                 </div>

                    //             )
                    // })
                }
            </BikesContainer>
        )
    }
}
