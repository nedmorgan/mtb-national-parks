import React, { Component } from 'react'
import { BikeFormContainer } from './styled_components/BikeFormStyles'

export default class BikeForm extends Component {
    render() {
        return (
            <BikeFormContainer>
                <form onSubmit={
                    this.props.isBikeAdd
                        ? (e) => this.props.addBike(e)
                        : (e) => this.props.updateBike(e, this.props.bike)
                }>
                    <div className="field">
                        <label className="label">Make</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                className="input"
                                type="text"
                                placeholder="Bike Make"
                                name="make"
                                value={this.props.bike.make}
                                onChange={this.props.handleBikeChange}
                                required>
                            </input>
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
                                name="model"
                                value={this.props.bike.model}
                                onChange={this.props.handleBikeChange}
                                required>
                            </input>
                            <span className="icon is-small is-left">
                                <i class="fas fa-bicycle"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Tire Size:</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Tire Size"
                                name="tire_size"
                                value={this.props.bike.tire_size}
                                onChange={this.props.handleBikeChange}
                                required>
                            </input>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control check-box">
                            <label class="checkbox">Tubeless: </label>
                            <input
                                type="checkbox"
                                name="tubeless"
                                className="boolean-box"
                                onChange={this.props.handleBikeChange}></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Groupset:</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                className="input"
                                type="text"
                                placeholder="SRAM GX Eagle"
                                name="groupset"
                                value={this.props.bike.groupset}
                                onChange={this.props.handleBikeChange}
                                required>
                            </input>
                            <span className="icon is-small is-left">
                                <i class="fas fa-cogs"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Weight:</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                className="input"
                                type="text"
                                placeholder="Enter weight in lbs"
                                name="weight"
                                value={this.props.bike.weight}
                                onChange={this.props.handleBikeChange}
                                required>
                            </input>
                            <span className="icon is-small is-left">
                                <i class="fas fa-weight"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control check-box">
                            <label class="checkbox">Full Suspension: </label>
                            <input
                                type="checkbox"
                                name="full_suspension"
                                className="boolean-box"
                                onChange={this.props.handleBikeChange}></input>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control check-box">
                            <label class="checkbox">Dropper Post: </label>
                            <input
                                type="checkbox"
                                name="dropper_post"
                                className="boolean-box"
                                onChange={this.props.handleBikeChange}></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Photo Link:</label>
                        <div className="control has-icons-left has-icons-right">
                            <input
                                className="input"
                                type="text"
                                placeholder="enter image url"
                                name="photo_url"
                                value={this.props.bike.photo_url}
                                onChange={this.props.handleBikeChange}
                            >
                            </input>
                            <span className="icon is-small is-left">
                                <i class="far fa-image"></i>
                            </span>
                        </div>
                    </div>
                    <div className="button-div">
                    {
                        this.props.isBikeAdd
                            ? <button class="button">Add Bike</button>
                            : <button class="button">Update Bike</button>
                    }
                    </div>
                </form>
            </BikeFormContainer >
        )
    }
}
