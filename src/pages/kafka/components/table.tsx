import React, { useState } from 'react';
import { Button, Flex, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  name: string;
  version: string;
  mode: string; //zk3|raft
  health: string;
  brokers: string;
  metrics: string;
  // messageSize leaderMessages bytesin bytesout
}

const columns: TableColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Version', dataIndex: 'version' },
  { title: 'Mode', dataIndex: 'mode' },
  { title: 'Health', dataIndex: 'health' },
  { title: 'Brokers', dataIndex: 'brokers' },
  { title: 'Metrics', dataIndex: 'metrics' },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  version:"3.0.0",
  mode: 'raft',
  health: "green",
  brokers: "3",
  metrics: "11",
}));

const KafkaTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table<DataType> rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
    </Flex>
  );
};

export default KafkaTable;