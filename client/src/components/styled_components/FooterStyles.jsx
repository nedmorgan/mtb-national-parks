import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
  background-color: #fafafa;
  bottom: 0 !important;
  width: 100%;
  padding: 1.5rem;
  padding: 0;
  position: fixed;
  height: 5vh;
  margin-top: 0;
  background: rgba(200,200,200,.5) !important;
  
  .bottom {
    margin-top: .5vw;
    margin-bottom: 1.5vw;
    padding: 0;
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