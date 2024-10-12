import { Tabs } from "antd";
import Broker from "./broker"


const ClusterDetail = () => {
  const KafkaTabData = [
    {
      label: "Broker"
    },
    {
      label: "Topic"
    },
    {
      label: "Zk"
    },
    {
      label: "Connect"
    },
    {
      label: "Consumer"
    },
    {
      label: "Acl"
    }
  ]
  return (
    <Tabs
        defaultActiveKey="1"
        type="card"
        size={'middle'}
        items={KafkaTabData.map((item, i) => {
          const id = String(i + 1);
          return {
            label: item.label,
            key: id,
            children: <Broker/>,
          };
        })}
      />
  )
}

export default ClusterDetail;