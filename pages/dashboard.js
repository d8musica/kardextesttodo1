

import "antd/dist/antd.css";


import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Form2 from '../components/form2.js'
import Kardex from '../components/kardex'

import { Modal,Layout,Button } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}




const { Sider, Header, Content } = Layout;

const Dashboard = () => {
  
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
  
    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      setModalText('The modal will be closed');
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 500);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };  
    
    function handleSubmit(e) {

        console.log(e.currentTarget)
            
        
    
        
      }

  return (
    <Layout>
      <Sider style={{background:"#ffffff"}}>
         <div className="buttons">
            <>
            <Button type="ghost" onClick={showModal}>
                +
            </Button>
            <Modal
                title="Add Entry"
                visible={visible}
                okText="Close"
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p><Form2 onSubmit={handleSubmit}/></p>
            </Modal>
            </>
         </div>
        

      </Sider>
      <Layout>
        <Header style={{background:"#ffffff"}}><h1 style={{textAlign:"center"}}>HulkStore Inventory</h1></Header>
        <Content>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Article 1" key="1">
                <Kardex/>
                </TabPane>
                <TabPane tab="Article 2" key="2">
                <Kardex/>
                </TabPane>
                <TabPane tab="Article 3" key="3">
                <Kardex/>
                </TabPane>
            </Tabs>
            
        </Content>
        
      </Layout>

      <style jsx>{`
        .buttons{
            align-content: space-between;
            text-align: center;
            margin-top: 20px;
        }

        button{
            margin.bottom: 20px;
        }
        
      `}</style>

    </Layout>
  )
}

export default Dashboard