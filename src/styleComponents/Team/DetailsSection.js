import styled from 'styled-components'

export const Details = styled.div`
    padding-top:4vh;
    height:calc(99vh - 200px);
    max-height: 720px;
    width:20%;
    min-width:300px;
    overflow-y:auto;
    display:flex;
    flex-direction: column;
    background-color: #00000052;

  @media (max-width: 1300px) {
    padding-top: 30px;
    width:100%;
    min-height:670px;
    overflow-y: hidden;
  }
`;