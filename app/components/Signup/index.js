import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import { Button } from 'react-toolbox/lib/button'
import Input from 'react-toolbox/lib/input';
//import { default as Button } from "../Button"

export class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    console.log("Submit button clicked")
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.form}>
          <div className={style.inputGroup}>
            <Input
              placeholder="Username"
              type="text"
              id="signup-username" />
          </div>
          <div className={style.inputGroup}>
            <Input
              type="email"
              icon="email"
              id="signup-email" />
            <Input type='email' label='Email address' icon='email' />

          </div>
          <div className={style.inputGroup}>
            <input
              placeholder="Password"
              className={style.input}
              type="password"
              id="signup-password" />
          </div>
          <div className={style.inputGroup}>
            <input
              placeholder="Verify Password"
              className={style.input}
              type="password"
              id="signup-verify-password" />
          </div>
          <Button onClick={this.submit} label="Submit" />
        </div>
      </div>
    )
  }
}

export default cssModules(Signup, style)
