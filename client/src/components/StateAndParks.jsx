import React, { Component } from 'react'
import { StateAndParksContainer } from './styled_components/StateAndParksStyles'

export default class StateAndParks extends Component {
    render() {
        return (
            <StateAndParksContainer>
                {
                    this.props.states.map(state => {
                        return (
                            <div className="tile is-ancestor">
                                <div className="tile is-8">
                                    <div className="tile is-parent">
                                        <article className="tile is-child notification background">
                                            <p className="title">{state.name}</p>
                                            {
                                                this.props.parks.map(park => {
                                                    return park.state == state.id ? (
                                                        <div>
                                                            <p className="subtitle">{park.name}</p>
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
                                    <div class="tile">
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
