import styled from 'styled-components'

export const BikeFormContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

form {
    width: 100%;
}

label {
    color: whitesmoke;
    font-family: 'Ubuntu', sans-serif;
    width: 20%;
}

input {
    width: 100%;
    font-family: 'Ubuntu Condensed', sans-serif;
}

.check-box {
    display: flex;
    align-items: center;
}

.checkbox {
    font-weight: 700;
}

.checkbox:hover {
    color: whitesmoke;
    cursor: default;
}

.boolean-box {
    margin-left: .5em;
}

i {
    font-size: 1.5em !important;
    margin: 0 !important;
}

.button-div {
    width: 100%;
    display: flex;
    justify-content: center;
}

.button {
    font-family: 'Ubuntu Condensed', sans-serif;
}

.button:hover {
    cursor: pointer;
    background: rgba(200,200,200,.5);
}

`