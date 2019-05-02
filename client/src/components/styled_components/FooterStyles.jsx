import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
  background-color: #fafafa;
  bottom: 0;
  width: 100%;
  margin-top: 5vw;
  background: rgba(200,200,200,.5) !important;
  position: fixed;
  
  .bottom {
    margin-top: .5vw;
    margin-bottom: 1.5vw;
  }

  a {
    margin-left: .25em;
  }
  
  a, span {
    font-family: 'Lato', sans-serif;
    color: whitesmoke;
  }

  a:hover {
    color: #3366BB;
    cursor: pointer;
  }
`