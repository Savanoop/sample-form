import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PersonalDetails from './pages/PersonalDetails';
import AccountDetails from './pages/AccountInformation';
import { useState } from 'react';
import { Steps } from 'antd';
import UserDetails from './pages/UserDetails';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";

function App() {
  const { Step } = Steps;
  const history = useHistory()
  const { pathname, search, hash } = useLocation()
  const [details, setDetails] = useState();
  const [current, setCurrent] = useState(null);
  const [loading,setLoading] = useState(true);

  const addDetails = () => {
    setLoading(false)
    setCurrent(0)
    history.push('/personal')
  }

  const onDetailsChange = (value) => {
    console.log(details)
    setCurrent(current+1)
    debugger
    setDetails(prevState => ({ ...prevState, ...value }))
  }
  return (
    <div className="container">
      <Steps current={current}>
        <Step title="Personal Details" />
        <Step title="Account Details" />
        <Step title="User Details Added" />
      </Steps>

      {loading && <Button className='detailsButton' type="primary" onClick={addDetails}>Add Details </Button>}
      <Switch>
        {/* <Route exact path="/" component={App} /> */}
        <Route path="/personal" component={() => <PersonalDetails details={onDetailsChange} />} />
        <Route path="/account" component={() => <AccountDetails account={onDetailsChange} />} />
        <Route path="/details" component={() => <UserDetails userDetails={details} />} />
      </Switch>

    </div>
  );
}

export default App;
