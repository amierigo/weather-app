import styled from '@emotion/styled'

const PageStyle = styled('div')`
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
