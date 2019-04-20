import React, { Component } from 'react'
import { StateAndParksContainer } from './styled_components/StateAndParksStyles'
import { Link } from 'react-router-dom'

export default class StateAndParks extends Component {

    state = {
        displayNewParkList: false,
        selectedState: {},
    }

    componentDidMount() {
        this.props.getParks()
    }

    hideNewParkListDisplay = () => {
        this.setState((state, props) => {
            return ({ displayNewParkList: false })
        })
    }

    showNewParkList = (selectedState) => {
        this.setState((state, props) => {
            return ({ displayNewParkList: true, selectedState: selectedState })
        })
    }

    render() {
        return (
            <StateAndParksContainer>
                {
                    this.state.displayNewParkList ?
                        <div>
                            <h1>New Park List</h1>
                            <div className="state-display-button-div">
                                <button onClick={this.hideNewParkListDisplay} className="button new-park-button">Back to State Dashboard</button>
                            </div>
                        </div>
                        :
                        this.props.states.map(state => {
                            return (
                                <div className="main tile is-ancestor">
                                    <div className="tile is-10">
                                        <div className="tile is-parent">
                                            <article className="tile is-child notification background">
                                                <div className="new-park-button-div">
                                                    <button onClick={() => this.showNewParkList(state)} className="button new-park-button">Find New Parks!</button>
                                                </div>
                                                <p className="title">{state.name}<a className="remove-state" onClick={(e) => this.props.deleteState(e, state.id)}><i className="far fa-trash-alt"></i></a></p>
                                                {
                                                    this.props.parks.map(park => {
                                                        return park.state == state.id ? (
                                                            <div className="park-info">
                                                                <div className="park-title-div">
                                                                    <p className="sub-title"><Link to={{
                                                                        pathname: `/parks/${park.id}`
                                                                    }}>{park.name}</Link></p><a className="remove-state" onClick={(e) => this.props.deletePark(e, park.id)}><i className="far fa-trash-alt"></i></a>
                                                                </div>
                                                                <div className="content">
                                                                    <p className="description">{park.description}</p>
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
