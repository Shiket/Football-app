import styled from 'styled-components';
import bg from '../../assets/bg1.jpg';
export const Loader = styled.div`
  div,
  div:before {
    display: block;
    position: absolute;
  }

  div {
    width: 100%;
    height: calc(100% - 150px);
    background: url(${bg}) no-repeat center center fixed;
  }

  div:before {
    background-color: rgba(0, 0, 0, 0);
    background-image: radial-gradient(
        closest-side at 50% 50%,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        closest-side at 50% 50%,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        closest-side at 50% 50%,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        closest-side at 50% 50%,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        closest-side at 50% 50%,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        closest-side at 50% 50%,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        closest-side at 50% 50%,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        #fff,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0)
      );
    background-position: center top, 59px 5px, 73px 20px, right center,
      73px 59px, 59px 73px, center bottom;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 49.75%;
    content: '';
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0);
    animation: rotation 1s ease-in-out infinite;
  }

  @keyframes rotation {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
