import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

const datas = [
  {
    description: '1',
    incomesunits: 'John',
    incomesunitarycost: 'Brown',
    incomestotalcost: 32,
    
  },
  
];


const Kardex = ({data}) => {
  

  return (
    <Table dataSource={data}>
    <Column title="Description" dataIndex="description" key="description" />
    <ColumnGroup title="Incomes">
      <Column title="Units" dataIndex="incomesunits" key="incomesunits" />
      <Column title="Unitary cost" dataIndex="incomesunitarycost" key="incomesunitarycost" />
      <Column title="Total cost" dataIndex="incomestotalcost" key="incomestotalcost" />
    </ColumnGroup>
    <ColumnGroup title="Outcomes">
    <Column title="Units" dataIndex="outcomesunits" key="outcomesunits" />
      <Column title="Unitary cost" dataIndex="outcomesunitarycost" key="outcomesunitarycost" />
      <Column title="Total cost" dataIndex="outcomestotalcost" key="outcomestotalcost" />
    </ColumnGroup>
    <ColumnGroup title="Inventory">
    <Column title="Units" dataIndex="inventoryunits" key="inventoryunits" />
      <Column title="Unitary cost" dataIndex="inventoryunitarycost" key="inventoryunitarycost" />
      <Column title="Total cost" dataIndex="inventorytotalcost" key="inventorytotalcost" />
    </ColumnGroup>
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
  )
}

export default Kardex
