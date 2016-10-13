import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import "./styles/reset.css"
import { default as Home } from "./components/Home"
import { default as Settings } from "./components/Settings"
import { Provider } from "react-redux"
import store from "./redux/store"
import { default as App } from "./components/App"

//const App = props => (<div>{props.children}</div>)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="settings" component={Settings} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
)
