import styled, { keyframes } from 'styled-components'
import { fadeIn, fadeInDown } from 'react-animations'

export const fade = keyframes`${fadeIn}`
export const fadeDown = keyframes`${fadeInDown}`

export const ParkContainer = styled.div`
color: whitesmoke;

.back-div {
    display: flex;
    width: 100%;
    justify-content: flex-start;
}

.park-name {
    font-size: 3em;
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
    font-family: 'Ubuntu', sans-serif;
}

.park-description {
    font-family: 'Ubuntu Condensed', sans-serif;
    font-size: 1.5em;
}

.park-title-div {
    width: 100%;
}

.button {
    font-family: 'Ubuntu Condensed', sans-serif;
}

.button:hover {
     background: rgba(200,200,200,.5);
     cursor: pointer;
}

i {
    color: whitesmoke;
    font-size: 2em;
    margin-left: 2vw;
    margin-top: 1vw;
}

i:hover {
    color: #0095ff;
}

.trail-search-div {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1.5vw;
    margin-bottom: 2vw;
}

.park-animation {
    animation: .6s ${fadeDown};
}

.parent-trail-container {
    width: 100%;
}

.trail-container {
    display: flex;
    flex-wrap: wrap !important;
    margin: 0 auto;
    animation: .5s ${fade};
    width: 100%;
    justify-content: space-around;
    margin-top: 1.5em;
}

.park-flex {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    padding-bottom: 2.5em;
}

.trail-title {
    font-size: 2em;
    text-decoration: underline;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
}

.card {
    background-color: rgba(255, 255, 255, .7);
}

.title {
    font-family: 'Ubuntu', sans-serif;
}

.subtitle {
    font-family: 'Ubuntu Condensed', sans-serif;
}

.card {
    margin-bottom: 1em;
    border-radius: 5px;
}

img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.delete-div {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 2vw;
}

@media (max-width: 768px) {
    padding-bottom: 1em;

    .park-name {
        font-size: 1.7em;
    }

    .trail-container {
        margin-top: .5em;
    }

    .park-description {
        font-size: 1em;
    }
}
`