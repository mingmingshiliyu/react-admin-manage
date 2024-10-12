import { Card, Flex } from "antd"

const CardList = () => {
  return (
    <Card>
        <Flex gap={5}>
        {brokerData.map((item,i)=>(
          <Card size="small" style={{color:"grey"}}>
            <div>
              <h2>{item.label}</h2>
              <em>{item.data}</em>
            </div>
          </Card>
        ))}
        </Flex>
      </Card>
  )
}