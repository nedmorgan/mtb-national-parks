import React, { Component } from 'react'
import axios from 'axios';

export default class Park extends Component {

    state = {
        park: {}
    }

    componentDidMount() {
        this.getPark()
    }

    getPark = () => {
        axios.get(`/api/v1/parks/${this.props.match.params.parkId}`).then(res => {
            this.setState({ park: res.data })
        })
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}
