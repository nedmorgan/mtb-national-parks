import React, { Component } from 'react'
import { NavContainer } from './styled_components/NavBarStyles'
import 'bulma/css/bulma.css'

export default class NavBar extends Component {
    render() {
        return (
            <NavContainer>
                <nav>
                    <div className="logo-div">
                        <a className="navi navbar-item" href="/">
                            <span>radTrails</span>
                        </a>
                    </div>
                    <div className="link-div">
                        <a href="/dashboard" className="navbar-item navLink">Dashboard</a>
                    </div>
                    <div className="link-div">
                        <a href="https://www.nationalparks.org/support" target="_blank" rel="noopener noreferrer" className="navbar-item navLink"><i className="fas fa-tree"></i> Support National Parks</a>
                    </div>
                </nav>
            </NavContainer >
        )
    }
}
