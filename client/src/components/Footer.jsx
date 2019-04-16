import React, { Component } from 'react'
import { FooterContainer } from './styled_components/FooterStyles'

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <footer className="bottom">
                    <span>© 2019 Copyright:</span>
                    <a href="https://nedmorgan.github.io/" target="_blank" rel="noopener noreferrer"> Ned Morgan</a>
                </footer>
            </FooterContainer>
        )
    }
}
