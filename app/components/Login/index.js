import Actions from "../../redux/actions"
import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import { connect } from "react-redux"
import CustomButton from '../Material/CustomButton'
import CustomInput from '../Material/CustomInput'
import mui from 'material-ui'

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit() {
    const user = {
      email: document.getElementById("signup-email").value,
      password: document.getElementById("signup-password").value
    }
    this.props.dispatch(Actions.userLogin(user))
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.themebar}>
          Login
        </div>
        <div className={style.form}>
          <CustomInput label="Username" type="text" id="signup-email" className={style.inputText} />
          <CustomInput type='password' id="signup-password" label='Password' className={style.inputText}/>
          <div className={style.submitContainer}>
            <CustomButton onClick={this.submit} label="Sign Up" className={style.button} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(cssModules(Login, style))
