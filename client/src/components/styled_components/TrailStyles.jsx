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
`