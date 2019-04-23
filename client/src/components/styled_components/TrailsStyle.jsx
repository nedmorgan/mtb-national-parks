import styled from 'styled-components'

export const TrailsContainer = styled.div`
margin-top: 5em !important;
display: flex;
flex-wrap: wrap;
width: 75%;
margin: 0 auto;
padding-bottom: 4em;
justify-content: space-around;

.card {
    margin-top: 1.5vw;
    margin-bottom: 1.5vw;
    background: rgba(200,200,200,.5);
    border-radius: 5px;
}

img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

p {
    color: whitesmoke;
}

.title {
    font-family: 'Ubuntu', sans-serif;
}

.subtitle {
    font-family: 'Ubuntu Condensed', sans-serif;
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
    display: flex;
    justify-content: space-evenly;
    margin-top: 1vw;
}

.find-trail:hover {
    cursor: pointer;
    background: rgba(200,200,200,.5);
}

.media {
    flex-direction: column;
    align-items: center;
    }

@media (max-width: 768px) {
    margin-top: 4em;
    flex-direction: column;
    align-items: center;

    .add-trail-div {
        margin-top: .5em;
    }

    p {
        margin-bottom: .5rem !important;
    }

    #trail-name {
        margin-top: .5em;
    }

    .title {
        margin-bottom: 0;
        font-size: 1.5em;
    }

    .subtitle {
        padding-top: 1em;
        margin: 0;
    }
}
`