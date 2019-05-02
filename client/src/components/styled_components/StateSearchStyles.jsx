import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const SearchContainer = styled.div`
margin-bottom: 3vw;
animation: .5s ${fade};

form {
    width: 100%;
    text-align: center;
}

button {
    padding: 10px 24px;
    font-size: 16px;
    border-radius: 8px;
    margin-top: 1em;
    font-family: 'Ubuntu Condensed', sans-serif;
}

button:hover {
     box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
     background: rgba(200,200,200,.5);
     cursor: pointer;
     color: whitesmoke;
}

.add-state-button {
    color: whitesmoke;
    margin-left: 1.5vw;
    border: 1px solid whitesmoke;
    border-radius: 8px;
    padding: 10px 24px;
}

a:hover {
    cursor: pointer;
    background: rgba(200,200,200,.5);
}

@media (max-width: 768px) {
    
button {
    margin-top: 3vw;
}
}
`