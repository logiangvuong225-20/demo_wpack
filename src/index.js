import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// import { Provider } from "react-redux";
// import { createStore, compose, applyMiddleware } from "redux";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import thunk from "redux-thunk";

// import App from "./containers/App";
import Login from "./Login/Login";

import "./index.scss";

// import reducer from "./reducers/index";
// import SignUp from "./components/SignUp/SignUp";

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router>
//         <Switch>
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/signup" component={SignUp} />
//           <Route path="/" component={App}>
//           </Route>
//         </Switch>
//       </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// export {
//   App,
// Login
// };

export const App = () => <h1>App</h1>;

export const LoginPage = ({ backgroundImage }) => (
  <Login backgroundImage={backgroundImage} />
);
