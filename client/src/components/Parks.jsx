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
                                        {park.fullName}
                                    </p>
                                    <p class="subtitle">
                                        {park.designation}
                                    </p>
                                </div>
                                <footer class="card-footer">
                                    <p class="card-footer-item">
                                        <span>
                                            Add <a href="https://twitter.com/codinghorror/status/506010907021828096">Park</a>
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
