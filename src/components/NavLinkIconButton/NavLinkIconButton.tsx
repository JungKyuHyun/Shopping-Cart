import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import Text from 'antd/lib/typography/Text';

type PropTypes = {
  to: string;
  icon: string;
  text: string;
};

/**
 * @description 이동하는 아이콘 + 텍스트 버튼
 * @param {string} to    NavLink를 통해 이동될 URL
 * @param {string} icon  버튼 앞에 표시되는 Icon
 * @param {string} text  버튼의 워딩
 */
export const NavLinkIconButton: FC<PropTypes> = props => {
  const { to, icon, text } = props;

  return (
    <NavLink to={to}>
      <Button icon={icon}>
        <Text strong={true}>{text}</Text>
      </Button>
    </NavLink>
  );
};
