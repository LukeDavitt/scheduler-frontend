import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import { connect } from "react-redux"
import { default as Signup } from "../Signup"
import { default as Login } from "../Login"
import { default as Analyzer } from "../Analyzer"

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formState: "login"
    }
    this.setFormState = this.setFormState.bind(this)
  }

  setFormState(formState) {
    this.setState({ formState })
  }

  renderToggleContent() {
    switch (this.state.formState) {
      case "login":
        return (
          <div
            className={style.changeLink}
            onClick={() => this.setFormState("signup")}>
            Need an account? Signup.
          </div>
        )
      case "signup":
        return (
          <div
            className={style.changeLink}
            onClick={() => this.setFormState("login")}>
            Have an account? Login.
          </div>
        )
      default: return null
    }
  }

  render() {
    if (this.props.user.email) {
      return (<Analyzer />)
    }
    return (
      <div className={style.leader}>
        <h1 className={style.title}>Scheduler</h1>
        { this.state.formState === "signup" ? <Signup /> : null }
        { this.state.formState === "login" ? <Login /> : null }
        { this.renderToggleContent() }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(cssModules(Home, style))
