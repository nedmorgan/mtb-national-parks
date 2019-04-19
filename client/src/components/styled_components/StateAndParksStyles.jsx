import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const StateAndParksContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
flex-wrap: wrap !important;
height: auto;
margin-top: 3vw;
width: 100%;
padding-bottom: 7vw;
animation: .5s ${fade};

.main {
    width: 75%;
}

.background {
    background: rgba(200,200,200,.5);
}

.subtitle:hover {
    cursor: pointer;
}

.is-parent {
    width: 100%;
}

.title {
    font-family: 'Ubuntu', sans-serif;
}

.park-title-div {
    display: flex;
    align-items: center;
    margin-top: .5em;
    margin-bottom: .5em;
}

.subtitle,
.description {
    font-family: 'Ubuntu Condensed', sans-serif;
}

.sub-title {
    margin-top: .75vw;
    margin: 0;
}

a {
    font-size: 1.25em;
}

.sub-title:hover {
    color: #0095ff !important;
    cursor: pointer;
}


p {
    color: whitesmoke !important;
}

.park-info {
    margin-top: 1.5vw;
    border-top: 2px solid whitesmoke;
}

.remove-state {
    margin-left: 1vw;
}

i {
    color: whitesmoke;
}

i:hover {
    color: #0095ff;
    cursor: pointer;
}
`