import styled from 'styled-components'

export const NavContainer = styled.div`
  position: static;
  margin-top: 2vw;
  display: flex;
  justify-content: space-between;
  background: rgba(200,200,200,.5);
  margin: 0;
  border-bottom: 1px solid black;

nav {
    display: flex;
    justify-content: space-around;
}

span {
    color: whitesmoke;
    font-size: 1.5em;
    font-family: 'Pacifico', cursive;
}

a {
    color: whitesmoke;
    font-family: 'Ubuntu', sans-serif;
}

span:hover {
    color: black;
}

i {
    margin-right: .5em;
}

.link-div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (max-width: 768px) {
    i {
        margin-right: .2em;
    }

    span {
        font-size: 1.5em;
    }
    
    .navLink {
        font-size: .75em;
        padding-bottom: 0 !important;
    }
}
`