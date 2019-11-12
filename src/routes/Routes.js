import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Meetings from "../container/Meetings";
import WithNav from "../components/Navbar/withNav";

const Routes = () => {
  const OnMaintenance = () => (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      On Maintenance
    </div>
  );

  const GoToTheContent = props => {
    const handleClick = () => {
      props.history.push("/meetings");
    };

    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
          animation: "getin 0.5s ease"
        }}
      >
        <button onClick={handleClick} className="button primary">
          Go to content
        </button>
      </div>
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withRouter(GoToTheContent)} />
        <Route path="/content1" component={WithNav(OnMaintenance)} />
        <Route path="/content2" component={WithNav(OnMaintenance)} />
        <Route path="/meetings" component={Meetings} />
        <Route path="/content4" component={WithNav(OnMaintenance)} />
        <Route path="/content5" component={WithNav(OnMaintenance)} />
        <Route path="/content6" component={WithNav(OnMaintenance)} />
      </Switch>
    </Router>
  );
};

export default Routes;
