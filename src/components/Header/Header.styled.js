import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: #222;
  padding: 10px 0;
  color: white;

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }

  .App-title {
    font-size: 1.5em;
  }

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`

export { StyledHeader }