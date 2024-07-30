import React from "react";
import { Container, Button } from "reactstrap";
import {useNavigate } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import Static from "./Static.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import { Link } from "react-router-dom";

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  const navigate = useNavigate();

  const NavigateToStatic = () => {
    navigate("/static");
  };

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="wrapper">
          <div className="page-header header-filter">
            <div className="squares square1" />
            <div className="squares square2" />
            <div className="squares square3" />
            <div className="squares square4" />
            <div className="squares square5" />
            <div className="squares square6" />
            <div className="squares square7" />
            <Container id="dum">
              <div className="content-center brand">
                <h1 className="h1-seo" id="head">Preserving Originality,<br/> Defeating Duplication</h1>
                <h4 className="d-none d-sm-block">
                Empowering Academic Integrity and Content Authenticity Through Advanced Plagiarism Detection.
                </h4>
                <div className="">
                  <Link to='/static'>
                  <Button
                    className="nav-link d-none d-lg-block"
                    id="btncheck"
                    color="primary"
                    href="#"  
                  >
                    <i className="tim-icons icon-spaceship" /> Detect Plagiarism
                  </Button>
                  </Link>

                  {/* <Link to='/dynamic'>
                  <Button
                    className="nav-link d-none d-lg-block"
                    color="primary"
                    // target="_blank"
                    href="#"  
                  >
                    <i className="tim-icons icon-spaceship" /> Source Code
                  </Button>
                  </Link> */}
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="main">
          {/* <Basics />
          <Navbars />
          <Tabs />
          <Pagination /> 
          <Notifications />
          <Typography />
          <JavaScript />
          <NucleoIcons /> 
          <Signup />
          <Examples />
          <Download /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
