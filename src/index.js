import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import HomeTwo from "./HomeTwo";
import About from "./pages/About";
import ServiceDetailsLeftSidebar from "./service/ServiceDetailsLeftSidebar";
import ServiceDetailsRightSidebar from "./service/ServiceDetailsRightSidebar";
import Projects from "./project/Projects";
import ProjectDetails from "./project/ProjectDetails";
import NomunzulBattulga from "./project/NomunzulBattulga";
import BlogLeftSidebar from "./blog/BlogLeftSidebar";
import BlogRightSidebar from "./blog/BlogRightSidebar";
import BlogDetailsLeftSidebar from "./blog/BlogDetailsLeftSidebar";
import BlogDetailsRightSidebar from "./blog/BlogDetailsRightSidebar";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import NoMAtch from "./pages/404";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import AdvancedPlacement from "./service/AdvancedPlacement";
import ExamPreparation from "./service/ExamPreparation";
import OlympiadPreparation from "./service/OlympiadPreparation";
import ExtraCurricular from "./service/ExtraCurricular";
import firebase from "firebase";
firebase.initializeApp({
  apiKey: "AIzaSyDYH9PkqaC3XjQALRhhOh_6SpOSiYYhxU4",
    authDomain: "santschoolweb.firebaseapp.com",
    databaseURL: "https://santschoolweb.firebaseio.com",
    projectId: "santschoolweb",
    storageBucket: "santschoolweb.appspot.com",
    messagingSenderId: "333192592826",
    appId: "1:333192592826:web:1b76a3c11bcf79cc4df183",
    measurementId: "G-Q3H8BYN3T5",
});

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
          
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={HomeTwo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about-us`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}
            component={ServiceDetailsLeftSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-details-right-sidebar`}
            component={ServiceDetailsRightSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects`}
            component={Projects}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/project-details`}
            component={ProjectDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/Nomunzul-Battulga`}
            component={NomunzulBattulga}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-left-sidebar`}
            component={BlogLeftSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-right-sidebar`}
            component={BlogRightSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}
            component={BlogDetailsLeftSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`}
            component={BlogDetailsRightSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/advanced-placement`}
            component={AdvancedPlacement}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/exam-preparation`}
            component={ExamPreparation}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/olympiad-preparation`}
            component={OlympiadPreparation}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/extra-curricular`}
            component={ExtraCurricular}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-us`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/404`}
            component={PageNotFound}
          />
          <Route component={NoMAtch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.register();
