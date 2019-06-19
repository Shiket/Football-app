import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction:  ${props => (props.row ? 'row' : 'column')};
`

export default Wrapper