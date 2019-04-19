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
}

.park-title-div {
    width: 100%;
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

.trail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    animation: .5s ${fade};
}

.park-flex {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
}

.trail-title {
    font-size: 2em;
    text-decoration: underline;
    text-align: center;
}

.card {
    margin-bottom: 8vw;
}

.delete-div {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 2vw;
}

@media (max-width: 768px) {
    padding-bottom: 3em;

    .park-title {
        font-size: 2em;
    }
}
`