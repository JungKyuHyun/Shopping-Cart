import React, { FC } from 'react';
import Title from 'antd/lib/typography/Title';

type PropTypes = {
  title: string | JSX.Element;
};

/**
 * 각 페이지 상단의 공통 제목
 * @param props 제목
 */
export const PageTitle: FC<PropTypes> = props => {
  const { title } = props;

  return <Title level={2}>| {title}</Title>;
};
