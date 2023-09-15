import classes from './style/ForgetPassword.module.css'
import BASEURL from '../../fetch/BaseURL'
import Input from '../../ui/Input'
import Card from '../../ui/Card'
import Button from '../../ui/Button';
import { useRef, useState } from 'react';
import useForgetPassword from '../../fetch/useForgetPassword';

export default function ForgetPassword() {
  const emailInput = useRef("")
  const [sendRequest, setSendRequest] = useState(null)
  useForgetPassword(sendRequest)

  function sendEmailBtnClicked() {
    let data = {
      email: emailInput.current.value
    }

    setSendRequest(data)
  }

    return (
      <div className={classes.body}>
        <div className={classes.header}>
          <img src={BASEURL + "static/images/statics/uni-logo.png"} alt="guilan uni logo" className={classes.uniLable} />
          <h2 className={classes.tamLable}>سامانه تام</h2>
          <img src="image.jpg" alt="TAM logo" className={classes.tamLogo} />
        </div>

        <Card login>
          <div className={classes.inputsLocation}>
            <label htmlFor="username" className={classes.labelText}>
              ایمیل
            </label>
            <Input innerRef={emailInput} id="username" type={"email"} login />
          </div>
          <Button loginBtn click={sendEmailBtnClicked}>
            ارسال ایمیل
          </Button>
        </Card>
    </div>
  );
}