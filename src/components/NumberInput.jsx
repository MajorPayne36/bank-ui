import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Popover, Space, Divider, Layout, Tag } from 'antd';

/**
 * This is Component, which show numbers and send it to parent
 * @param {*} props 
 * @returns 
 */
function NumberInput(props) {

  const [textNumber, setTextNumber] = React.useState("")

  const addToNumber = (c) => {
    if (textNumber.length < props.lenght) {
      setTextNumber(textNumber + c);
    }
  }

  const numberWithDash = () => {
    return textNumber.split('').map((v, i) => {
      if (i !== 0 && i % 4 === 0) return <><Tag color='lime'> - </Tag><Tag color='blue'> {v}</Tag></>
      else return <Tag color='blue'>{v}</Tag>
    })
  }

  return (
    <Layout >

      <Row style={{ height: '3vh' }}>
        {numberWithDash()}{' '}
      </Row>

      <Space split={<Divider type="vertical" />}>
        <Row gutter={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => addToNumber(1)}>1</Button></Col>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => addToNumber(2)}>2</Button></Col>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => addToNumber(3)}>3</Button></Col>
          {textNumber === '' ?
            <Col><Popover content='write number' trigger="click">
              <Button style={{ margin: 5 }} shape='round' type='primary'>Enter</Button>
            </Popover></Col> :
            <Col><Button style={{ margin: 5 }} shape='round' onClick={() => props.parentFunction(textNumber)} type='primary'>
              <Link to={props.nextPage}>Enter</Link>
            </Button></Col>
          }
        </Row>
      </Space>
      <Space split={<Divider type="vertical" />}>
        <Row gutter={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => addToNumber(4)}>4</Button></Col>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => addToNumber(5)}>5</Button></Col>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => addToNumber(6)}>6</Button></Col>
          <Col><Button style={{ margin: 5 }} shape='round' danger type='primary'><Link to='/'>Cancel</Link></Button></Col>
        </Row>
      </Space>
      <Space split={<Divider type="vertical" />}>
        <Row gutter={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => addToNumber(7)}>7</Button></Col>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => addToNumber(8)}>8</Button></Col>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => addToNumber(9)}>9</Button></Col>
        </Row>
      </Space>
      <Space split={<Divider type="vertical" />}>
        <Row gutter={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => setTextNumber('')} danger type=''>CE</Button></Col>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => addToNumber(0)}>0</Button></Col>
          <Col><Button style={{ margin: 5 }} shape='circle' onClick={() => setTextNumber(textNumber.slice(0, -1))} danger type=''> {"<"} </Button></Col>
        </Row>
      </Space>
    </Layout>
  );
}

export default NumberInput;