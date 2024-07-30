import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h2 className="h1-seo">How Do you want to check?</h2>
          <h3 className="d-none d-sm-block">
            There are 2 ways to check Plagiarism
          </h3>
          <div className="">

            <Button
              className="nav-link d-none d-lg-block"
              color="primary"
              // target="_blank"
              href="#"
            >
              <i className="tim-icons icon-spaceship" /> Static
            </Button>
            <Button
              className="nav-link d-none d-lg-block"
              color="primary"
              // target="_blank"
              href="#"
            >
              <i className="tim-icons icon-spaceship" /> Dynamic
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
