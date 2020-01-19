import { Modal } from 'antd';

// NOTE: antd에서 만든건 리액트 컨포넌트는 아니지만, 다른 곳보단 여기가 덜 헷갈려서 컴포넌트에 위치
type ModalTypes = 'info' | 'success' | 'error' | 'warning';

/**
 * @description 단순 정보 전달용 모달(Modal)
 * @param {ModalTypes} type 'info' | 'success' | 'errer' | 'warning'
 * @param {string} title 제목
 * @param {string} content 내용
 */
export const InfoModal = (type: ModalTypes, title: string, content: string) => {
  return Modal['warn']({
    title,
    content,
  });
};
