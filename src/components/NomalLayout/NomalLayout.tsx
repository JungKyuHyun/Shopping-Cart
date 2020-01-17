import React, { FC, ReactNode } from 'react';
import { Layout } from 'antd';

type PropTypes = {
  children: ReactNode;
};

/**
 * @description 공통 레이아웃
 */
export const NomalLayout: FC<PropTypes> = ({ children }) => {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ color: '#fff' }}>CLASS 101</Header>
      <Content>{children}</Content>
      <Footer style={{ backgroundColor: '#1b1c1d', color: '#fff' }}>
        Footer
      </Footer>
    </Layout>
  );
};
