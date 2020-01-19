import React, { useState, useCallback } from 'react';
import { Button, Table, InputNumber } from 'antd';
import { storageService } from 'services';

/**
 * @description Cart페이지에서 장바구니 제품를 표시해 주는 테이블
 */
export const CartTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const [inputNumber, setInputNumber] = useState<number | undefined>(1);

  const handleCleanCartClick = useCallback(() => {
    storageService.removeItem('cart-class101');
  }, [storageService.removeItem]);

  const onSelectChange = useCallback(
    (selectedRowKeys: any) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      setSelectedRowKeys(selectedRowKeys);
    },
    [setSelectedRowKeys],
  );

  const hasSelected = selectedRowKeys.length > 0;
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
      width: '50%',
    },
    {
      title: '수량',
      dataIndex: 'amount',
      render: (num: number) => (
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
    },
    {
      title: 'Action',
      key: 'operation',
      // width: 100,
      render: () => <a>action</a>,
    },
  ];

  const data: any = [];
  for (let i = 0; i < 3; i++) {
    data.push({
      key: i,
      title: `상품명으로 ${i}`,
      amount: 1,
      price: `가격데이터로 수정 예정 ${i}`,
    });
  }

  return (
    <>
      <div style={{ marginBottom: 16, textAlign: 'right' }}>
        <Button
          type="primary"
          onClick={handleCleanCartClick}
          // disabled={!hasSelected} // FIXME: 수정 하기
        >
          장바구니 비우기
        </Button>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </>
  );
};
