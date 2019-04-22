import styled from 'styled-components'

export const BikesContainer = styled.div`
width: 75%;
margin-top: .5em;
margin-bottom: 4em;
display: flex;
justify-content: space-around;
flex-wrap: wrap;

#bike-card {
    width: 25%;
}

#bike-title {
    text-decoration: underline;
}

.card {
    background-color: rgba(255, 255, 255, .7);
}

#bike-edit-icon {
    font-size: 1em;
    color: black;
}

.subtitle {
    margin-bottom: .5em !important;
}

.card-content {
    padding-bottom: 0;
}

#bike-trash-icon {
    font-size: 1.5em;
    margin-bottom: 1em;
    color: black;
}

.trash-div {
    width: 100%;
    display: flex;
    justify-content: center;
}
@media (max-width: 768px) {
margin-top: .25em;

#bike-card {
    width: 50%;
    margin-bottom: 2em;
}

#bike-title {
    font-size: 1em;
}

}
`