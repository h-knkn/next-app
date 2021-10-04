import styled from "styled-components";
import { AppBar, Container } from "@material-ui/core";

export const AppName = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  margin: 0;
`;

export const AppHeader = styled(AppBar)`
  background: ${({ theme }) => theme.colors.white};
`;

export const AppContainer = styled(Container)`
  min-height: 80vh;
`;

export const Footer = styled.footer`
  text-align: center;
`;
