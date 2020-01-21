import React, { useState, useCallback, FC } from 'react';
import { Button, Table, InputNumber } from 'antd';
import { CartedModel } from 'models';
import { PriceLabel } from 'components/PriceLabel';

type PropTypes = {
  onClick: () => void;
  dataSource: CartedModel[];
};
/**
 * @description Cart페이지에서 장바구니 제품를 표시해 주는 테이블
 */
export const CartTable: FC<PropTypes> = props => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [inputNumber, setInputNumber] = useState<number | undefined>(1);
  const { onClick, dataSource } = props;

  // 장바구니 비우기 버튼 클릭 핸들러
  const handleCleanCartClick = useCallback(() => {
    onClick();
  }, [onClick]);

  const onSelectChange = useCallback(
    (selectedRowKeys: any) => {
      console.log(
        'selectedRowKeys changed: ',
        selectedRowKeys,
        'inputNumber',
        inputNumber,
      );
      setSelectedRowKeys(selectedRowKeys);
    },
    [setSelectedRowKeys, inputNumber],
  );

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleInputNumberChange = useCallback(
    (value: number | undefined) => {
      setInputNumber(value);
      console.log(value);
    },
    [setInputNumber],
  );

  const columns = [
    {
      title: '상품 제목',
      dataIndex: 'title',
      align: 'center' as 'center', // NOTE: 멍충한 antd 때문에 const assertion을 통해 한번 더 타입을 확정해 준다
      width: '50%',
    },
    {
      title: '수량',
      dataIndex: 'quantity',
      align: 'center' as 'center',
      render: () => (
        <InputNumber
          style={{ width: '65px' }}
          min={1}
          defaultValue={1}
          onChange={handleInputNumberChange}
        />
      ),
    },
    {
      title: '가격',
      dataIndex: 'price',
      align: 'center' as 'center',
      render: (price: number) => <PriceLabel value={price} strong={true} />,
    },
    {
      title: 'Action',
      key: 'operation',
      // width: 100,
      render: () => <a>action</a>,
    },
  ];

  return (
    <>
      <div style={{ marginBottom: 16, textAlign: 'right' }}>
        <Button
          type="primary"
          onClick={handleCleanCartClick}
          disabled={!dataSource.length}
        >
          장바구니 비우기
        </Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      />
    </>
  );
};
