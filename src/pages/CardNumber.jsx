import React from 'react'
import NumberInput from '../components/NumberInput'
import { Typography } from 'antd'
const { Title } = Typography;

export default function CardNumber(props) {
    return (
        <div>
            <Title level={2}>Enter card number</Title>
            <NumberInput parentFunction={props.setcardNumber} lenght={16} nextPage='/pin-code' />
        </div>
    )
}
