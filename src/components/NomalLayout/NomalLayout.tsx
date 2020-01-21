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

const HeaderStyle: CSSProperties = {
  //antd가 멍충해서 이 부분만 타입 에러를 뱉는다.
  width: '100%',
};

const ContentStype = {
  padding: '1rem',
  maxWidth: '1366px', // NOTE: Full Wide XGA / 1366x768 => 16:9
  width: '100%',
  margin: '80 auto',
};

const FooterStyle = {
  backgroundColor: '#1b1c1d',
  color: '#fff',
};
