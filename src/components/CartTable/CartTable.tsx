import React, { useState, useCallback, FC } from 'react';
import { Button, Table, InputNumber } from 'antd';
import { storageService } from 'services';
import { ProductModel, CartedModel } from 'models';

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

  const handleCleanCartClick = useCallback(() => {
    onClick();
  }, [onClick]);

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
      dataIndex: 'quantity',
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

  // const data: ProductModel[] = [];
  // for (let i = 0; i < 3; i++) {
  //   data.push({
  //     key: i,
  //     title: `상품명으로 ${i}`,
  //     quantity: 1,
  //     price: 1000,
  //   });
  // }

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
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
      />
    </>
  );
};
