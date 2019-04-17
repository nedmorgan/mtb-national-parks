import React, { Component } from 'react'
import { ParksContainer } from './styled_components/ParksStyles'

export default class Parks extends Component {

    render() {
        return (
            <ParksContainer>
                {
                    this.props.parks.map(park => {
                        return (
                            <div class="card">
                                <div class="card-content">
                                    <p class="title">
                                        {park.name}
                                    </p>
                                    <p class="subtitle">
                                        {park.designation}
                                    </p>
                                </div>
                                <footer class="card-footer">
                                    <p class="card-footer-item">
                                        <span>
                                            <a onClick={(e) => this.props.addPark(e, park)}>Add Park</a>
                                        </span>
                                    </p>
                                    <p class="card-footer-item">
                                        <span>
                                            Visit <a href={park.url}>Park</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>
                        )
                    })
                }
            </ParksContainer>
        )
    }
}
