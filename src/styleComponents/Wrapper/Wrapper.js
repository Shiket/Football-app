import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: ${props => (props.top ? 'flex-start' : 'center')};
  justify-content: ${props => (props.flex ? 'flex-start' : 'center')};
  flex-direction:  ${props => (props.row ? 'row' : 'column')};
  border-right: ${props => (props.border ? '3px solid #272727a9' : 'none')};
  border-left: ${props => (props.border ? '3px solid #272727a9' : 'none')};
`;

export const WrapperNotCenter = styled.div`
  display: flex;
  justify-content: ${props => (props.start ? 'flex-start' : 'center')};
  flex-direction:  ${props => (props.row ? 'row' : 'column')};
  margin-right: ${props => (props.margin ? '5%' : '0px')};
`;