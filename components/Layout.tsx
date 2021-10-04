import React, { ReactNode } from "react";
import Head from "next/head";
import { Toolbar, Typography } from "@material-ui/core";
import * as S from "./styled";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>NextApp</title>
      </Head>
      <S.AppHeader position="static">
        <Toolbar>
          <S.AppName>NextApp</S.AppName>
        </Toolbar>
      </S.AppHeader>
      <S.AppContainer>{children}</S.AppContainer>
      <S.Footer>
        <Typography>NextApp</Typography>
      </S.Footer>
    </div>
  );
};

export default Layout;
