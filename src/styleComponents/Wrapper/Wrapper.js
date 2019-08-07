import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:  ${props => (props.row ? 'row' : 'column')};
`;

export const WrapperNotCenter = styled.div`
  display: flex;
  justify-content: center;  
  flex-direction:  ${props => (props.row ? 'row' : 'column')};
`;