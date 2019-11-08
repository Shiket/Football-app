import styled from 'styled-components'

export const Details = styled.div`
    padding-top:4vh;
    max-height:calc(99vh - 200px);
    width:20%;
    min-width:300px;
    min-height:200px;
    overflow:auto;
    display:flex;
    flex-direction: column;
    background-color: #00000052;

  @media (max-width: 1160px) {
    width:100%;
    min-height:100px;
    overflow:auto;
    display:flex;
    flex-direction: row;
    background-color: #00000052;
  }

    @media (max-width: 600px) {
    width:100%;
    min-height:200px;
    overflow:auto;
    display:flex;
    flex-direction: column;
    background-color: #00000052;
    }
`;