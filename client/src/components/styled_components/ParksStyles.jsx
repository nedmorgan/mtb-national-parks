import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const ParksContainer = styled.div`
width: 100%;
margin: 2vw;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
animation: .5s ${fade};

.card {
    margin: 2vw;
    height: auto !important;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#card-width {
    width: 25%;
}

footer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    bottom: 0;
}

p {
    font-family: 'Ubuntu', sans-serif;
}

span {
    font-family: 'Ubuntu Condensed', sans-serif;
}

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4em;

    #card-width {
        width: 70%;
    }
}
`