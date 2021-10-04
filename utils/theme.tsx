import { ThemeProvider as ThemeProviderBase } from "styled-components";
import theme from "styles/theme";

const ThemeProvider: React.FC = ({ children }) => (
  <ThemeProviderBase theme={theme}>
    {children}
  </ThemeProviderBase>
);

export default ThemeProvider;
