import { Modal, Button } from 'antd';

type VoidCallback = () => void;

/**
 * @description confirm(ok, cancel) 모달
 *
 * @param {string}  title      컨텐츠 제목
 * @param {void}    onOk       승낙 콜백함수
 * @param {void}    [onCancel] 취소 콜백함수
 * @param {string}  [content]  컨텐츠 내용
 */
export const ConfirmModal = (
  title: string,
  onOk: VoidCallback,
  onCancel?: VoidCallback,
  content?: string,
) => {
  const { confirm } = Modal;

  return confirm({
    title,
    content,
    onOk,
    onCancel,
    okButtonProps: { type: 'danger' },
  });
};
