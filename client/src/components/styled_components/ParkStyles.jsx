import styled from 'styled-components'

export const ParkContainer = styled.div`
color: whitesmoke;

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

.trail-search-div {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1.5vw;
    margin-bottom: 2vw;
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
`