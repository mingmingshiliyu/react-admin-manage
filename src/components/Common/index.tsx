import { Card, Flex, Table } from "antd";
import type { TableColumnsType, TableProps } from 'antd';
import { useState } from "react";
type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

type Column = {
  title: string,
  index: string
}

type TablePropDec<T> = {
  column: Column[],
  data: any,
  dataType?: T,
}




const DataList:React.FC<TablePropDec<any>> = ({column,data})=>{
  const columnDataFetch = (column:Column[]):TableColumnsType<any>=>{
    let c:TableColumnsType = []
    column.forEach((item)=>{
      c.push({title:item.title,dataIndex:item.index})
    })
    return c
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // const brokerData= [
  //   {label:"Broker Count",data:"3"},
  //   {label:"Active Controller",data:"1001"},
  //   {label:"Version",data:"3.6-IV2"},
  //   {label:"Online",data:"56 of 56"},
  //   {label:"URP",data:"0"},
  //   {label:"In Sync Replicas",data:['62','62']},
  //   {label:"Out of sync replicas",data:"0"},
  // ]
  
  interface DataType {
    key: React.Key;
    brokerId: string;
    diskUsage: string;
    partitionSkew: string; //zk3|raft
    leadersPartition: string;
    leaderSkew: string;
    onlinePartitions: string;
    port: string;
    host: string;
    jmxPort: string;
    partitions: string;
    segmentCount:string;
    segmentSize:string;
    // messageSize leaderMessages bytesin bytesout
  }
  
  

  // const columns: TableColumnsType<DataType> = [
  //   { title: 'BrokerId', dataIndex: 'brokerId' },
  //   { title: 'DiskUsage', dataIndex: 'diskUsage' },
  //   { title: 'LeadersPartition', dataIndex: 'leadersPartition' },
  //   { title: 'LeaderSkew', dataIndex: 'leaderSkew' },
  //   { title: 'OnlinePartitions', dataIndex: 'onlinePartitions' },
  //   { title: 'Port', dataIndex: 'port' },
  //   { title: 'Host', dataIndex: 'host' },
  //   { title: 'JmxPort', dataIndex: 'jmxPort' },
  //   { title: 'Partitions', dataIndex: 'partitions' },
  //   { title: 'SegmentCount', dataIndex: 'segmentCount' },
  //   { title: 'SegmentSize', dataIndex: 'segmentSize' },
  // ];
  const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
    key: i,
    brokerId: `Edward King ${i}`,
    diskUsage:"3.0.0",
    partitionSkew: 'raft',
    leadersPartition: "green",
    leaderSkew: "3",
    onlinePartitions: "11",
    port:"9993",
    host:"www.baodi.com",
    jmxPort:"9999",
    partitions:"sda",
    segmentCount:"11",
    segmentSize:"100",
  }));
  
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
      <>
      <Card>
      <Table<DataType> rowSelection={rowSelection} columns={columnDataFetch(column)} dataSource={data} />
      </Card>
      </>
  )
}

export default DataList;