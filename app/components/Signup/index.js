import React from "react"
import { connect } from "react-redux"
import cssModules from "react-css-modules"
import style from "./style.css"
import CustomButton from '../Material/CustomButton'
import CustomInput from '../Material/CustomInput'
import mui from 'material-ui'
import Actions from "../../redux/actions"


export class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit() {
    const user = {
      username: document.getElementById("signup-username").value,
      email: document.getElementById("signup-email").value,
      password: document.getElementById("signup-password").value
    }
    this.props.dispatch(Actions.userNew(user))
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.themebar}>
          Create Account
        </div>
        <div className={style.form}>
          <CustomInput label="Username" type="text" id="signup-username" className={style.inputText} />
          <CustomInput type='email' id="signup-email" label='Email address' className={style.inputText}/>
          <CustomInput type='password' id="signup-password" label='Password' className={style.inputText}/>
          <CustomInput type='password' id='signup-verify-password' label='Verify Password' className={style.inputText}/>
          <div className={style.submitContainer}>
            <CustomButton onClick={this.submit} label="Sign Up" className={style.button} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(cssModules(Signup, style))
