import styled from '@emotion/styled'

const PageStyle = styled('div')`
  & > div > .welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: calc(70vh - 120px);
  },
  & > div > .home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: calc(70vh - 120px);
    width: 100%;
  },
`

export default PageStyle;
