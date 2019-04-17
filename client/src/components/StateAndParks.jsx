import React, { Component } from 'react'
import { StateAndParksContainer } from './styled_components/StateAndParksStyles'

export default class StateAndParks extends Component {
    render() {
        return (
            <StateAndParksContainer>
                {
                    this.props.states.map(state => {
                        return (
                            <div className="main tile is-ancestor">
                                <div className="tile is-10">
                                    <div className="tile is-parent">
                                        <article className="tile is-child notification background">
                                            <p className="title">{state.name}<a className="remove-state" onClick={(e) => this.props.deleteState(e, state.id)}><i class="far fa-trash-alt"></i></a></p>
                                            {
                                                this.props.parks.map(park => {
                                                    return park.state == state.id ? (
                                                        <div className="park-info">
                                                            <p className="subtitle">{park.name}<a className="remove-state" onClick={(e) => this.props.deletePark(e, park.id)}><i class="far fa-trash-alt"></i></a></p>
                                                            <div className="content">
                                                                <p>{park.description}</p>
                                                            </div>
                                                        </div>
                                                    ) :
                                                        null
                                                })
                                            }
                                        </article>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </StateAndParksContainer>
        )
    }
}
