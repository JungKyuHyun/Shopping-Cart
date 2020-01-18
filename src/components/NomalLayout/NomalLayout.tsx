import React, { FC, ReactNode } from 'react';
import { Layout } from 'antd';
import { Typography } from 'antd';

type PropTypes = {
  children: ReactNode;
};

/**
 * @description 공통 레이아웃
 * @param {ReactNode} children
 */

export const NomalLayout: FC<PropTypes> = ({ children }) => {
  const { Header, Footer, Content } = Layout;
  const { Title } = Typography;

  return (
    <Layout style={LayoutStyle}>
      <Header>
        <Title style={TitleStyle}>CLASS 101</Title>
      </Header>
      <Content style={ContentStype}>{children}</Content>
      <Footer style={FooterStyle}>Footer</Footer>
    </Layout>
  );
};

const LayoutStyle = {
  height: '100vh',
};

const TitleStyle = {
  color: '#fff',
  verticalAlign: 'center',
  marginTop: '7px',
};

const ContentStype = {
  padding: '1rem',
};

const FooterStyle = {
  backgroundColor: '#1b1c1d',
  color: '#fff',
};
