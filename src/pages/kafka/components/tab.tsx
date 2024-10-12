import { Button, Card, Flex } from "antd"
import { PlusCircleTwoTone ,SearchOutlined } from '@ant-design/icons';
import KafkaTable from "./table";

// kafka集群:创建,删除,更新,查询

const KafkaTab:React.FC = () => {
  return (
    <Flex flex={1} vertical gap={'middle'} style={{padding:5}}>
      <Card>
        <Flex justify="flex-end" gap={5}>
        <Button type="primary" shape="circle" icon={<PlusCircleTwoTone/>}></Button>
        <Button color="red">Delete</Button>
        <Button type='text' shape="circle" icon={<SearchOutlined/>}/>
        </Flex>
      </Card>
      <Card style={{}}>
        <KafkaTable/>
      </Card>
    </Flex>
  )
}

export default KafkaTab;