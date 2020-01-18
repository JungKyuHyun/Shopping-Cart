import React, { FC, ReactNode } from 'react';
import { Layout } from 'antd';
import { MainHeader } from 'components/MainHeader';
import { MainFooter } from 'components/MainFooter';

type PropTypes = {
  children: ReactNode;
};

/**
 * @description 공통 레이아웃
 * @param {ReactNode} children
 */

export const NomalLayout: FC<PropTypes> = ({ children }) => {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout style={LayoutStyle}>
      <Header>
        <MainHeader />
      </Header>
      <Content style={ContentStype}>{children}</Content>
      <Footer style={FooterStyle}>
        <MainFooter />
      </Footer>
    </Layout>
  );
};

const LayoutStyle = {
  height: '100vh',
};

const ContentStype = {
  padding: '1rem',
};

const FooterStyle = {
  backgroundColor: '#1b1c1d',
  color: '#fff',
};
