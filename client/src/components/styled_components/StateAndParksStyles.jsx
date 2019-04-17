import styled from 'styled-components'

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

.main {
    width: 75%;
}

.background {
    background: rgba(200,200,200,.5);
}

.is-parent {
    width: 100%;
}

.subtitle {
    margin-top: .75vw;
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

i:hover {
    color: #0095ff;
    cursor: pointer;
}
`