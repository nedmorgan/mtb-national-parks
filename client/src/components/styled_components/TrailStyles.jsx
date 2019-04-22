import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const TrailContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
animation: .5s ${fade};
margin: 0 auto;

.card {
    height: auto;
    width: 50%;
    margin-top: 3vw;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .7);
}

img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.bike-div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
}

.back-div {
    display: flex;
    width: 100%;
    justify-content: flex-start;
}

.middle-row {
    margin-bottom: 1em !important;
}

.title,
.bike-title {
    font-family: 'Ubuntu', sans-serif;
}

.bike-title {
    color: whitesmoke;
    font-size: 2em;
}

.add-bike {
    font-size: 1em;
    margin-left: .75em;
}

.subtitle {
    font-family: 'Ubuntu Condensed', sans-serif;
}

i {
    color: whitesmoke;
    font-size: 2em;
    margin-left: 2vw;
    margin-top: 1vw;
}

i:hover {
    color: #0095ff !important;
}

@media (max-width: 768px) {
    .add-bike {
        margin-left: .3em;
    }

    .card {
        width: 70%;
    }

    .middle-row {
        margin-bottom: .5em !important;
    }
}

`