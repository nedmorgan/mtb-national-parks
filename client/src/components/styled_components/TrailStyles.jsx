import styled from 'styled-components'

export const TrailContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.card {
    height: auto;
    width: 50vw;
    margin-top: 3vw;
    border-radius: 5px;
}

img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.bike-div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.back-div {
    display: flex;
    width: 100%;
    justify-content: flex-start;
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
`