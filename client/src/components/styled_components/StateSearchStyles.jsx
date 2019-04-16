import styled from 'styled-components'

export const SearchContainer = styled.div`
margin-bottom: 3vw;

form {
    width: 100%;
    text-align: center;
}

button {
    padding: 10px 24px;
    font-size: 16px;
    border-radius: 8px;
    margin-top: 1vw;
}

button:hover {
     box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
     background: rgba(200,200,200,.5);
     cursor: pointer;
}
`