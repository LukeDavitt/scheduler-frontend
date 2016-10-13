import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import { connect } from "react-redux"
import Actions from "../../redux/actions"

export class Analyzer extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
    //this.submit = this.submit.bind(this)
  }

  logout() {
    this.props.dispatch(Actions.userLogOut())
  }
  // submit() {
  //   const user = {
  //     email: document.getElementById("signup-email").value,
  //     password: document.getElementById("signup-password").value
  //   }
  //   this.props.dispatch(Actions.userLogin(user))
  // }

  render() {
    return (
      <div>
        <h1>Logged In</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(cssModules(Analyzer, style))
