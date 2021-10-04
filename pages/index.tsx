import type { NextPage } from "next";
import Layout from "../components/Layout";
import { StylesProvider } from "@material-ui/styles";
import ThemeProvider from "utils/theme";

const Home: NextPage = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider>
        <Layout>
          <h1>Products</h1>
        </Layout>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Home;
