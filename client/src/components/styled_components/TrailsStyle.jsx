import styled from 'styled-components'

export const TrailsContainer = styled.div`
margin-top: 3vw;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

.card {
    margin-top: 1.5vw;
    margin-bottom: 1.5vw;
    background: rgba(200,200,200,.5);
}

p {
    color: whitesmoke;
}

figure {
    height: auto;
    width: auto;
    margin: 0 auto;
}

img {
    height: auto;
    width: auto;
}

.add-trail-div {
    width: 100%;
}

.media {
    flex-direction: column;
    align-items: center;
    }

@media (max-width: 768px) {
    margin-top: 4em;

    .add-trail-div {
        margin-top: .5em;
    }

    p {
        margin-bottom: .5rem !important;
    }

    #trail-name {
        margin-top: .5em;
    }
}
`