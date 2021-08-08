import { useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import CardNumber from './pages/CardNumber';
import PinCode from './pages/PinCode';
import Withdrawal from './pages/Withdrawal';

function App() {
    const [cardNumber, setcardNumber] = useState('');
    const [cardPin, setcardPin] = useState('');
    return <Router>
        <Switch>
            <Route path='/card-number'
                render={(props) => <CardNumber {...props} setcardNumber={setcardNumber} />}
            />

            <Redirect exact from='/' to='/card-number' />

            <Route path='/pin-code' render={() => <PinCode
                setcardPin={setcardPin}
                cardNumber={cardNumber}
                setcardNumber={setcardNumber}
                cardPin={cardPin}

            />} />

            <Route path='/withdrawal' render={() => <Withdrawal
                cardNumber={cardNumber}
                cardPin={cardPin}
                setcardNumber={setcardNumber}
                setcardPin={setcardPin}
            />} />

        </Switch>
    </Router>
}

export default App;
