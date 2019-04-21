import React, { Component } from 'react'
import { ParksContainer } from './styled_components/ParksStyles'

export default class Parks extends Component {

    render() {
        return (
            <ParksContainer>
                {
                    this.props.parks.map(park => {
                        return (
                            <div className="card new-park-container" id="card-width">
                                <div className="card-content">
                                    <p className="park-name title">
                                        {park.name}
                                    </p>
                                    <p className="park-des subtitle">
                                        {park.designation}
                                    </p>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item">
                                        <span>
                                            <a onClick={(e) => this.props.addPark(e, park)}>Add Park</a>
                                        </span>
                                    </p>
                                    <p className="card-footer-item">
                                        <span>
                                            <a href={park.url} target="_blank" rel="noopener noreferrer">Explore Park</a>
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
