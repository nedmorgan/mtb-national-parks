import React, { Component } from 'react'
import BikesForm from './BikesForm'
import { BikesContainer } from './styled_components/BikesStyles'

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
                            isTrue={this.props.isTrue}
                            errorBorder={this.props.errorBorder}
                            active={this.props.active} />
                        :
                        this.props.trail.bikes.map(bike => {
                            return (
                                <div id="bike-card" className="card">
                                    <div className="card-image">
                                        <figure class="image is-4by3">
                                            <img src={bike.photo_url} alt={bike.model}></img>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <p id="bike-title" className="title is-4">{bike.make}<a onClick={() => this.props.toggleBikeUpdateForm(bike.id)}><i id="bike-edit-icon" className="far fa-edit"></i></a></p>
                                                <p className="subtitle is-6"><b><u>Model</u></b>: {bike.model}</p>
                                                <p className="subtitle is-6"><b><u>Tire Size</u></b>: {bike.tire_size}</p>
                                                <p className="subtitle is-6"><b><u>Groupset</u></b>: {bike.groupset}</p>
                                                <p className="subtitle is-6"><b><u>Weight</u></b>: {bike.weight} lbs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="trash-div">
                                        <a onClick={(e) => this.props.deleteBike(e, bike.id)}><i id="bike-trash-icon" className="far fa-trash-alt"></i></a>
                                    </div>
                                </div>

                            )
                        })
                }
            </BikesContainer>
        )
    }
}
