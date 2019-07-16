import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
`;
