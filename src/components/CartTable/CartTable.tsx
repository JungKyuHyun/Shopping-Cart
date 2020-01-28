import React, { useState, useCallback, FC, useEffect } from 'react';
import { Button, Table, InputNumber, Tag } from 'antd';
import { ProductModel, Quantity } from 'models';
import { PriceLabel } from 'components/PriceLabel';
import { CouponTag } from 'components/CouponTag';
import { ConfirmModal } from 'components/ConfirmModal';

type PropTypes = {
  onClick: () => void;
  dataSource: ProductModel[] | [];
  onChange: (id: ProductModel['id'], quantity: number) => void;
  onSelectChange: (selectedRowKeys: any, selectedRows: any) => void; // antd에서 any..
};
/**
 * @description Cart페이지에서 장바구니 제품를 표시해 주는 테이블
 */
export const CartTable: FC<PropTypes> = props => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
  const { onClick, onChange, dataSource, onSelectChange } = props;

  // 장바구니 비우기 버튼 클릭 핸들러
  const handleCleanCartClick = useCallback(() => {
    ConfirmModal('장바구니에 있는 모든 상품을 삭제하시겠습니까?', onClick);
  }, [onClick]);

  const handleSelectChange = useCallback(
    (selectedRowKeys: any, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      onSelectChange(selectedRowKeys, selectedRows);
    },
    [setSelectedRowKeys, selectedRowKeys, onSelectChange],
  );

  const rowSelection = {
    selectedRowKeys,
    onChange: handleSelectChange,
  };

  const handleInputNumberChange = useCallback(
    (id: ProductModel['id'], quantity: number | undefined) => {
      onChange(id, quantity as number);
    },
    [onChange],
  );

  const columns = [
    {
      title: '상품 제목',
      dataIndex: 'title',
      align: 'center' as 'center', // NOTE: 멍충한 antd 때문에 assertion을 통해 한번 더 타입을 확정해 준다
      width: '50%',
    },
    {
      title: '수량',
      dataIndex: 'quantity',
      align: 'center' as 'center',
      value: InputNumber,
      render: (quantity: Quantity) => (
        <InputNumber
          style={{ width: '65px' }}
          min={1}
          defaultValue={quantity.quantity}
          onChange={num => handleInputNumberChange(quantity.id, num)}
        />
      ),
    },
    {
      title: '가격',
      dataIndex: 'displayPrice',
      align: 'center' as 'center',
      render: (displayPrice: number) => (
        <PriceLabel value={displayPrice} strong={true} />
      ),
    },
    {
      title: '쿠폰 적용',
      dataIndex: 'availableCoupon',
      align: 'center' as 'center',
      render: (availableCoupon: boolean) =>
        availableCoupon === undefined ? (
          <CouponTag
            label="가능"
            tooltip="아래 쿠폰 선택시 자동 적용됩니다"
            color="#108ee9"
          />
        ) : (
          <Tag>불가능</Tag>
        ),
    },
  ];

  return (
    <>
      <div style={{ marginBottom: 16, textAlign: 'right' }}>
        <span style={{ marginRight: 10 }}>
          {selectedRowKeys.length > 0
            ? `선택 상품(${selectedRowKeys.length}개)`
            : ' '}
        </span>
        <Button onClick={handleCleanCartClick} disabled={!dataSource.length}>
          장바구니 비우기
        </Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
    </>
  );
};
