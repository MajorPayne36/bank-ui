import React from 'react'
import NumberInput from '../components/NumberInput'
import { useHistory } from "react-router-dom";
import { Typography, notification } from 'antd'
const axios = require('axios');
const { Title } = Typography;

export default function Withdrawal(props) {
    const history = useHistory();

    const showNotification = type => {
        notification[type]({
            message: 'Notification',
            description: type === 'error' ?
                'You dont have enaugh money!' : 'Succesful!',
        });
    };

    const doOperation = money => {
        axios.post('http://localhost:8080/bank/operation', {
            number: props.cardNumber,
            pin: props.cardPin,
            money: Number(money)
        }).then(res => {
            console.log(JSON.stringify(res.data))
            if (res.data === true) {
                history.push('/withdrawal')
                showNotification('success')
            }
            else {
                showNotification('error')
                props.setcardPin('');
                props.setcardNumber('');
            }
        })
    }

    return (
        <div>
            <Title level={2}>Enter how you want to get</Title>
            <NumberInput parentFunction={doOperation} lenght={100} nextPage='/' />
        </div>
    )
}
