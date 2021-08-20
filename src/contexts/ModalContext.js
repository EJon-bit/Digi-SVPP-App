import React, { createContext, useEffect, useState } from 'react'

import AdditionalProps from '../components/modalComponents/AdditionalProps';
import MeterSync from '../components/modalComponents/MeterSyncForm';

import { Card, Col, Icon, Input, Row, Typography, Button, Tag, Checkbox, Form,Select } from 'antd';

const { Meta } = Card;
const { Title } = Typography;

export const ModalContext = createContext();
  
//A react component wrapping other components to enable the sharing of its functions and states via (useContext hook) 
const ModalContextProvider=(props)=>{

    const [modalContent, setModalContent]= useState(false);
    const [renderModalContent, setRenderContent]= useState(false);
    const [modalContentType, setModalContentType]= useState(null);
    const [modalVisible, setModalVisible]= useState(false);
    const [footerContent, setFooterContent]= useState(null);
    const [modalTitle, setModalTitle]= useState(null);
    const [accId, setAccId]= useState(null);

    const [form] = Form.useForm();

    const options = [
        { label: 'AccId1'}, 
        { label: 'AccId2', value: 'acc1' }, 
        { label: 'AccId3', value: 'acc2' }, 
        { label: 'AccId4', value: 'acc3' }
    ];

    
    const formProps= 
    {
        name:"meterForm",
        form: form,       
        layout:"vertical",
        requiredMark:false
    }

    const handleClose=()=>{
        setModalVisible(false);
        setRenderContent(false);
        setModalContentType(null);
        setModalContent(null);
        form.resetFields();        
    }

    const accSeletionProcess=(values, type)=>{      
        options.forEach(option=>{if(values.includes(option.value)){
            console.log(option.value)        
            setModalContentType(type);
            setRenderContent(true);
        }})
    }

    const openModal=(type)=>{        
        var content =  null;

        type!=null?
            content=
                <Form {...formProps}>
                    <Form.Item 
                    name='meterId' >
                        <Select
                            showArrow                                                  
                            style={{ width: '100%' }}
                            placeholder='Select a Meter from Dropdown'
                            optionFilterProp="label"
                            options={options}
                            onChange={(values)=>{ accSeletionProcess(values, type)}}
                        />
                    </Form.Item>
                </Form>
            :<></> ; 
        setModalContent(content);
        setAccId(content);
        setModalVisible(true);
    }

    useEffect(() =>{
        
            if(modalContentType==="props"){ 
                const titleModal= <Row justify="center"> <Title id="modalTitle" level={4}>Additional Properties</Title></Row>
                setModalTitle(titleModal);
                setFooterContent(<Row justify="center"><Button id="modalCloseButton" onClick={()=>handleClose()}>Close</Button></Row>);  
              
                setModalContent(<Col span={24}>{accId}<Row justify="center"><AdditionalProps/></Row></Col>);
            }
            else if(modalContentType==="sync"){
                const titleModal= <Row justify="center"><Title id="modalTitle" level={4}>Manual Sync</Title></Row>
                setModalTitle(titleModal);
                setFooterContent(
                    <Row gutter={20} justify="center">
                        <Col>
                            <Button id="modalCloseButton" onClick={()=>handleClose()}>Cancel</Button>
                        </Col>
                        <Col>
                            <Button  id="modalSyncButton" onClick={"Syncing"}>Sync</Button>
                        </Col>
                    </Row>
                );
                setModalContent(<Col span={24}>{accId} <Row justify="center"><MeterSync/></Row></Col>);
                             
            }
            else if(modalContentType==="addMeter"){
                const titleModal= <Row justify="center">Add A Meter</Row>
                setModalTitle(titleModal);
                setFooterContent(
                    <Row gutter={20} justify="center">
                        <Col>
                            <Button onClick={()=>handleClose()}>Cancel</Button>
                        </Col>
                        <Col>
                            <Button onClick={"Syncing"}>Add</Button>
                        </Col>
                    </Row>
                );
                //content=<></>
            }
            else{
                const titleModal= <Row justify="center">Meter History</Row>
                setModalTitle(titleModal);
                setFooterContent(<Button onClick={()=>setModalVisible(false)}>Close</Button>);  
                //content=<></>
            }
    
    },[renderModalContent])

    return(
        <ModalContext.Provider value={{ openModal, modalTitle, footerContent, modalContent, setModalContent, setRenderContent, setAccId, modalVisible, setModalVisible, setModalContentType}}>
            {props.children}
        </ModalContext.Provider>
    )

}

export default ModalContextProvider;