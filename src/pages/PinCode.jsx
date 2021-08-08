import React from 'react'
import NumberInput from '../components/NumberInput'
import { useHistory } from "react-router-dom";
import { Typography, notification } from 'antd'
const { Title } = Typography;
const axios = require('axios');

export default function PinCode(props) {
    const history = useHistory();

    const showNotification = type => {
        notification[type]({
            message: 'Notification',
            description: type === 'error' ?
                'Writen card-number or card-pin was wrong' : 'Succesful authorized!',
        });
    };

    const authorize = async (pin) => {

        props.setcardPin(pin);
        console.log(props.cardNumber + ' ' + pin)
        await axios.post('http://localhost:8080/bank/authorize', {

            number: props.cardNumber,
            pin: pin

        }).then(res => {
            let data = res.data
            console.log(JSON.stringify(data))
            if (data.number === 'Error') {
                showNotification('error')
                props.setcardPin('');
                props.setcardNumber('');
                history.push('/card-number')
            } else {
                showNotification('success')
            }
        })
    }

    return (
        <div>
            <Title level={2}>Enter card PIN-code</Title>
            <NumberInput parentFunction={authorize} lenght={4} nextPage='/withdrawal' />
        </div>
    )
}
