import styled from "styled-components"

const StyledMenu = styled.nav`
  ul {
    display: flex;
    li {
      & + li {
        margin-left: 5px;
      }

      a {
        color: #222222;
        display: block;
        padding: 5px 10px;
        background-color: #fff;
      }
    }
  }
`

export { StyledMenu }