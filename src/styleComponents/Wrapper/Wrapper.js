import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: ${props => (props.top ? 'flex-start' : 'center')};
  justify-content: ${props => (props.flex ? 'flex-start' : 'center')};
  flex-direction:  ${props => (props.row ? 'row' : 'column')};
`;

export const WrapperNotCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction:  ${props => (props.row ? 'row' : 'column')};
`;