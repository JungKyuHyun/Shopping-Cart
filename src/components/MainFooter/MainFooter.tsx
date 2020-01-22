import React from 'react';

/**
 * @description NomalLayout에서 사용되는 메인 푸터 컴포넌트
 */
export const MainFooter = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        Copyright © jungkyuhyun {new Date().getFullYear()}
      </div>
    </>
  );
};
