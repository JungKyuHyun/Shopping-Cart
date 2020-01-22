import React, { FC, ReactNode, CSSProperties } from 'react';
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
      <Header style={HeaderStyle}>
        <MainHeader />
      </Header>
      <Content style={ContentStyle}>{children}</Content>
      <Footer style={FooterStyle}>
        <MainFooter />
      </Footer>
    </Layout>
  );
};

const LayoutStyle = {
  height: '100vh',
  overflow: 'hidden',
};

const HeaderStyle: CSSProperties = {
  width: '100%',
};

const ContentStyle: CSSProperties = {
  padding: '1rem',
  maxWidth: '1366px', // NOTE: Full Wide XGA / 1366x768 => 16:9
  width: '100%',
  margin: '0 auto',
  minHeight: '84vh',
  overflow: 'auto',
};

const FooterStyle: CSSProperties = {
  backgroundColor: '#1b1c1d',
  color: '#fff',
  float: 'right',
};
