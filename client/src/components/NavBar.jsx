import React, { Component } from 'react'
import { NavContainer } from './styled_components/NavBarStyles'
import 'bulma/css/bulma.css'

export default class NavBar extends Component {
    render() {
        return (
            <NavContainer>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navi navbar-item" href="/">
                            <span>radTrails</span>
                        </a>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item" href='/dashboard'>National Parks Search</a>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link">More</a>
                                <div class="navbar-dropdown">
                                    <a href="https://www.nationalparks.org/support" target="_blank" rel="noopener noreferrer" className="navbar-item">Support National Parks</a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a className="button is-light">Log in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </NavContainer >
        )
    }
}
