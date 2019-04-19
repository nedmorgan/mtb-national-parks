import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const SearchContainer = styled.div`
margin: 0 auto;
animation: .5s ${fade};
margin: 0 auto;
width: 100%;

form {
    width: 100%;
    text-align: center;
    margin: 0 auto;
}

.field {
    display: flex;
    justify-content: center;
}

.find-trail-div {
    margin-top: .5em;
}

.far {
    font-size: 1em;
    margin-right: 1em;
    margin-bottom: .75em;
    }

.find-trail:hover {
    cursor: pointer;
    background: rgba(200,200,200,.5);
    }

@media (max-width: 768px) {
    .far {
        font-size: 1em;
        margin-right: 0.25em;
        margin-bottom: .25em;
    }

    .find-trail-div {
        margin-top: 1vw;
    }
}
`