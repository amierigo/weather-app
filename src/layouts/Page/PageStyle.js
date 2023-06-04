import styled from '@emotion/styled'

const PageStyle = styled('div')`
  min-height: calc(100vh - 120px);

  & > div > .welcome-landing {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: calc(70vh - 120px);
    margin: 0 3rem;
  }
`

export default PageStyle;
