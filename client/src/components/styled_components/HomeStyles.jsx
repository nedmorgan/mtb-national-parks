import styled from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10%;
padding-bottom: 3em;

h1, h2 {
    color: whitesmoke;
    font-size: 3em;
    text-align: center;
    margin-bottom: 1vw;
    font-family: 'Ubuntu', sans-serif;
}

@media (max-width: 768px) {
margin-top: 25%;    
    
h1 {
    font-size: 1.5em;
}
}
`