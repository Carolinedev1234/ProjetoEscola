import styled from 'styled-components';

export const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5em;
  }

  nav {
    ul {
      display: flex;
      list-style: none;

      li {
        margin-left: 20px;

        a {
          color: #fff;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

export const Main = styled.main`
  margin: 40px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;